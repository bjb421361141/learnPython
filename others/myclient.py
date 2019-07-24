#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2019/7/16 9:46
# @Author  : Baijb

import socket
import time


def autoClose(socket):
    time.sleep(10)
    socket.send("exit".encode("UTF-8"))


s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.connect(("127.0.0.1", 8080))  # 连接端口
print("-------------发送数据：客户端发出请求--------------")
s.send("客户端发出请求".encode("UTF-8"))  # byte数据
# print("-------------发送数据：10秒后发送退出请求 --------------")
# t = threading.Thread(target=autoClose, args=(s,))
# 接收数据:
buffer = []
print("-------------接收欢迎消息--------------")
print(s.recv(1024).decode('utf-8'))
for data in [b'Michael', b'Tracy', b'Sarah']:
    # 发送数据:
    s.send(data)
    print(s.recv(1024).decode('utf-8'))
s.send(b'exit')
s.close()

s2 = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
for data in [b'UDP Michael', b'UDP Tracy', b'UDP Sarah']:
    # 发送数据:
    s2.sendto(data, ('127.0.0.1', 9999))
    # 接收数据:
    print(s2.recv(1024).decode('utf-8'))
s2.close()
