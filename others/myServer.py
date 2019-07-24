#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2019/7/16 9:47
# @Author  : Baijb
import socket
import threading
import time

from demo.myThread.myThread import MyThread

"""
    模拟服务器支持udp和tcp请求:
        创建两个可以进行操作的线程来分别接收tcp和udp请求
"""


def tcplink(sock, addr):
    """
    处理tcp请求数据
    :param sock:请求对象
    :param addr: 请求对象地址
    :return:
    """
    print('TCP:Accept new connection from %s:%s...' % addr)
    sock.send(b'Welcome to Connect TCP! ')
    while True:
        data = sock.recv(1024)
        time.sleep(1)
        if not data or data.decode('utf-8') == 'exit':
            print('no data then exit ' + data)
            break
        sock.send(('Hello, %s!' % data.decode('utf-8')).encode('utf-8'))
    sock.close()
    print('Connection from %s:%s closed.' % addr)
    print(sock.recv())


def udplink(sock, addr):
    """
    处理udp请求数据
    :param sock:请求对象
    :param addr: 请求对象地址
    :return:
    """
    print('UDP:Accept new connection from %s:%s...' % addr)
    sock.send(b'Welcome to Connect UDP!')
    while True:
        data = sock.recvfrom(1024)
        time.sleep(1)
        if not data or data.decode('utf-8') == 'exit':
            print('no data then exit ' + data)
            break
        sock.sendto(('Hello, %s!' % data.decode('utf-8')).encode('utf-8'))
    sock.close()
    print('Connection from %s:%s closed.' % addr)
    print(sock.recv())


def tcpThread():
    tcpSocket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    # 绑定监听端口 并设置最大监听数
    tcpSocket.bind(('127.0.0.1', 8080))
    tcpSocket.listen(5)
    print('Waiting for connection...')
    while True:
        # 接受一个新连接:
        sock, addr = tcpSocket.accept()
        # 创建新线程来处理TCP连接:
        t = threading.Thread(target=tcplink, args=(sock, addr))
        t.start()


def udpThread():
    udpSocket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    # 绑定监听端口 并设置最大监听数
    udpSocket.bind(('127.0.0.1', 9999))
    print('Waiting for connection...')
    while True:
        # 接受一个新连接:
        sock, addr = udpSocket.accept()
        # 创建新线程来处理UDP连接:
        t = threading.Thread(target=tcplink, args=(sock, addr))
        t.start()


if __name__ == "__main__":
    tcpTd = threading.Thread(target=tcpThread, name="TCP_Thread")
    udpTd = MyThread(target=udpThread, args=("do_thread_job",), name="UDP_Thread")
    tcpTd.start()
    udpTd.start()

    # 阻塞线程防止主线程关闭
    tcpTd.join()
    udpTd.join()
