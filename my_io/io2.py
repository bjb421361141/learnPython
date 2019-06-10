"""
    操作文件和目录
    序列化对象
"""
import os
import pickle
import shutil
import json

"""
    os 包操作
"""
# 输出系统的类别
# posix，说明系统是Linux、Unix或Mac OS X。nt，就是Windows系统
print(os.name)
print(os.environ.get("PATH"))  # 系统环境变量信息
# 用于路径的拼接（会根据系统选择分割符）
join_path = os.path.join('D:', 'testdir')
print(join_path)
os.chdir("D:\\python\\c\\")  # 切换到directory目录
# os.mkdir('D:\\python\\c')

os.path.isdir("D:\\python\\c\\dump.txt")
os.path.split("D:\\python\\c\\dump.txt")  # 返回一个集合包含路径和文件名

"""
    shutil包操作
"""
# 对包含read和write方法的对象进行拷贝操作
shutil.copyfileobj(open("D:\\python\\c\\dump.txt", 'rb'), open("D:\\python\\c\\dump1.txt", "wb"))
# 通过路径复制文件
shutil.copyfile("D:\\python\\c\\dump.txt", "D:\\python\\c\\dump2.txt")


# 递归删除文件
def delete_dir_force(path):
    # 判断path路径底下是否有文件，有文件查询出来递归删除
    if os.path.isdir(path) and len(os.listdir(path)) > 0:
        for x in os.listdir(path):
            tmp = os.path.join(path, x)
            # 如果文件过多会导致栈溢出 ？？
            delete_dir_force(tmp)
    # 删除本文件
    os.rmdir(path)


class Person(object):
    def __init__(self, name):
        self.name = name

    def say(self):
        print("my name is %s" % self.name)


if __name__ == "__main__":
    # delete_dir_force('D:\\python\\c')
    d = dict(name='Bob', age=20, score=88)
    """
        使用pickle进行对象的序列化，序列化后的对象只是内容一致而已
    """
    # with open("D:\\python\\c\\dump.txt", "wb") as f:
    #     pickle.dump(d, f)

    with open("D:\\python\\c\\dump.txt", "rb") as f2:
        k = pickle.load(f2)
        print(k)

    """
        使用json来保存对象信息,不带参数的方法只可以转换dict类对象，普通class对象需要先转成dict对象再进行序列化
        **对于函数无法进行还原
    """
    z = dict(name='Bob', age=20, score=88)
    z_str = json.dumps(z)
    z_obj = json.loads(z_str)
    print(z_str,z_obj)

    p = Person("Baijb")
    # 使用对象中的__dict__属性（json对象）
    d2 = json.dumps(p, default=lambda obj: obj.__dict__)
    print(d2)

    # with open("D:\\python\\c\\person.txt", "wb") as f:
    #     pickle.dump(p, f)

    with open("D:\\python\\c\\person.txt", "rb") as f2:
        z = pickle.load(f2)
        print(z)
        z.say()
