# -*- coding: utf-8 -*-
"""
    面向对象高级编程
        枚举类：定义常量
        mateClass:类的定制(元类),创建类的时候会先调用metaClass中的__new__方法，后再调用type中的__new__进行类的创建（类中使用__init__方法初始化类）
            __new__ 和 __init__的区别：__new__是生成类的实例，而__init__是对实例的数据的初始化
            继承自object的新式类才有__new__
            __new__至少要有一个参数cls，代表要实例化的类，此参数在实例化时由Python解释器自动提供
            __new__必须要有返回值，返回实例化出来的实例，这点在自己实现__new__时要特别注意，可以return父类__new__出来的实例，或者直接是object的__new__出来的实例
            __init__有一个参数self，就是这个__new__返回的实例，__init__在__new__的基础上可以完成一些其它初始化的动作，__init__不需要返回值
            若__new__没有正确返回当前类cls的实例，那__init__是不会被调用的，即使是父类的实例也不行
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

    def __new__(cls, *args, **kwargs):
        print("这边有调用Student的__new__方法")
        return object.__new__(cls)

    @property
    def gender(self):
        return self.gender

    @gender.setter
    def gender(self, value):
        if isinstance(value, Gender):
            self.gender = value
        else:
            raise BaseException


"""
    cls(自身):<class '__main__.ListMetaclass'>
    name(类名):MyList
    bases（基类）:(<class 'list'>,)
{'__module__': '__main__', '__qualname__': 'MyList', '__init__': <function MyList.__init__ at 0x000001C60204B2F0>, '__classcell__': <cell at 0x000001C601F9BFD8: empty>}
"""


class ListMetaclass(type):
    def __new__(cls, name, bases, attrs):
        print("===================调用metaclass方法===================")
        print(cls, name, bases, attrs, sep="\n")
        attrs['add'] = lambda self, value: self.append(value)
        c = type.__new__(cls, name, bases, attrs)
        print(type(c))
        return c


"""
    可以有多个基类，
    类创建的时候会调用
"""

# class MyList(Student, list, metaclass=ListMetaclass):
#     def __init__(self):
#         print("===================调用自身构造方法===================")
#         super().__init__()


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
    # Hello = type('Hello', (object,), dict(hello=lambda self, x: print(x), msg="hello demo"))  # 创建Hello class
    # Hello().hello("你好！")
    # print(Hello().msg)
    # print(type(Hello))
    """
        metaclass 测试
    """
    # m = MyList("bai", "2")
    # m.add("1")
    # print(m)
    s = Student("bai", Gender.Male)
    print("测试", s.name, s.gender, sep="\n")
