#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2019/7/29 17:04
# @Author  : Baijb

"""
    WSGI：处理TCP连接、HTTP原始请求和响应格式的接口
    相当于java 中的servlet类，在此可以判断请求类型并对请求进行分发给不同的业务处理类进行处理
"""


def application(environ, start_response):
    method = environ['REQUEST_METHOD']
    path = environ['PATH_INFO']
    if method == 'GET':
        return handle_getmethod(environ, start_response)
    if method == 'POST':
        return handle_postmethod(environ, start_response)


def handle_getmethod(environ, start_response):
    print(environ['PATH_INFO'])  # 请求参数
    start_response('200 OK', [('Content-Type', 'text/html')])
    return [b'<h1>Hello, web!</h1>']


def handle_postmethod(environ, start_response):
    print(environ['PATH_INFO'])  # 请求参数
    start_response('200 OK', [('Content-Type', 'text/html')])
    return [b'<h1>Hello, web!</h1>']
