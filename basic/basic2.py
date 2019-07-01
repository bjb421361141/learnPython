"""
字符串和字符编码
    8个比特（bit）作为一个字节（byte）
    一个字节（byte）能表示的最大的整数就是255，两个字节可以表示的最大整数是65535   (256 << 8) -1  ps:此操作为位数全部向左移动8位 再减1。 256 --> 100000000 <<
    计算机使用0和1来映射对应的字符
    ASCII：使用127个编码来进行字符的映射（1个字节）
    GB2312：中国制定的两个字节的编码来做字符映射
    不同国家都有自己的一套编码规则，所以导致乱码的出现（同一组01编码对应不同的映射字符），Unicode（2个字节）解决了该问题，操作系统一般都使用Unicode来进行数据的编码和识别
    因为再全英文的条件下Unicode 耗费的空间资源大于ASCII，所以出现了可变长的编码形式UTF-8
    通用的计算机编码格式：在计算机内存中，统一使用Unicode编码，当需要保存到硬盘或者需要传输的时候，就转换为UTF-8编码
    eg:一个以UTF-8编码保存的文件读取操作：
        1、将文件编码从UTF-8转化成Unicode编码,载入内存
        2、计算机将编码与对应字符进行映射，显示给用户（中间可能再进行编码？或直接使用Unicode 进行编辑？）
        3、保存操作时，计算机判断文件的编辑方式从Unicode转成相应的编码类别进行保存
        ps：数据传输的过程中也是一样，使用Unicode进行数据的传输，再通过相应的编码进行展示

    Python3中的字符串使用Unicode进行编辑和存储，所以支持多语言
        字符串中的encode方法可以将字符串转为相应的编码
    使用UTF-8保存文件的时候不能将BOM信息写入到文件

"""
a = 'A'
b = '中'
print(ord(a), ord(b))

# encode对字符串进行编码，转成byte类型
z = "中文"
print("‘中文’的GB2312表示", z.encode("GB2312"), sep="     ")
print("‘中文’的UTF-8表示", z.encode("UTF-8"), sep="     ")

# byte类型的字符串，每个字符只存在于一个字节
# 不同编码生成的byte数据需根据对应的编码进行解析，否则会报错或出现乱码
x = b'ABC'
y = b'\xe4\xb8\xad\xe6\x96\x87'
k = b'\xd6\xd0\xce\xc4'
print(x.decode("UTF-8"), y.decode("UTF-8"), sep="     ")
print(x.decode("GB2312"), k.decode("GB2312"), sep="     ")

# len方法，字符串算字数，byte类型算字节数
len_str = "中"
print(len(len_str))
print(len(len_str.encode("GB2312")))
print(len(len_str.encode("unicode_escape")))
print(len(len_str.encode("UTF-8")))


# 字符串格式化
a = 'Age: %s. Gender: %s' % (25, True)
b = "Age: {0}. Gender: {1}. this is not need string"
# format中的参数可以传list或者tuple的引用
print(a, b.strip("this is not need string").format(*[25, True]), sep="\n")

# unicode 转码，python中默认字符串都是使用unicode 进行编码的
'\u7528\u6237\u540d\u6216\u5bc6\u7801\u9519\u8bef'.encode("utf-8").decode("utf-8")

