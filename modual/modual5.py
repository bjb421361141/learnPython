# -*- coding: utf-8 -*-
"""
    面向对象高级编程
        定制类（使用python提供的特殊方法）：
            __str__ 和 __repr__ ：定制化类的信息输出
            __iter__:定制类为可迭代的对象，类似List，tuple,可用于for in 语句，需要实现__next__
            __next__：用于获取对象迭代时返回的下一个值
            __getitem__：用于获取列表中的第n个数据
            __call__:使对象变为可调用
"""


class Fib(object):
    # 不允许外部设置变量
    __slots__ = ("__a", "__b")

    def __init__(self):
        self.__a, self.__b = 0, 1  # 初始化两个计数.__a，b

    def __iter__(self):
        return self  # 实例本身就是迭代对象，故返回自己

    # list 或者 tuple 类似？
    def __next__(self):
        self.__a, self.__b = self.__b, self.__a + self.__b  # 计算下一个值
        if self.__a > 100:  # 退出循环的条件
            self.__a, self.__b = 0, 1  # 重新进行初始化
            raise StopIteration()
        return self.__a  # 返回下一个值

    def __getitem__(self, n):
        if isinstance(n, int):  # n是索引
            a, b = 1, 1
            for x in range(n):
                a, b = b, a + b
            return a
        if isinstance(n, slice):  # n是切片
            start = n.start
            stop = n.stop
            if start is None:
                start = 0
            a, b = 1, 1
            tmp = []
            for x in range(stop):
                if x >= start:
                    tmp.append(a)
                a, b = b, a + b
            return tmp

    def __getattr__(self, attr):
        # 如果不存在属性的情况下才会进到当前方法
        # 可以根据需求返回属性的值
        if attr == "flag":
            return True

    def __str__(self):
        return "a: %s,b: %s" % (self.__a, self.__b)

    __repr__ = __str__


# 适用REST实现动态生成url路径，无论怎么变化url地址参数
class Chain(object):

    def __init__(self, path=''):
        self._path = path

    # 实例本身也可以进行调用,使用Callable判断对象是否是可以调用的
    def __call__(self, name="name", age="0"):
        print('My name is %s.' % name, 'My age is %s.' % age, sep="\n")

    def __getattr__(self, path):
        if path == 'user':
            return lambda x: Chain('%s/%s' % (self._path, x))
        return Chain('%s/%s' % (self._path, path))

    def normal_method2(self):
        return self._path

    @staticmethod
    def normal_method():
        print("just normal")

    def __str__(self):
        return self._path

    __repr__ = __str__


if __name__ == "__main__":
    # # 测试定制方法
    # f = Fib()
    # try:
    #     for x in f:
    #         print(f)
    # except StopIteration:
    #     pass
    # print(f.flag)
    # print(f)
    # print(f[5])
    # print(f[4:6])
    # 每个参数是独立的
    c = Chain()
    c1 = c.status.user("bai").timeline.list
    c("Bai", "18")
    Chain.normal_method()
    print(type(c1))
    print(c, c1, sep="\n")
    print(callable(c))
