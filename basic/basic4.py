"""
   if判断和循环
"""
from collections import Iterable
from collections import Iterator

# if 判断
# age = int(input('年龄: '))
# if age >= 18:
#     print('adult')
# elif age >= 6:
#     print('teenager')
# else:
#     print('kid')

# 循环
names = ['Michael', 'Bob', 'Tracy']
dictionary = {"city": "xiamen", "job": "IT"}
for name in names:
    print(name)
for x in range(10):  # 输出0-9的数字
    print(x)
for i, x in enumerate({2, 3, 4, 5}):
    print("index:", i, "value:", x)
print("#############dict 下的所有键###################")
for key in dictionary:
    print(key)
print("#############dict 下的所有值###################")
for value in dictionary.values():
    print(value)
print("#############dict 下的所有键和值###################")
for x, y in dictionary.items():
    print(x, y)
# 参数和数据个数需要对应
for x, y in [(1, 1), (2, 4), (3, 9)]:
    print(x, y)

n = 1
while n <= 100:
    if n > 10:  # 当n = 11时，条件满足，执行break语句
        break  # break语句会结束当前循环
    print(n)
    n = n + 1
print('END')

# 列表生成器
tmp_list = [m + n for m in 'ABC' for n in 'XYZ']
print(tmp_list)

# 生成器
tmp_genertor = (m + n for m in 'ABC' for n in 'XYZ')
print(tmp_genertor)


# 生成器函数形式
def tmp_genertor(a_str, b_str):
    for a in a_str:
        for b in b_str:
            yield a + b


for n_str in tmp_genertor('ABC', 'XYZ'):
    print(n_str)


def triangles(floor):
    tmp = [1]
    for x in range(floor):
        yield tmp
        t = []
        for y in range(len(tmp) + 1):
            if y - 1 < 0:
                t.append(0 + tmp[y])
            elif y == len(tmp):
                t.append(tmp[y - 1] + 0)
            else:
                t.append(tmp[y - 1] + tmp[y])
        tmp = t


for x in triangles(10):
    print(x)

n, a, b = 0, 1, 1
# a, b = (b, a + b)
t = (b, a + b)  # t是一个tuple
a = t[0]
b = t[1]
print(a, b, sep="   ")

"""
 Python的Iterator对象表示的是一个数据流，Iterator对象可以被next()函数调用并不断返回下一个数据，直到没有数据时抛出StopIteration错误。可以把这个数据流看做是一个有序序列，
 但我们却不能提前知道序列的长度，只能不断通过next()函数实现按需计算下一个数据，所以Iterator的计算是惰性的，只有在需要返回下一个数据时它才会计算。
"""

# 列表 set 字符串，列表生成器，数字都是可以迭代的对象
isinstance([], Iterable)  # true
isinstance({}, Iterable)  # true
isinstance('abc', Iterable)  # true
isinstance((x for x in range(10)), Iterable)  # true
isinstance(100, Iterable)  # true

# 列表生成器是一个 Iterator 对象，可以直接使用next() 方法读取数据
# iterable对象可以通过iter()方法生成Iterator 对象
isinstance((x for x in range(10)), Iterator)  # True
isinstance([], Iterator)  # False
isinstance({}, Iterator)  # False
isinstance('abc', Iterator)  # False


