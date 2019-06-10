# -*- coding: utf-8 -*-
"""
    面向对象高级编程
        修改类对象的属性：
        1、__slots__ 来限制类中的属性（只对当前类有用，对继承类无用）
        2、使用@property 和@属性方法名.setter 来进行限制对变量直接操作的限制(ps :可以对属性进行控制，避免程序因为数据而出错)，默认设置成类的属性
"""


class SeniorClass:
    __slots__ = ("_score", "_name")

    # 类属性
    _birth = 1992

    # 输出年龄
    def print_my_age(self):
        print(self.age)

    @property
    def age(self):
        return 2015 - self._birth

    def __init__(self, value):
        self._score = value

    def get_score(self):
        return self._score

    def set_score(self, value):
        self._score = value

    @property
    def name(self):
        return self._name

    @name.setter
    def name(self, value):
        result = ""
        for ind, x in enumerate(value):
            if ind == 0:
                result += x.upper()
            else:
                result += x.lower()
        self._name = result


class SeniorClass2(SeniorClass):
    pass


if __name__ == "__main__":
    senior = SeniorClass(30)
    """
        _birth 虽然是类属性和私有的属性，但是还是可以被读取和修改，导致方法 print_my_age 不稳定
        这时可以做类似于age属性的设置将属性置为只读，或者使用__slots__进行限制（当前类）
        但是当_birth为非只读的情况下，限制_birth值输入规则成为问题
    """
    print(senior._birth)
    senior.print_my_age()
    # senior._birth = 2014
    senior.print_my_age()

    """
        使用set和get方法来对私有变量进行控制
    """
    # # 外部可以修改变量的值（非双下滑线）
    # senior._score = 20
    # print(senior.get_score())
    """
        使用@property 和 @属性.setter 来进行属性的输入和输出控制 
        使用
    """
    senior.name = "BaiJb"
    print(senior.name)

    senior2 = SeniorClass2(40)
    senior2._birth = 2014
    senior2.newAttr = "a"
    senior2.name = "bai"
    print(senior2._birth, senior2.newAttr, senior2.name)
