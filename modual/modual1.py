#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
第1行注释可以让这个hello.py文件直接在Unix/Linux/Mac上运行，
第2行注释表示.py文件本身使用标准UTF-8编码；
private函数和变量：名称前带有两个下滑线，它们“不应该”被直接引用，不是“不能”被直接引用

安装第三方模块：使用pip或使用Anaconda来进行包管理
"""
# 两个下滑线的变量或函数为特殊的变量或函数，可以直接被引用
__author__ = 'Bai jb'

import sys


def test():
    args = sys.argv
    if len(args) == 1:
        print('Hello, world!')
    elif len(args) == 2:
        print('Hello, %s!' % args[1])
    else:
        print('Too many arguments!')


# 当我们在命令行运行hello模块文件时，Python解释器把一个特殊变量__name__置为__main__，而如果在其他地方导入该hello模块时，if判断将失败，
# 因此，这种if测试可以让一个模块通过命令行运行时执行一些额外的代码，最常见的就是运行测试。
if __name__ == '__main__':
    test()
