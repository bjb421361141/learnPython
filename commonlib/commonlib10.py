#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2019/7/5 14:03
# @Author  : Baijb

from html.parser import HTMLParser

"""
    BeautifulSoap：整个Html文件读取解析
    HTMLParser:(相当于SAX读取数据)
        feed()可支持分段进行html文件的解析
        parser 会以 <*> 为边界分解相应的数组根据相应类型调用不同的方法
"""


class MyHTMLParser(HTMLParser):

    def __init__(self):
        super(MyHTMLParser, self).__init__()
        self.__parsedata = ''  # 设置一个空的标志位

    """
        处理 这种类型的<input/>元素
    """

    def handle_startendtag(self, tag, attrs):
        print("======handle_startendtag======")

    """
        开始标签
    """

    def handle_starttag(self, tag, attrs):
        print("======handle_starttag======")

    def handle_endtag(self, tag):
        print("======handle_endtag======")

    def handle_data(self, data):
        print("======handle_data======")

    def handle_comment(self, data):
        print("======handle_comment======")

    """
        特殊字符的处理&nbsp;
    """

    def handle_entityref(self, name):
        print("======handle_entityref:&%s======" % name)

    """
        特殊字符的处理 &#1234
    """

    def handle_charref(self, name):
        print("======handle_charref:&#%s;======" % name)


# parser = MyHTMLParser()
# URL = 'https://www.python.org/events/python-events/'
# with request.urlopen(URL, timeout=15) as f:  # 打开网页并取到数据
#     data = f.read()
# parser.feed(data.decode('utf-8'))


parser = MyHTMLParser()
parser.feed(
    '''<time datetime="2017-06-09T00:00:00+00:00">09 June &ndash; 12 June <span class="say-no-more"> 2017</span></time>''')
# for x in parser.events:
#     print(x)
# parser.feed("<div>div内容</div><input/>&nbsp;</br>")
# parser.feed('''<html><head></head>s3</p><body><!-- test html parser --><p>Some <a href=\"#\">html</a> HTML&nbsp;tutorial...<br>END</p></body></html>''')
