"""
    使用os包进行进程操作
        Unix/Linux操作系统提供了一个fork()系统调用，它非常特殊。
        普通的函数调用，调用一次，返回一次，但是fork()调用一次，返回两次(一次是子进程的返回，一次是父进程的返回)，
        因为操作系统自动把当前进程（称为父进程）复制了一份（称为子进程），然后，分别在父进程和子进程内返回。
        ***常见的Apache服务器就是由父进程监听端口，每当有新的http请求时，就fork出子进程来处理新的http请求

    multiprocessing 模块 多进程操作
"""
import random
import time
from multiprocessing import Process
import os
import subprocess


# print('Process (%s) start...' % os.getpid())
# # Only works on Unix/Linux/Mac:
# pid = os.fork()  # fork 方法将复制一个一样的进程。父进程返回子进程id，子进程永远返回0
# if pid == 0:
#     print('I am child process (%s) and my parent is %s.' % (os.getpid(), os.getppid()))
# else:
#     print('I (%s) just created a child process (%s).' % (os.getpid(), pid))


# 子进程要执行的代码
from multiprocessing.pool import Pool
from multiprocessing import Queue


def run_proc(name):
    print('Run child process %s (%s)...' % (name, os.getpid()))


def long_time_task(name):
    print('Run task %s (%s)...' % (name, os.getpid()))
    start = time.time()
    time.sleep(random.random() * 3)
    end = time.time()
    print('Task %s runs %0.2f seconds.' % (name, (end - start)))


# 写数据进程执行的代码:
def write(q):
    print('Process to write: %s' % os.getpid())
    for value in ['A', 'B', 'C']:
        print('Put %s to queue...' % value)
        q.put(value)
        time.sleep(random.random())


# 读数据进程执行的代码:
def read(q):
    print('Process to read: %s' % os.getpid())
    while True:
        value = q.get(True)
        print('Get %s from queue.' % value)


if __name__ == '__main__':
    """
        创建子进程
    """
    # print('Parent process %s.' % os.getpid())
    # p = Process(target=run_proc, args=('test',))
    # print('Child process will start.')
    # p.start()
    # p.join()
    # print('Child process end.')

    """
        使用进程池进行线程的创建
    """
    # print('Parent process %s.' % os.getpid())
    # p = Pool(4)
    # for i in range(5):
    #     p.apply_async(long_time_task, args=(i,))
    #     print('#######创建一个进程#######')
    #
    # for x in range(5, 7):
    #     p.apply_async(long_time_task, args=(x,))
    #     print('#######创建一个进程#######')
    #
    # print('Waiting for all subprocesses done...')
    # # join()方法会等待所有子进程执行完毕，调用join()之前必须先调用close()，调用close()之后就不能继续添加新的Process
    # p.close()
    # p.join()
    # print('All subprocesses done.')

    """
        直接调用其他进程，list中的第一个为可以在PATH下查找到的程序，之后的为入参
    """
    # print('$ nslookup www.python.org')
    # # r = subprocess.call(['nslookup', 'www.python.org'])
    # r = subprocess.call(['ipconfig'])
    # print('Exit code:', r)

    """
        进程间的通信
    """
    # 父进程创建Queue，并传给各个子进程：
    q = Queue()
    pw = Process(target=write, args=(q,))
    pr = Process(target=read, args=(q,))
    # 启动子进程pw，写入:
    pw.start()
    # 启动子进程pr，读取:
    pr.start()
    # 等待pw结束:
    pw.join()
    # pr进程里是死循环，无法等待其结束，只能强行终止:
    pr.terminate()

