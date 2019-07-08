#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2019/7/5 14:56
# @Author  : Baijb

"""
    request用于处理http请求，优于python中的urllib
    可以处理多种请求类型：get() post() put() delete()
"""
from datetime import datetime
import re
from subprocess import PIPE

import chardet
import psutil
import requests

# cookies 信息
cks = {'token': '12345', 'status': 'working'}
# 请求头信息
hds = {'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit'}
r = requests.get('https://www.douban.com/search', params={'q': 'python', 'cat': '1001'}, headers=hds, cookies=cks,
                 timeout=2.5)
print("真实请求路径:%s" % r.url)
print("自动检测编码:%s" % r.encoding)
print("响应内容（bytes对象）：%s" % r.content)
# print(r.json())  # JSON数据

"""
    chardet 用于判断byte类型数据的编码格式和语言种类
"""
print("b'Hello, world!' 的编码信息检测：%s" % chardet.detect(b'Hello, world!'))
print("'离离原上草，一岁一枯荣'.encode('gbk') 的编码信息检测: %s" % chardet.detect('离离原上草，一岁一枯荣'.encode('gbk')))

"""
    psutil 用于获取操作系统信息
"""
print("CPU逻辑数量： %s" % psutil.cpu_count())
print("CPU物理核心： %s" % psutil.cpu_count(logical=False))
print("统计CPU的用户／系统／空闲时间： %s" % str(psutil.cpu_times()))

# CPU使用率
print("CPU使用率:(每个cpu的使用情况)")
for x in range(10):
    print(psutil.cpu_percent(interval=2, percpu=True))

# 内存磁盘信息
print("物理内存： %s" % str(psutil.virtual_memory()))
print("交换内存信息： %s" % str(psutil.swap_memory()))
print("磁盘分区信息： %s" % str(psutil.disk_partitions()))
print("磁盘使用情况： %s" % str(psutil.disk_usage('/')))
print("磁盘IO： %s" % str(psutil.disk_io_counters()))

# 网络信息
print("网络读写字节／包的个数： %s" % str(psutil.net_io_counters()))
print("获取网络接口信息： %s" % str(psutil.net_if_addrs()))
print("获取网络接口状态： %s" % str(psutil.net_if_stats()))
print("获取网络连接信息： %s" % str(psutil.net_connections()))

# 进程信息
print("所有进程的id： %s" % psutil.pids())
# 查找pycharm进程信息
pyCharmId = ""
for pid in psutil.pids():
    pidNm = psutil.Process(pid).name()
    if re.match(r'pycharm.*', pidNm):
        pyCharmId = pid
if pyCharmId != "":
    # Process 类提供了获取进程信息和操作进程信息的入口
    process = psutil.Process(pyCharmId)
    print("pycharm进程的名称： %s" % process.name())
    print("pycharm进程的执行路径： %s" % process.exe())
    print("pycharm进程的工作路径： %s" % process.cwd())
    print("pycharm进程的启动命令： %s" % process.cmdline())
    print("pycharm进程的父进程id： %s" % process.ppid())
    print("pycharm进程的父进程名称： %s" % process.parent().name())
    print("pycharm进程的子进程列表： %s" % process.children())
    print("pycharm进程的状态： %s" % process.status())
    print("pycharm进程的使用人： %s" % process.username())
    print("pycharm进程的创建时间： %s" % datetime.utcfromtimestamp(process.create_time()))
    print("pycharm进程的内存使用情况： %s" % str(process.memory_info()))
    print("pycharm进程的文件使用情况： %s" % str(process.open_files()))
    print("pycharm进程的网络连接使用情况： %s" % str(process.connections()))
    print("pycharm进程的线程情况： %s" % process.num_threads())
    print("pycharm进程的环境变量： %s" % process.environ())

# 使用Popen 进行进程的操作
p = psutil.Popen(["ipconfig"], stdout=PIPE)
# p = psutil.Popen([r"D:\ProgramData\Anaconda3\python", "-c", "print('hello')"], stdout=PIPE)
print(p.name())
print(p.username())
p.terminate() # 终止进程
