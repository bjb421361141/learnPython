#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2019/7/29 17:06
# @Author  : Baijb


"""
    python web 服务器
    WSGI接口：python内置接口用于处理TCP连接、HTTP原始请求和响应格式
    web
"""

from wsgiref.simple_server import make_server
# 导入我们自己编写的application函数:
from others import myWebApplication


# # 创建一个服务器，IP地址为空，端口是8000，处理函数是application:
# httpd = make_server('', 8000, myWebApplication.application)
# print('Serving HTTP on port 8000...')
# # 开始监听HTTP请求:
# httpd.serve_forever()

if __name__ == '__main__':
    with make_server('', 8000, myWebApplication.application) as httpd:
        sa = httpd.socket.getsockname()
        print("Serving HTTP on", sa[0], "port", sa[1], "...")
        import webbrowser

        webbrowser.open('http://localhost:8000/xyz?abc')
        httpd.handle_request()  # serve one request, then exit
        # 开始监听HTTP请求:
        # httpd.serve_forever()
