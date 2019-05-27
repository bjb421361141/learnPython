"""
    List 和 Tuple
        list是一个可变的有序表
        Tuple是一个不可变的有序表   ps:存储对象引用时，对象的内容是可变的
    dict 和 set
        dict 使用键-值（key-value）存储的结构，类似于java中的map
        set 是无序和无重复元素的集合
"""

my_list = [1, 1.4, "中", True]
# list 对象的操作
# 增加
print(my_list)
my_list.append("newAppend")
my_list.insert(len(my_list), "第" + str(len(my_list)) + "个")
my_list.extend(("new List",))  # 增加一组数据
print(my_list)

# 修改
my_list[0] = 3
slice_list = my_list[0:2]
print(my_list)
# 删除
my_list.remove(3)  # 不存在会报错 如果list中存在布尔类型时，删除应该注意特殊值类似 1，""
my_list.pop()  # 可以对对应索引下的数据进行导出
print(my_list)

my_tuple = tuple(my_list)
print(my_list.index(True), type(my_list), type(my_tuple))
print(1.4 in my_list)

# Tuple 除了无法操作修改数据 其他都和List一样

# dict 数据字典操作
d = {'Michael': 95, 'Bob': 75, 'Tracy': 85}
print(d)
# 新增 和修改
d['Bob'] = 88
# 删除操作
d.pop("Bob")
print(d.popitem())
print(d)

# set 操作
a = [1, 2, 8, 5]
b = {1, 2, 3}
c = set()  # 空集合
a = set(a)
# 新增
a.add(6)
# 删除
a.remove(1)
a.discard(3)
print(type(a), type(b))
print("a 和 b 的交集:", a & b)
print("a 和 b 的合集:", a | b)


# 切片的操作
"""
 t = [1,2,3,4]
 t[0:3] # 默认步长为1
 t[0:6:2] # 输出序号0 - 6的数据步长为2  [1,3]
"""

s = "helloWorld"
print(s[2:])
print(s[2:6])
print(s[2:6:2])
print(s[::-1])
