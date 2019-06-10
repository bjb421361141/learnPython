"""
  IO在计算机中指Input/Output，也就是输入和输出。由于程序和运行时数据是在内存中驻留，由CPU这个超快的计算核心来执行，
  涉及到数据交换的地方，通常是磁盘、网络等，就需要IO接口。
    同步：程序暂停执行后续代码，等100M的数据在10秒后写入磁盘，再接着往下执行，这种模式称为同步IO
    异步：CPU不等待，只是告诉磁盘，“您老慢慢写，不着急，我接着干别的事去了”，于是，后续代码可以立刻接着执行，这种模式称为异步IO
        异步中涉及到通知的问题：
        1、回调处理（线程回调处理）
        2、轮询处理（调用者处理）
    file-like Object 概念：
        file-like Object不要求从特定类继承，只要写个read()方法就行
        像open()函数返回的这种有个read()方法的对象，在Python中统称为file-like Object。除了file外，还可以是内存的字节流，网络流，自定义流等等。

    StringIO和BytesIO：内存中的读取和写入

"""
from io import StringIO
from io import BytesIO

if __name__ == "__main__":
    """
        读取文件
    """
    try:
        # 遇到有些编码不规范的文件，你可能会遇到UnicodeDecodeError，因为在文本文件中可能夹杂了一些非法编码的字符。遇到这种情况，open()
        # 函数还接收一个errors参数，表示如果遇到编码错误后如何处理。最简单的方式是直接忽略：
        f1 = open('C:\\Users\\Baijb\\Desktop\\账户信息.txt', 'r', encoding='gbk', errors='ignore')
        print(type(f1))  # TextIOWrapper
    finally:
        if f1:
            f1.close()

    with open('C:\\Users\\Baijb\\Desktop\\账户信息.txt', 'r') as f2:
        # print(f2.read())  # 一次性读取所有的内容 适用小文件.可以使用带参数的方法定量读取
        # print(f2.readlines())  # 获取每行的数据并封装成list进行返回
        flag = True
        while flag:
            r = f2.readline()
            if r is not None and '' != r:
                print("指针位于 %s" % f2.tell())
                print(r.strip())
            else:
                flag = False
        """
            offset -- 开始的偏移量，也就是代表需要移动偏移的字节数
            whence：可选，默认值为 0。给offset参数一个定义，表示要从哪个位置开始偏移；0代表从文件开头开始算起，1代表从当前位置开始算起，2代表从文件末尾算起。
            *** 没有使用b模式选项打开的文件，只允许从文件头(whence = 0)开始计算相对位置
        """
        f2.seek(0, 0)  # 重新设置指针指向开头
        l = f2.readlines()
        print(l)

    """
        写文件：
            使用with open(XXX) as c: 来自动调用close函数避免信息未从内存写入磁盘
    """
    with open('C:\\Users\\Baijb\\Desktop\\账户信息.txt', 'a') as f3:  # wb 以二进制的方式进行写入 a 从文件末尾中加
        f3.write('Hello, world!')

    f = StringIO()
    f.write("test write")
    f.readline()
    print(f.getvalue())

    fb = BytesIO(b'\xe4\xb8\xad\xe6\x96\x87')
    list2 = fb.readlines()
    print(fb.getvalue())  # getvalue方法不受指针的影响

