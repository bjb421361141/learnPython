# coding: utf-8
import threading
import time

"""
    实现线程的暂停，继续和停止功能
        思路使用两个Event对象
    
    ***threading中的Event类：
        Events 管理一个可以通过set()方法和clear()方法设置的标志。Events中的wait()方法会在标志为true的时候停止。
        Events 初始化的值为false
    
    ***当存在多个活跃线程的时候threading获取的current_Thread 为第一个线程
    ***PyCharm中 使用调试模式时会多出3个pydevd的线程 
        
    测试用例：
        需要两个线程，主线程停止后不影响A线程，A暂停后不影响主线程的执行 
    
    应用场景:可控的定时执行任务
"""


def do_thread_job(args):
    print("测试线程设置的方法会不会被调用,参数:%s" % args)


class MyThread(threading.Thread):
    def __init__(self, *args, **kwargs):
        super(MyThread, self).__init__(*args, **kwargs)
        self.__flag = threading.Event()  # 用于暂停线程的标识
        self.__flag.set()  # 设置为True
        # 是否可以使用 bool类型进行控制？
        self.__running = threading.Event()  # 用于停止线程的标识
        self.__running.set()  # 将running设置为True

    # 线程操作每隔1秒打印一次时间
    def run(self):
        print("%s 线程正在运行.." % threading.current_thread().name)
        while self.__running.isSet():
            self.__flag.wait()  # 为True时立即返回, 为False时阻塞直到内部的标识位为True后返回
            # TODO 这边后续应替换成thread 中的设置的方法,或者在子类中重写方法调用
            print("%s 线程打印时间：%s" % (threading.current_thread().name, time.time()))
            time.sleep(1)
        try:
            if self._target:
                self._target(*self._args, **self._kwargs)
        finally:
            # 清除属性信息
            del self._target, self._args, self._kwargs

    def pause(self):
        threading.active_count()
        threading.enumerate()
        print("=====================当前线程信息===============")
        print("存活的线程数 %s" % threading.active_count())
        for x in threading.enumerate():
            print("线程：%s" % x.name)
        self.__flag.clear()  # 设置为False, 让线程阻塞

    def resume(self):
        self.__flag.set()  # 设置为True, 让线程停止阻塞

    def stop(self):
        self.__flag.set()  # 将线程从暂停状态恢复, 如何已经暂停的话
        self.__running.clear()  # 设置为False


if __name__ == "__main__":
    print("===================A线程创建并开启=====================")
    a = MyThread(target=do_thread_job, args=("do_thread_job",), name="A")
    a.start()  # start 方法会激活线程并调用run方法
    print("===================主线程休息3秒（此时a线程应该继续进行打印）===================")
    time.sleep(3)
    print("===================A线程调用暂停的方法（A线程停止打印）===================")
    a.pause()
    print("===================主线程休息5秒后重新调用A线程使其继续运行===================")
    time.sleep(5)
    a.resume()
    print("===================主线程休息3秒后终止A线程===================")
    time.sleep(3)
    a.stop()
    print("===================主线程这边继续进行操作（此时A线程不应再输出内容）===================")
    for x in range(5):
        print("%s 线程打印时间：%s" % (threading.current_thread().name, time.time()))
        time.sleep(1)
