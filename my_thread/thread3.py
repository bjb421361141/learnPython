# -*- coding: utf-8 -*-
"""
    全局变量: 所有线程都可访问，都可进行修改
    局部变量: 只有当前线程，且作用域范围内才有效
    ThreadLocal变量:只限当前线程可用
"""
import threading

# 创建全局threadLocal对象:
import time

local_school = threading.local()


def process_student():
    # 判断执行的线程如果是A线程则进行休息等待B3秒后再执行
    if "A" in threading.current_thread().name:
        print("当前线程是%s,休息3秒。" % threading.current_thread().name)
        time.sleep(3)
    # 获取当前线程关联的student:
    std = local_school.student
    print('Hello, %s (in %s)' % (std, threading.current_thread().name))


def process_thread(name):
    # 绑定ThreadLocal的student:
    local_school.student = name
    process_student()


"""
    threadLocal对象不会因多线程的访问而改变，只保留当前线程的值
        相当于一个key为线程标识，value为变量值的dict全局变量  local_school = {"Thread-A"："Alice","Thread-B"："Bob"}
    ## ThreadLocal最常用的地方:
        为每个线程绑定一个数据库连接，HTTP请求，用户身份信息等，这样一个线程的所有调用到的处理函数都可以非常方便地访问这些资源。
"""
if __name__ == "__main__":
    t1 = threading.Thread(target=process_thread, args=('Alice',), name='Thread-A')
    t2 = threading.Thread(target=process_thread, args=('Bob',), name='Thread-B')
    t1.start()
    t2.start()
    t1.join()
    t2.join()
