"""
   python 中的内置函数
   函数声明
"""

# 查看函数声明
print(help(isinstance))

a = (-1, 2, 3)
print(abs(a[0]), max(a))


# 函数声明

def my_abs(x):
    if not isinstance(x, (int, float)):
        raise TypeError('bad operand type')
    if x >= 0:
        return x
    else:
        return -x


print(my_abs(4))


# 参数定义
# 位置参数
def power(x, n):
    s = 1
    while n > 0:
        n = n - 1
        s = s * x
    return s


# 默认参数 :默认参数必须指向不变对象！
def power2(x, n=2):
    s = 1
    while n > 0:
        n = n - 1
        s = s * x
    return s


# 可变长参数
#  List、 Tuple 参数
def calc(*numbers):
    sum1 = 0
    for n in numbers:
        sum1 = sum1 + n * n
    return sum1


print(calc(1, 2, 3, 4))


# 关键字（dict）参数
def person(name, age, **kw):
    print('name:', name, 'age:', age, 'other:', kw)


# 命名关键字 参数
# 只接收city和job作为关键字参数
def person2(name, age, *, city, job):
    print('name:', name, 'age:', age, 'other:', city, job)


def person3(name, age, *args, city, job):
    print('name:', name, 'age:', age, 'other:', args)


person('Bob', 35, city='Beijing')
person2('Jack', 24, city='Beijing', job='Engineer')
d = {'city_': 'Beijing', 'job_': 'Engineer'}
person3('Jack', 24, d, city='Beijing', job='Engineer')

print(d)
