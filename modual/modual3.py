# -*- coding: utf-8 -*-
"""
    继承和多态
    调用父类方法的方式：
         一、使用未绑定子类的父类的方法，要传入子类的对象，即self  A.func(self)
         二、使用super()调用   super().func()
    多重继承：
         命名规范：类名+MixIn（相当于一个抽象类）
"""


class PlayMixIn:
    def playball(self):
        print("playing")

    def playgame(self):
        pass


class Parent:
    def __init__(self, name):
        self.name = name
        print("Parent构造方法：" + self.name)

    def print_name(self):
        print("Parent print_name：" + self.name)

    def __print_property(self):
        print("这是" + self.name + "私有的方法")


# 加上MixIn用于区分类和接口（ps:实际上是抽象类）
class Son(Parent, PlayMixIn):
    # 会直接覆盖父类的对应方法 可以使用super方法
    # 和java中的不同  Java会调用父类的构造方法，而Python不会
    def __init__(self, name):
        super().__init__(self.name)
        self.name = name
        # print("Son构造方法：" + self.name)

    def print_name(self):
        # super().__init__(self.name)
        print("Son构造方法：" + self.name)

    def son_property(self):
        print("这是" + self.name + "的方法")


if __name__ == "__main__":
    # parent = Parent("DaMing")
    son = Son("XiaoMing")
    # son.print_name()
    son.playball()
