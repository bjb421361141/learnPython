"""
数据类型：
    整数（int）
    浮点(float)
    字符串（str）
    布尔值（bool ：True，False）
    空值（None）
变量：
    变量命名规则:变量名必须是大小写英文、数字和_的组合，且不能用数字开头
"""
n_1 = 1
n_2 = 1.4
n_3 = "1.5"
n_4 = True
n_5 = None
print(type(n_1), type(n_2), type(n_3), type(n_4), type(n_5))
# 强制类型转换 bool类型的强转如果参数不含内容返回False 否则返回True
print(int(n_2), float(n_1), str(n_1), bool(""), sep="   ")
# 长度计算，对字符串，元组，列表,set ,字典等
dictory = {"city": "xiamen", "job": "IT"}
print(len(n_3), len(dictory), sep="   ")

"""
字符串的赋值是值得引用不是对象的引用
"""
a = 'ABC'
b = a
a = 'XYZ'
print(b)

"""
常量
所谓常量就是不能变的变量，比如常用的数学常数π就是一个常量。在Python中，通常用全部大写的变量名表示常量：
"""
PI = 3.14159265359
print(PI)
PI = PI+1
print(PI)

# 输出所有的关键字
print(help("keywords"))
