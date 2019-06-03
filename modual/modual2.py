# -*- coding: utf-8 -*-
"""
    class后面紧接着是类名，即Student，类名通常是大写开头的单词，
    紧接着是(object)，表示该类是从哪个类继承下来
    创建后的实例可以自由绑定属性

    类是创建实例的模板，而实例则是一个一个具体的对象，各个实例拥有的数据都互相独立，互不影响
    私有变量:前部带有双下滑线的变量或函数，无法被外部直接使用
        ps:一个下划线开头的实例变量名,实例变量外部是可以访问的，但是，按照约定俗成的规定，当你看到这样的变量时，意思就是，“虽然我可以被访问，但是，请把我视为私有变量，不要随意访问
    特殊变量：前后带双下滑线的变量或函数，可以被外部直接使用
"""


class Student(object):
    # 锁定类的变量，实例对象或类无法再添加属性
    __slots__ = ("__name", "__score")

    # 类变量
    __secret = "私有变量"
    _no_strict = "非强制私有变量"

    score = "myScore"

    """
        __init__ 函数用于类的初始化
        和普通的函数相比，在类中定义的函数只有一点不同，就是第一个参数永远是实例变量self，并且，调用时，不用传递该参数
    """

    def __init__(self, name, score):
        self.__name = name
        self.__score = score

    def print_score(self):
        print('%s: %s' % (self.__name, self.__score))


if __name__ == "__main__":
    stu = Student("xiaoMing", "18")
    # print(stu.__secret)
    print(stu._no_strict)
    stu.print_score()
    print(stu.score)
    # stu.score = "b"
    # print(stu.score)
