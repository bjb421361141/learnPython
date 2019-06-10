# -*- coding: utf-8 -*-
"""
    继承和多态
    调用父类方法的方式：(Employee 为父类 Designer为子类)
         一、使用未绑定子类的父类的方法，要传入子类的对象，即self   eg: Employee.__init__(self, name, 5000)
         二、使用super()调用                                    eg:super(Designer, self).__init__(name, 5000)
    多重继承：
         命名规范：类名+MixIn（相当于一个抽象类）
         初始化顺序
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
        Parent.__init__(self, name)
        # super(Son, self).__init__(name)

    def print_name(self):
        # super().__init__(self.name)
        print("Son构造方法：" + self.name)

    def son_property(self):
        print("这是" + self.name + "的方法")


"""
    多重继承:
        实例化顺序：自顶向下进行实例化
        初始化顺序：自底向上进行初始化(子类-->父类)
        方法的调用顺序:名称相同的情况下按类中继承关系从左至右来进行方法的调用 例如X（A,B） 同名情况下调用A中的方法
"""


class Person(object):
    def __init__(self, name):
        print("====初始化Person类实例信息====")
        self.name = name

    def speak(self):
        print("%s 说: 我 是 %s。" % (self.name, self.name))


class Foreigner(object):
    def __init__(self, name):
        print("====初始化Foreigner类实例信息====")
        self.name = name

    def speak(self):
        print("%s say: my name is %s。" % (self.name, self.name))

    def extr_fn(self):
        print("特殊的方法")


class A(Person):

    def __init__(self, name, age):
        print("====初始化A类实例信息====")
        Person.__init__(self, name)
        self.age = age

    def speak(self):
        print("%s 说: 我叫 %s ，我今年 %d 岁。" % (self.name, self.name, self.age))


class B(Foreigner):

    def __init__(self, name, age, grade):
        print("====初始化B类实例====")
        Foreigner.__init__(self, name)
        self.age = age
        self.grade = grade

    def speak(self):
        print("%s 说: 我叫 %s ，我今年上 %d 年级。" % (self.name, self.name, self.grade))


class C(A, B):
    # def __init__(self, name, age, grade):
    #     print("====初始化C类实例====")
    #     B.__init__(self, name, grade)
    #     A.__init__(self, name, age)
    pass


if __name__ == "__main__":
    # son = Son("XiaoMing")
    # son.print_name()
    # son.playball()

    c = C("Bai", 7)
    c.speak()
    c.extr_fn()
    print(c.grade)
