#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2019/6/28 17:19
# @Author  : Baijb

"""
IP代理池爬取
    使用mysql进行数据的保存和查询操作
取自 https://blog.csdn.net/goldlone/article/details/81415959
TODO
    代理IP数据更新线程设置为可控的
    将数据库信息设置成可配置
    整理请求头信息（避免直接写死）
    将提取代理ip信息的代码单独归类
    分接口和实现，使用MongoDB来替代mysql？？

"""
import threading
import requests
import time
from scrapy import Selector
import pymysql
import sys

DB_HOST = '192.168.245.128'
DB_USER = 'crawl'
DB_PASSWORD = 'password'
DB_PORT = '3306'
DB_NAME = 'CRAWL_DB'
DB_CHARSET = 'utf8'


class MyProxy:

    """
        定义全局变量
    """
    # 是否输出日志
    mute = False
    conn = pymysql.connect(
        host=DB_HOST,
        port=3306,
        user=DB_USER,
        passwd=DB_PASSWORD,
        db=DB_NAME,
        charset='utf8')
    cursor = conn.cursor()

    """
        初始化IP代理池
    """
    def __init__(self):
        # 暂时不使用删除线程
        # DeleteIPThread().start()
        pass

    """
        类中统一使用这个进行输出
    """
    def __log(self, *a, **b):
        if not self.mute:
            print(a, **b)

    '''
        从数据库中随机拿一个有效IP
        返回None时表示没有地址可用了
        :return: (ip, port, speed, type) or None
    '''
    def get_ip(self):
        sql = '''
            select ip,port,speed,proxy_type from proxy_ip order by rand() limit 1;
        '''
        self.cursor.execute(sql)
        if self.cursor.arraysize > 0:
            # (ip, port, speed, type)
            res = self.cursor.fetchone()
            if self.judge_ip(res[0], res[1]):
                return res
            else:
                return self.get_ip()
        self.crawl_ips()
        return self.get_ip()

    '''
        爬取西刺免费代理的地址池
        :return: 无返回
    '''
    def crawl_ips(self):
        # TODO 可以配置在配置文件中
        headers = {
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
            "Accept-Encoding": "gzip, deflate",
            "Accept-Language": "zh,en-US;q=0.9,en;q=0.8,zh-TW;q=0.7,zh-CN;q=0.6",
            "Cache-Control": "max-age=0",
            "Connection": "keep-alive",
            "Cookie": "_free_proxy_session=BAh7B0kiD3Nlc3Npb25faWQGOgZFVEkiJTZjNDNmNjgzZWY5OWQ4ZWRmNTA5MzU3YWJiOGJlYWMwBjsAVEkiEF9jc3JmX3Rva2VuBjsARkkiMVBsU3h6aU0xa25KWlZXZE5qZ0tGd21xYkJtc3J0K2w0YlEwdUhlNjFBN009BjsARg%3D%3D--abe7f4154a205b8515bfb204e3fe924006ae1d68",
            "Host": "www.xicidaili.com",
            "Upgrade-Insecure-Requests": "1",
            "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.75 Safari/537.36"
        }
        url = "http://www.xicidaili.com/nn/1"
        response = None
        for i in range(10):
            try:
                response = requests.get(url, headers=headers, timeout=10)
            except requests.exceptions.Timeout:
                self.__log("请求超时，第%d次重新请求..." % (i + 1))
                response = requests.get(url, headers=headers, timeout=10)
            if response.status_code == 200:
                break
        if response is None:
            self.__log("网络太差，或者地址被封，11次请求均超时")
            return
        s = Selector(response)
        all_list = s.xpath('//table[@id="ip_list"]/tr')[1:]
        for item in all_list[1:]:
            # TODO 这边可以使用多种方式来进行数据的解析？
            try:
                line = item.xpath('./td')
                ip = line[1].xpath('string(.)').extract_first()
                port = line[2].xpath('string(.)').extract_first()
                address = ''
                if len(line[3].xpath('./a')) > 0:
                    address = line[3].xpath('./a/text()').extract_first()
                    address = str(address)
                type = line[5].xpath('string(.)').extract_first()
                speed = 0.0
                if len(line[6].xpath('./div/@title')) > 0:
                    speed_str = line[6].xpath('./div/@title').extract_first()
                    speed = float(speed_str[:-1])

                self.__log(ip, port, address, type, speed)

                # 直接将数据保存入库
                sql = '''
                    INSERT 
                    INTO proxy_ip(ip, port, address, proxy_type, speed) 
                    VALUES ('{0}', '{1}', '{2}', '{3}', '{4}');
                '''
                self.cursor.execute(sql.format(ip, port, address, type, speed))
                self.conn.commit()
            except:
                print(sys.exc_info())

    '''
        判断给出的代理 ip 是否可用
        :param ip:
        :param port:
        :return:
    '''
    def judge_ip(self, ip, port):
        # TODO url需要配置到文件中，便于对特定网站进行
        http_url = 'https://www.baidu.com/'
        proxy_url = 'http://{0}:{1}'.format(ip, port)

        try:
            proxy_dict = {
                'http': proxy_url
            }
            self.__log("正在测试代理IP是否可用 => ", proxy_url)
            response = requests.get(http_url, proxies=proxy_dict, timeout=5)

        except Exception as e:
            self.__log("代理：", proxy_url, "不可用，即将从数据库中删除")
            self.delete_ip(ip)
            return False
        else:
            code = response.status_code
            if code >= 200 or code < 300:
                self.__log("代理 => ", proxy_url, "可用")
                return True
            else:
                self.delete_ip(ip)
                return False

    '''
    删除不可用的IP
    :param ip:
    :return:
    '''
    def delete_ip(self, ip):
        sql = '''
            delete from proxy_ip WHERE ip='{0}';
        '''
        self.cursor.execute(sql.format(ip))
        self.conn.commit()


class DeleteIPThread(threading.Thread):

    def __init__(self):
        super().__init__()
        self.daemon = True

    def run(self):
        conn = pymysql.connect(
            host=DB_HOST,
            port=3306,
            user=DB_USER,
            passwd=DB_PASSWORD,
            db=DB_NAME,
            charset='utf8')
        cursor = conn.cursor()
        sql = "select ip,port from proxy_ip;"
        proxy = MyProxy()
        while True:
            cursor.execute(sql)
            all_list = cursor.fetchall()
            for ip, port in all_list:
                print(ip, port)
                if proxy.judge_ip(ip, port) is False:
                    proxy.delete_ip(ip)
                time.sleep(1)
            time.sleep(20)

    def circle_judge(self):
        pass


if __name__ == '__main__':
    my_proxy = MyProxy()
    my_proxy.crawl_ips()
