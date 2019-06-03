# -*- coding: utf-8 -*-
"""
    面向对象高级编程
        多重继承：
            MixIn
"""


class SeniorClass:
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


if __name__ == "__main__":
    senior = SeniorClass(30)
    """
        _birth 虽然是类属性和私有的属性，但是还是可以被读取和修改，导致方法 print_my_age 不稳定
        这时可以做类似于age属性的设置将属性置为只读
        但是当_birth为非只读的情况下，限制_birth值输入规则成为问题
    """
    print(senior._birth)
    senior.print_my_age()
    senior._birth = 2014
    senior.print_my_age()

    """
        使用set和get方法来对私有变量进行控制
    """
    # # 外部可以修改变量的值（非双下滑线）
    # senior._score = 20
    # print(senior.get_score())
    """
        使用@property 和 @属性.setter 来进行属性的输入和输出控制 
    """
    senior.name = "BaiJb"
    print(senior.name)
