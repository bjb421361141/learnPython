#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2019/7/3 14:27
# @Author  : Baijb

# 替换翻译的地址 https://translate.google.cn/
from googletrans import Translator

translator = Translator(service_urls=['translate.google.cn'])
# translateContent = translator.translate("おはようございます", dest="zh-CN")
# print(translateContent)
print(translator.translate("第三方", dest="en"))
