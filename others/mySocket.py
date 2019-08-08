#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2019/7/15 10:28
# @Author  : Baijb

import socket
import ssl
from urllib.parse import urlparse

"""
    Python 中socket的简单使用
    urllib包底层使用的是socket进行接口请求
"""


def urlRequest(url):
    """
    请求url地址（http,https）
    :param url:
    :return:
    """
    # purl = urlparse(url)
    # 根据请求路径匹配请求端口
    # 创建一个socket:AF_INET指定使用IPv4协议，AF_INET6 IPv6协议。SOCK_STREAM指定使用面向流的TCP协议
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    # 建立连接:
    s.connect(('www.baidu.com', 443))
    s.send(b'GET / HTTP/1.1\r\nHost: www.baidu.com\r\nConnection: close\r\n\r\n')
    # 接收数据:
    buffer = []
    while True:
        # 每次最多接收1k字节:
        d = s.recv(1024)
        if d:
            buffer.append(d)
        else:
            break
    data = b''.join(buffer)

    header, html = data.split(b'\r\n\r\n', 1)  # 头信息和信息体
    print(header.decode('utf-8'))
    # 把接收的数据写入文件:
    with open('C:\\Users\\Baijb\\Desktop\\baidu.html', 'wb') as f:
        f.write(html)
    s.close()

    sock = ssl.wrap_socket(socket.socket())
    sock.connect(('www.sina.com.cn', 443))  # 地址或域名 + 端口号
    sock.send('GET / HTTP/1.1\r\n'.encode())
    sock.send('Host: www.sina.com.cn\r\n'.encode())
    sock.send(
        'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8\r\n'.encode())
    sock.send('Upgrade-Insecure-Requests: 1\r\n'.encode())
    sock.send(
        'User-Agent: Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36\r\n'.encode())
    sock.send('Connection: close\r\n\r\n'.encode())

    # 接收数据:
    buffer2 = []
    while True:
        # 每次最多接收1k字节:
        d = sock.recv(1024)
        if d:
            buffer2.append(d)
        else:
            break
    data2 = b''.join(buffer2)

    header, html = data2.split(b'\r\n\r\n', 1)
    print(header.decode('utf-8'))
    # 把接收的数据写入文件:
    with open('C:\\Users\\Baijb\\Desktop\\sina.html', 'wb') as f:
        f.write(html)
    sock.close()

urlRequest("")
