#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2019/6/14 20:21
# @Author  : Baijb

from collections import namedtuple, deque, defaultdict, OrderedDict

"""
    实现先进先出的字典类，先添加的先删除
"""


class LastUpdatedOrderedDict(OrderedDict):

    def __init__(self, capacity):
        super(LastUpdatedOrderedDict, self).__init__()
        self._capacity = capacity

    def __setitem__(self, key, value):
        containsKey = 1 if key in self else 0
        if len(self) - containsKey >= self._capacity:
            last = self.popitem(last=False)
            print('remove:', last)
        if containsKey:
            del self[key]
            print('set:', (key, value))
        else:
            print('add:', (key, value))
        OrderedDict.__setitem__(self, key, value)


"""
    namedtuple是一个函数，它用来创建一个自定义的tuple对象，并且规定了tuple元素的个数，并可以用属性而不是索引来引用tuple的某个元素
    deque 是一个函数，它用来创建一个继承于list对象，可以用来实现队列和栈的功能
    defaultdict 是一个函数，它用来创建一个dict 对象,这个对象和普通的dict 对象的区别在于在key不存在时会返回一个默认值
    OrderedDict 是一个函数，它用来创建一个dict 对象,这个对象和普通的对象的区别在于key是有序的而普通的是无序的(迭代时，我们无法确定Key的顺序!!)
        * OrderedDict的Key会按照插入的顺序排列，不是Key本身排序
"""
if __name__ == "__main__":
    Point = namedtuple('Point', ['x', 'y'])  # 生成一个继承tuple的类 namedtuple('名称', [属性list]):
    # Point = type('Point', (tuple,), dict(__init__= lambda self, x,y: self.x =x,self.y =y))  # 创建Hello class
    p = Point(1, 2)
    print(p.x, p.y, isinstance(p, Point), isinstance(p, tuple))

    q = deque(['a', 'b', 'c'])
    q.append('x')
    q.appendleft('y')
    print(q)

    dd = defaultdict(lambda: 'N/A')
    dd['key1'] = 'abc'
    print(dd['key1'], dd['key2'])

    od = OrderedDict([('a', 1), ('c', 2), ('b', 3)])
    print(list(od.keys()))
