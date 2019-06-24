#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2019/6/22 10:47
# @Author  : Baijb
from contextlib import contextmanager, closing
from urllib.request import urlopen

try:
    f = open('/path/to/file', 'r')
    f.read()
finally:
    if f:
        f.close()

"""
    通过with关键字来简化固定操作，
    对象必须是一个实现__enter__和__exit__方法的对象
"""
with open('/path/to/file', 'r') as f:
    f.read()


class Query(object):

    def __init__(self, name):
        self.name = name

    def __enter__(self):
        print('Begin')
        return self

    def __exit__(self, exc_type, exc_value, traceback):
        if exc_type:
            print('Error')
        else:
            print('End')

    def query(self):
        print('Query info about %s...' % self.name)


with Query('queryContent') as q:
    q.query()

"""
    contextlib包使用:
        将对象转成上下文对象，可以使用with 来进行上下文的操作
"""


class Query2(object):

    def __init__(self, name):
        self.name = name

    def query(self):
        print('Query info about %s...' % self.name)


@contextmanager
def create_query(name):
    print('Begin')
    q2 = Query2(name)
    yield q2
    print('End')


with create_query("queryContent") as q2:
    q2.query()

"""
    closing 对象是实现了以下两个方法
    __enter__
    __exit__：默认调用 self.thing.close()
"""

with closing(urlopen('https://www.python.org')) as page:
    for line in page:
        print(line)
