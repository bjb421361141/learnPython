"""
   函数名是指向函数的变量
   既然变量可以指向函数，函数的参数能接收变量，那么一个函数就可以接收另一个函数作为参数，这种函数就称之为高阶函数。
"""

# 由于abs函数实际上是定义在import builtins模块中的，所以要让修改abs变量的指向在其它模块也生效，要用import builtins; builtins.abs = 10。
# abs = 10 # 将替换原有的函数
from collections import Iterator
from functools import reduce

abs(-10)


def add(x, y, f):
    return f(x) + f(y)


print(add(-1, 2, abs))


# map() 用于循环数据列表，调用方法
# reduce() 用于递进调用方法（ps 方法包含两个参数） ，上一次函数的结果作为下一个函数调用的第一个参数
def f(x):
    return x * x


# 数据只允许被读取一次
r = map(f, [1, 2, 3, 4])
print(type(r), r, isinstance(r, Iterator))
t = list(r)
print(list(r), t)

# r_list = list((t for t in iter(r)))
# print(r_list)
for x in r:
    print(x)
for x in t:
    print(x)
string_list = list(map(str, [1, 2, 3, 4, 5, 6, 7, 8, 9]))
print(string_list)


def add(x, y):
    return x + y


reduce(add, [1, 3, 5, 7, 9])


# 规范字符串，首字母大写其余小写
def normalize(name):
    result = ""
    for ind, x in enumerate(name):
        if ind == 0:
            result += x.upper()
        else:
            result += x.lower()
    return result


L1 = ['adam', 'LISA', 'barT']
L2 = list(map(normalize, L1))
print(L2)

DIGITS = {'0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9}


# 字符串转为float类型
# '123.456'
# lambda 为匿名函数
def str2float(s):
    def fn1(x, y):
        return x * 10 + y

    def fn2(x, y):
        return x / 10 + y

    def char2num(s):
        return DIGITS[s]

    float_list = s.split(".")
    if len(float_list) > 2:
        raise BaseException
    else:
        a = reduce(fn1, map(char2num, float_list[0]))
        b = 0
        if len(float_list[1]) > 0:
            r = reduce(lambda x, y: y + x, float_list[1])
            b = reduce(fn2, map(char2num, r)) / 10
        return a + b


print('str2float(\'0.123\') =', str2float('0.123'))
if abs(str2float('0.123') - 0.123) < 0.00001:
    print('测试成功!')
else:
    print('测试失败!')

# 字符串的反向输出
# 切片的实现
s = 'abcdefg'
print(s[::-1])

# 使用reduce函数
print(reduce(lambda x, y: y + x, s))


# 使用递归
def rev(_s):
    if len(_s) <= 1:
        return _s
    else:
        return rev(_s[1:]) + _s[0]


print(rev(s))


# 使用栈
def func(_s):
    l = list(_s)  # 模拟全部入栈
    result = ""
    while len(l) > 0:
        result += l.pop()  # 模拟出栈,pop() 函数用于移除列表中的一个元素（默认最后一个元素），并且返回该元素的值。
    return result


r = func(s)
print(r)

# 使用list中的reverse
l = list(s)
l.reverse()
print("".join(l))  # 把列表里的值拼接成一个字符串


# filter 函数用于对数据的过滤
def filter_fn(x):
    if x != 'a':
        return True


print(list(filter(filter_fn, s)))
