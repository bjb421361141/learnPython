#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2019/8/1 14:44
# @Author  : Baijb

"""
异步IO：
asyncio是Python 3.4版本引入的标准库，直接内置了对异步IO的支持
从asyncio模块中直接获取一个EventLoop的引用，然后把需要执行的协程扔到EventLoop中执行，就实现了异步IO

类似爬虫这种延时的IO操作，协程是个大利器，优点很多，他可以在一个阻塞发生时，挂起当前程序，跑去执行其他程序
例如：操作100次请求操作，然后进行100次请求的接受处理，单线程处理，减少cpu及寄存器的消耗

asyncio实现了TCP、UDP、SSL等协议

async和await是针对coroutine的新语法：（3.5版本后）
    把@asyncio.coroutine替换为async；
    把yield from替换为await。
"""

import asyncio

# 其中 sina使用https 进行访问，baidu 使用http 进行访问
import re

_dic = {"sina": "www.sina.com.cn", "baidu": "www.baidu.com", "baidu2": "www.baidu.com"}


@asyncio.coroutine
def hello(name):
    print("Hello %s !" % ('World' if not name else name,))  # 不存在名称使用'World'
    # 调用yield from 当前协程将中断 主线程将到EventLoop中执行其他任务
    # 等待其他操作 asyncio.sleep(1)是一个协程
    # r = yield from asyncio.sleep(1)
    returnMsg = yield from wget(_dic[name])
    print("访问对应网站：%s " % returnMsg)


@asyncio.coroutine
def wget(host):
    if not host:
        return "不存在对应的网站名称"
    print('wget %s...' % host)
    connect = asyncio.open_connection(host, 80)
    reader, writer = yield from connect
    header = 'GET / HTTP/1.0\r\nHost: %s\r\n\r\n' % host
    writer.write(header.encode('utf-8'))
    yield from writer.drain()
    respState = None
    while True:
        line = yield from reader.readline()
        if line == b'\r\n':
            # 换行回车后是body信息
            break
        respStr = line.decode('utf-8').rstrip()
        tmpReg = re.match(r'^HTTP/1.1 (\d+).*$', respStr)
        if tmpReg:
            respState = tmpReg.group(1)
        print('%s header > %s' % (host, respStr))
    # Ignore the body, close the socket
    writer.close()
    return respState


# 获取EventLoop:
loop = asyncio.get_event_loop()
# 执行coroutine
# tasks = [hello(name) for name in ['sina', 'baidu']]
tasks = [hello(name) for name in ['sina', 'baidu']]
loop.run_until_complete(asyncio.wait(tasks))
loop.close()
