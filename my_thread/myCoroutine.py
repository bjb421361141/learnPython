#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2019/8/1 10:22
# @Author  : Baijb

"""
协程（Coroutine）:纤程（Fiber）\\ 绿色线程（GreenThread）
    层级调用，类似于函数调用：A调用B，B在执行过程中又调用了C，C执行完毕返回，B执行完毕返回，最后是A执行完毕；
    一个线程中包含多个协程，协程通过程序控制（类似于方法调用）来进行协程的阻塞中断，内存及cup的开销小于两个线程的使用。
    * 两个线程的阻塞和切换：同步锁，线程状态切换及上下文切换,消耗寄存器和cpu资源 （线程的状态：初始化，可运行，运行中，阻塞，终止）
    python可以通过 yield/send 的方式实现协程 （send 只能传递str类型） 3.5版本 async/await 可实现


优势：
    没有线程切换的开销，和多线程比，线程数量越多，协程的性能优势就越明显
    不需要多线程的锁机制，因为只有一个线程，也不存在同时写变量冲突，在协程中控制共享资源不加锁，只需要判断状态就好了，所以执行效率比多线程高很多。

"""


def consumer():
    r = ""
    while True:
        n = yield r
        if not n:
            return
        print('[CONSUMER] Consuming %s...' % n)
        r = '200 OK'


def produce(c):
    c.send(None)
    n = 0
    while n < 5:
        n = n + 1
        print('[PRODUCER] Producing %s...' % n)
        r = c.send(n)
        print('[PRODUCER] Consumer return: %s' % r)
    c.close()


c = consumer()
produce(c)
