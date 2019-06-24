#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2019/6/22 9:26
# @Author  : Baijb

"""
   哈希函数：
    （1）原始密码经哈希函数计算后得到一个哈希值,任何内容经过哈希函数后长度都一样
    （2）改变原始密码，哈希函数计算出的哈希值也会相应改变
    （3） 同样的密码，哈希值也是相同的
    （4） 哈希函数是单向、不可逆的。也就是说从哈希值，你无法推算出原始的密码是多少
    由上面可以得出哈希函数的破解方式有两种：
       （1），字典法，暴力破解：猜密码
       （2）彩虹表，查表法：根据既有的密码表进行查找（前提是得到）

    缓解方法：经过算法算出（密码+salt）的值再进行hashcode的计算，这样即使拿到了密码和salt也很难根据上面两种方式进行密码的破解

"""

import hashlib
import hmac

md5 = hashlib.md5()
md5.update('how to use md5 in python hashlib?'.encode('utf-8'))
print(md5.hexdigest())

# 数据量大的情况可以分部进行编译
md5_ = hashlib.md5()
md5_.update('how to use md5 in '.encode('utf-8'))
md5_.update('python hashlib?'.encode('utf-8'))
print(md5_)

# 需要加密的内容
message = b'Hello, world!'
# 可以通过某个固定算法算出值（这个值必须是固定的）
key = b'secret'
h = hmac.new(key, message, digestmod='MD5')
h.hexdigest()
