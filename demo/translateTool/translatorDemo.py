#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2019/7/3 14:27
# @Author  : Baijb

# 替换翻译的地址 https://translate.google.cn/
from googletrans import Translator

translator = Translator(service_urls=['translate.google.cn'])
# translateContent = translator.translate("おはようございます", dest="zh-CN")
# print(translateContent)
print(translator.translate("""
Return the string obtained by replacing the leftmost
    non-overlapping occurrences of the pattern in string by the
    replacement repl.  repl can be either a string or a callable;
    if a string, backslash escapes in it are processed.  If it is
    a callable, it's passed the Match object and must return
    a replacement string to be used.
""", dest="zh-CN"))
