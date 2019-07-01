#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2019/6/22 11:12
# @Author  : Baijb
import urllib
from urllib import request, parse

"""
    使用Get方式进行请求
"""
req = request.Request(
    'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=403&rsv_pq=b10d723f000628a7&rsv_t=9347Fp80GZmn3ZzRFzwn5%2BYoCMRF1UNDzY%2B0JieSTeFcMZWfdPS6icWDYCU&rqlang=cn&rsv_enter=1&rsv_sug3=3&rsv_sug1=2&rsv_sug7=101')
# req = request.Request('https://www.google.com.hk/')
# 设置请求头信息可以绕过一些网站的限制（例如百度PC端需要JavaScript的支持）
req.add_header('User-Agent',
               'Mozilla/6.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/8.0 Mobile/10A5376e Safari/8536.25')

with request.urlopen(req) as f:
    data = f.read()
    print('Status:', f.status, f.reason)
    for k, v in f.getheaders():
        print('%s: %s' % (k, v))
    print('Data:', data.decode('utf-8'))

"""
    使用Post方式进行请求
"""
print('Login to weibo.cn...')
email = input('Email: ')
passwd = input('Password: ')
login_data = parse.urlencode([
    ('username', email),
    ('password', passwd),
    ('entry', 'mweibo'),
    ('client_id', ''),
    ('savestate', '1'),
    ('ec', ''),
    ('pagerefer', 'https://passport.weibo.cn/signin/welcome?entry=mweibo&r=http%3A%2F%2Fm.weibo.cn%2F')
])

req = request.Request('https://passport.weibo.cn/sso/login')
req.add_header('Origin', 'https://passport.weibo.cn')
req.add_header('User-Agent',
               'Mozilla/6.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/8.0 Mobile/10A5376e Safari/8536.25')
# 从哪个网站跳转过去的
req.add_header('Referer',
               'https://passport.weibo.cn/signin/login?entry=mweibo&res=wel&wm=3349&r=http%3A%2F%2Fm.weibo.cn%2F')

with request.urlopen(req, data=login_data.encode('utf-8')) as f:
    print('Status:', f.status, f.reason)
    for k, v in f.getheaders():
        print('%s: %s' % (k, v))
    print('Data:', f.read().decode('utf-8'))

"""
使用代理进行请求
"""
# ************************************** 不包含密码*************************************
"""
    创建普通代理Handler
    创建自定义openeer对象，创建request对象
    使用 opener.open(request)来进行数据的请求 //urlopen() 是不能使用代理的
        **request.install_opener(opener) 将opener应用到全局，之后所有的，不管是opener.open()还是urlopen() 发送请求，都将使用自定义代理。
    # 这边通过使用 shadowsocks 本地代理请求（使用的是socket5代理） 隐藏掉应用层的协议，知道服务器端才进行解析并请求数据   
"""
httpproxy_handler = request.ProxyHandler({"http": "127.0.0.1:1080", "https": "127.0.0.1:1080"})
nullproxy_handler = request.ProxyHandler({})
proxySwitch = True
if proxySwitch:
    opener = request.build_opener(httpproxy_handler)
else:
    opener = request.build_opener(nullproxy_handler)
url = "https://www.google.com.hk"
request = request.Request(url)
request.add_header('accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8')
request.add_header('user-agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36')

response = opener.open(request)
print(response.read().decode("utf8"))

# ************************************** 包含密码*************************************
"""
    创建一个密码管理对象， 用来保存需要处理的用户名密码
    添加账户信息， 第一个参数realm 是和远程服务器相关的域领域 一般都写None
    构建一个代理基础用户名/密码验证的ProxyBasicAuthHandle处理对象， 参数是创建的密码管理对象
    通过build_opener() 方法使用这些代理Handler对象， 创建自定义的opener对象参数，包括构建的 proxy_handler 和 proxyauth_handler
    构造request 请求
    使用自定义的opener发送请求
"""

# user = "mr_mao_hacker"
# passwd = "sffqry9r"
# proxy_server = "61.158.163.130:16816"
# passwdmgr = urllib.request.HTTPPasswordMgrWithDefaultRealm()
# passwdmgr.add_password(None, proxy_server, user, passwd)
# proxy_auth_handler = urllib.request.ProxyBasicAuthHandler(passwdmgr)
# # proxy_auth_handler = urllib.request.ProxyBasicAuthHandler()
# # proxy_auth_handler.add_password('realm', 'host', 'username', 'password')
# opener = urllib.request.build_opener(proxy_auth_handler)
# request = urllib.request.Request("http://www.baidu.com/")
# response = opener.open(request)
# print(response.read().decode("utf8"))
