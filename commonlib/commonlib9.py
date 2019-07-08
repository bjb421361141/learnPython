#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2019/6/22 11:12
# @Author  : Baijb

"""
    xml文件生成和解析：
        DOM解析：
            DOM会把整个XML读入内存，解析为树，因此占用内存大，解析慢，优点是可以任意遍历树的节点。
        SAX是流模式解析：
            边读边解析，占用内存小，解析快，缺点是我们需要自己处理事件。
            ** start_element，end_element和char_data
"""

import time
import uuid
import hmac
import hashlib
import urllib
from urllib import request
from base64 import b64encode
from xml.parsers.expat import ParserCreate


class DefualtSaxHandler(object):
    def start_element(self, name, attrs):
        print('sax:start_elment: %s,attrs: %s' % (name, str(attrs)))
        # name表示节点名称，attrs表示节点属性（字典）

    def end_element(self, name):
        print('sax:end_element: %s' % name)

    def char_data(self, text):
        print('sax:char_data: %s' % text)
        # text表示节点数据


def parseXml(xml_str):
    print(xml_str)
    return {
        'city': '?',
        'forecast': [
            {
                'date': '2017-11-17',
                'high': 43,
                'low': 26
            },
            {
                'date': '2017-11-18',
                'high': 41,
                'low': 20
            },
            {
                'date': '2017-11-19',
                'high': 43,
                'low': 19
            }
        ]
    }


"""
    拼接请求路径
"""
url = 'https://weather-ydn-yql.media.yahoo.com/forecastrss'
method = 'GET'
app_id = 'weather'
consumer_key = 'dj0yJmk9MXduWWJydlFpYTB0JmQ9WVdrOVdEUlRkbTg1TXpRbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTUx'
consumer_secret = 'aa55019aa12c3d6200113be46fd148c2bab1bae5'
concat = '&'
query = {'location': 'xiamen,Fujian,CN', 'format': 'xml'}
oauth = {
    'oauth_consumer_key': consumer_key,
    'oauth_nonce': uuid.uuid4().hex,
    'oauth_signature_method': 'HMAC-SHA1',
    'oauth_timestamp': str(int(time.time())),
    'oauth_version': '1.0'
}
merged_params = query.copy()
merged_params.update(oauth)
sorted_params = [k + '=' + urllib.parse.quote(merged_params[k], safe='') for k in sorted(merged_params.keys())]
signature_base_str = method + concat + urllib.parse.quote(url, safe='') + concat + urllib.parse.quote(concat.join(sorted_params),
                                                                                          safe='')
"""
Generate signature
Python2 和 Python3转化的问题？ 认证失败
secret_dist
"""
composite_key = urllib.parse.quote(consumer_secret, safe='') + concat
secret_dist = hmac.new(composite_key.encode(), signature_base_str.encode(), digestmod=hashlib.sha1).digest()
oauth_signature = b64encode(secret_dist)

"""
Prepare Authorization header
oauth_signature:
    base64 加密：consumer_secret，查询参数和权限认证信息的 sha1加密后的字符串
    oauth = {
    'oauth_consumer_key': consumer_key,
    'oauth_nonce': uuid.uuid4().hex,
    'oauth_signature_method': 'HMAC-SHA1',
    'oauth_timestamp': str(int(time.time())),
    'oauth_version': '1.0'
    }
"""
oauth['oauth_signature'] = oauth_signature
auth_header = 'OAuth ' + ', '.join(['{}="{}"'.format(k, v) for k, v in oauth.items()])

"""
Send request
"""
url = url + '?' + urllib.parse.urlencode(query)
req = urllib.request.Request(url)
req.add_header('Authorization', auth_header)
req.add_header('X-Yahoo-App-Id', app_id)
response = urllib.request.urlopen(req).read()
print(response)

# 测试:
# URL = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20%3D%202151330&format=xml'
#
# with request.urlopen(URL, timeout=4) as f:
#     data = f.read()
#
# result = parseXml(data.decode('utf-8'))
# assert result['city'] == 'Beijing'

# xml = '''<?xml version="1.0"?>
#     <ol id="ol_1">
#         <li id="il_1">
#             <a href="/python">Python</a>
#         </li>
#         <li id="il_2">
#             <a href="/ruby">Ruby</a>
#         </li>
#     </ol>
# '''

xml = '''<?xml version="1.0"?><ol id="ol_1">s<li id="il_1"><a href="/python">Python</a></li><li id="il_2"><a href="/ruby">Ruby</a></li></ol>'''

if __name__ == "__main__":
    # 处理器实例
    handler = DefualtSaxHandler()
    # 解析器实例
    parser = ParserCreate()

    parser.StartElementHandler = handler.start_element
    parser.EndElementHandler = handler.end_element
    parser.CharacterDataHandler = handler.char_data
    # 开始解析XML
    parser.Parse(xml)
