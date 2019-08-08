#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2019/7/30 16:25
# @Author  : Baijb

from flask import Flask, render_template
from flask import request

"""
    Flask web框架
    使用装饰器对方法进行路径映射
    M 使用 dict类别作为参数传递
    V 默认使用 jinja2 作为页面模板（结合M中的值生成html页返回至前台,视图模板默认放置于当前目录下的templates目录下）
    C 使用@app.route('/',methods=['GET']) 来进行方法
    
"""

app = Flask(__name__)  # __name__ 文件名


@app.route('/', methods=['GET', 'POST'])
def home():
    return render_template('home.html')


@app.route('/signin', methods=['GET'])
def signin_form():
    return render_template('signin.html')


@app.route('/signin', methods=['POST'])
def signin():
    # 需要从request对象读取表单内容：
    if request.form['username'] == 'admin' and request.form['password'] == 'password':
        return render_template('signin.html', username='admin', password='password', msg='Hello, admin!')
    return render_template('signin.html', username='admin', password='', msg='Bad username or password.')


if __name__ == '__main__':
    app.run()
