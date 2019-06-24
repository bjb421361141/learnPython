#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2019/6/22 10:19
# @Author  : Baijb
import itertools

"""
    无限序列
    无限序列只有在for迭代时才会无限地迭代下去，如果只是创建了一个迭代对象，它不会事先把无限个元素生成出来，事实上也不可能在内存中创建无限多个元素。
    无限序列虽然可以无限迭代下去，但是通常我们会通过takewhile()等函数根据条件判断来截取出一个有限的序列
    使用函数生成器也可以达到类似效果
"""
# 方法生成一个无限的序列 两个参数 start 和 step
natuals = itertools.count(1, 2)  # 从1开始步长为2
# 方法根据传入的参数生成一个循环的无限的序列 传入iterable对象
cycle_list = itertools.cycle("ABC")  # 循环输出ABC
# 重复输出第一个参数的内容，第二个参数为重复的次数
itertools.repeat('A', 3)

"""
    有限序列
"""
for x in itertools.chain('ABC', 'XYZ'):
    print(x)

# 把迭代器中相邻的重复元素挑出来放在一起
for key, group in itertools.groupby('AaaBBbcCAAa', lambda c: c.upper()):
    print(key, list(group))
