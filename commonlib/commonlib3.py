#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2019/6/17 9:46
# @Author  : Baijb

"""
    Base64是一种用64个字符来表示任意二进制数据的方法（eg ['A', 'B', 'C', ... 'a', 'b', 'c', ... '0', '1', ... '+', '/']）
    用记事本打开exe、jpg、pdf这些文件时，我们都会看到一大堆乱码，因为二进制文件包含很多无法显示和打印的字符，
    所以，如果要让记事本这样的文本处理软件能处理二进制数据，就需要一个二进制到字符串的转换方法。Base64是一种最常见的二进制编码方法
    将二进制信息按每3个字节一组进行划分（凑不齐3个字节的默认使用\x00字节进行填充，再在编码的末尾加上1个或2个=号，表示补了多少字节），
    url safe的Base64:将url中需转义的+和/替换成-和_
    由于=字符也可能出现在Base64编码中，但=用在URL、Cookie里面会造成歧义，所以，很多Base64编码后会把=去掉

    解码：因为Base64是用4个字符（1个字符表示6位二进制）来表示3个byte字节（1个字节8位）的所以，经过编码后的字符串一定是4的倍数
"""
import base64

o_str = '想要转的字'
b_trans = base64.b64encode(o_str.encode("UTF-8"))
print(b_trans)
print("目标字符:%s 转为二进制:%s base64编码后：%s, " % (o_str, o_str.encode("UTF-8"), b_trans,))
s_trans = base64.b64decode(b_trans)
print("源数据使用base64编码后(二进制)：%s 按字符编码还原：%s " % (s_trans, s_trans.decode("UTF-8")))
b_url_save = base64.urlsafe_b64encode(b'i\xb7\x1d\xfb\xef\xff')
print("使用url_save编码: %s " % b_url_save)
s_url_save = base64.urlsafe_b64decode(b_url_save)
print("使用url_save解码: %s " % s_url_save)

"""
    去除== 后的编码的解析（思路）：
        因为至少要4个字符才能对应上源二进制中的3个字节，所以用base64编译后的内容个数一定是4的倍数
        int函数是向下提取整数
        ljust函数用于往字符串的右边增加填充符号
"""


def safe_base64_decode(s):
    if len(s) % 4 != 0:
        l = (int(len(s) / 4) + 1) * 4
        s = s.ljust(l, b'=')
    bb = base64.b64decode(s)
    return bb
