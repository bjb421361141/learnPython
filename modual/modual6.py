# -*- coding: utf-8 -*-
"""
    面向对象高级编程
        枚举类：定义常量
        mateClass:类的定制(元类)
"""
from enum import Enum, unique


@unique
class Gender(Enum):
    Male = 0
    Female = 1


class Student(object):
    def __init__(self, name, gender):
        self.name = name
        self.gender = gender


class ListMetaclass(type):
    def __new__(cls, name, bases, attrs):
        attrs['add'] = lambda self, value: self.append(value)
        return type.__new__(cls, name, bases, attrs)


if __name__ == "__main__":
    # 枚举类测试
    # bart = Student('Bart', Gender.Male)
    # if bart.gender == Gender.Male:
    #     print('测试通过!')
    # else:
    #     print('测试失败!')

    """
        使用class 定义类是通过type进行创建的。
        class 定义的类相当于type类的实例
    """
    Hello = type('Hello', (object,), dict(hello=lambda self, x: print(x), msg="hello demo"))  # 创建Hello class
    Hello().hello("你好！")
    print(Hello().msg)
    print(type(Hello))
