#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2019/6/18 11:05
# @Author  : Baijb

"""
    概念： 8bit = 1byte 字节流中的每个字节（8位） 的显示方式是使用ASCII中的显示
          0x开头的 16进制表示的数字

          ASCII可显示字符

struct包用于处理字节的数据类型
    str类型转为字节处理可以使用encode进行编译生成byte类型的数据
    int类型转为字节类型的处理可以使用struct的pack来进行处理

    bytes 函数：将数据转成新的byte对象


    拓展延伸：大端（big-endian）小端（little-endian） https://blog.csdn.net/jason_cuijiahui/article/details/79010257
        大小端是数据在内存中存储的不同方式：
            大端模式是指数据的低位保存在内存的高地址中，而数据的高位保存在内存的低地址中(从头读到尾，每次一个字节（8bit）)
            小端模式是指数据的低位保存在内存的低地址中，而数据的高位保存在内存的高地址中（从尾读到头，每次一个字节（8bit））

        一个16bit的short型x，在内存中的地址为0x0010，x的值为0x1122。那么0x11为数据高字节，0x22为数据低字节。
            大端模式，
                0x0010   0x11
                0x0011   0x22
            小端模式，就将0x11放在内存高地址中，即0x0011中；0x22放在内存低地址中，即0x0010中。（）
                0x0010   0x22
                0x0011   0x11
"""

# 通过位运算来进行int类型转成byte
# -*- coding: utf-8 -*-
import base64, struct

# 二进制 1001 1100 0100 0000 0110 0011
n = 10240099
b1 = (n & 0xff000000) >> 24
b2 = (n & 0xff0000) >> 16
b3 = (n & 0xff00) >> 8
b4 = (n & 0xff) >> 8
bs = bytes([b1, b2, b3, b4])
print(bs)  # b'\x00 \x9c@ \x00'

# 使用struct 转换
# 第一个参数中的参数含义： >(大端) <（小端） 常用 I 无符号整数 H 无符号的短整形
# 第二个参数中为字节流，第一个参数中的I、H对应字节的总和要和字节流的长度一样

pack_int = struct.pack('>I', 8482)  # 采用大端的方式来编辑字节流
pack_int_v = struct.pack('<I', 8482)  # 采用小端的方式来编辑字节流
unpack_int = struct.unpack('>I', pack_int)
print("转成byte字节（大端） %s " % pack_int, "转成byte字节(小端) %s " % pack_int_v, "byte字节转字符串 % s" % unpack_int, sep="\n")

# 网络中的文件可以使用base64进行转码，将字节流转成字符串流再进行传送
# 反向生成时需要具体的解码方式（即知道文件的类型）
bmp_data = base64.b64decode(
    'Qk1oAgAAAAAAADYAAAAoAAAAHAAAAAoAAAABABAAAAAAADICAAASCwAAEgsAAAAAAAAAAAAA/3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9/AHwAfAB8AHwAfAB8AHwAfP9//3//fwB8AHwAfAB8/3//f/9/AHwAfAB8AHz/f/9//3//f/9//38AfAB8AHwAfAB8AHwAfAB8AHz/f/9//38AfAB8/3//f/9//3//fwB8AHz/f/9//3//f/9//3//f/9/AHwAfP9//3//f/9/AHwAfP9//3//fwB8AHz/f/9//3//f/9/AHwAfP9//3//f/9//3//f/9//38AfAB8AHwAfAB8AHwAfP9//3//f/9/AHwAfP9//3//f/9//38AfAB8/3//f/9//3//f/9//3//fwB8AHwAfAB8AHwAfAB8/3//f/9//38AfAB8/3//f/9//3//fwB8AHz/f/9//3//f/9//3//f/9/AHwAfP9//3//f/9/AHwAfP9//3//fwB8AHz/f/9/AHz/f/9/AHwAfP9//38AfP9//3//f/9/AHwAfAB8AHwAfAB8AHwAfAB8/3//f/9/AHwAfP9//38AfAB8AHwAfAB8AHwAfAB8/3//f/9//38AfAB8AHwAfAB8AHwAfAB8/3//f/9/AHwAfAB8AHz/fwB8AHwAfAB8AHwAfAB8AHz/f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//3//f/9//38AAA==')
print(bmp_data, len(bmp_data))


def bmp_info(data):
    # 采用 小端进行读取字节流
    len(data)
    bmp_info_ = struct.unpack('<ccIIIIIIHH', data[:30])
    print(bmp_info_)
    return {
        'width': bmp_info_[-4],
        'height': bmp_info_[-3],
        'color': bmp_info_[-1]
    }


if __name__ == "__main__":
    print(bmp_info(bmp_data))
