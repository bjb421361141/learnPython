#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2019/7/29 17:04
# @Author  : Baijb

"""
    WSGI：处理TCP连接、HTTP原始请求和响应格式的接口

"""
def application(environ, start_response):
    start_response('200 OK', [('Content-Type', 'text/html')])
    return [b'<h1>Hello, web!</h1>']