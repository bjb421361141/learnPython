"""
    进程是由若干线程组成的，一个进程至少有一个线程,
    多进程中的变量是不共享的，多线程的变量是共享的

    多线程操作:
    多线程中包含两个包 _thread（不常用，不推荐） 和 threading（常用）
    Python3 通过两个标准库 _thread 和 threading 提供对线程的支持。
        _thread 提供了低级别的、原始的线程以及一个简单的锁，它相比于 threading 模块的功能还是比较有限的。
        threading 模块除了包含 _thread 模块中的所有方法外，还提供的其他方法：

        threading.currentThread(): 返回当前的线程变量。
        threading.enumerate(): 返回一个包含正在运行的线程的list。正在运行指线程启动后、结束前，不包括启动前和终止后的线程。
        threading.activeCount(): 返回正在运行的线程数量，与len(threading.enumerate())有相同的结果。
        除了使用方法外，线程模块同样提供了Thread类来处理线程，Thread类提供了以下方法:

        run(): 用以表示线程活动的方法。
        start():启动线程活动。
        join([time]): 等待至线程中止。这阻塞调用线程直至线程的join() 方法被调用中止-正常退出或者抛出未处理的异常-或者是可选的超时发生。
        isAlive(): 返回线程是否活动的。
        getName(): 返回线程名。
        setName(): 设置线程名。

    tip：
    如果有两个死循环线程，在多核CPU中，可以监控到会占用200%的CPU，也就是占用两个CPU核心。（针对于 C，C++,JAVA等编译型语言）
    相对于Python只会占用一个CPU核心（无论出现多少死循环线程）：
        因为Python的线程虽然是真正的线程，但解释器执行代码时，有一个GIL锁：Global Interpreter Lock，任何Python线程执行前，必须先获得GIL锁，
        然后，每执行100条字节码，解释器就自动释放GIL锁，让别的线程有机会执行。这个GIL全局锁实际上把所有线程的执行代码都给上了锁，
        所以，多线程在Python中只能交替执行，即使100个线程跑在100核CPU上，也只能用到1个核。
    ## 在Python中，可以使用多线程，但不要指望能有效利用多核，但可以使用多进程来进行多核任务
    ## 需要注意线程之间的切换相对于进程之间更为方便，代价也更低。所以讲道理多线程的效率比多进程是要高的

"""
import functools
import time, threading, _thread
from enum import unique, Enum

balance = 0
lock = threading.Lock()


@unique
class Flag(Enum):
    no_lock = 0
    has_lock = 1


# 使用装饰器来对方法进行加锁
def my_lock(fnc):
    @functools.wraps(fnc)
    def wrapper(*args, **kw):
        lock.acquire()
        try:
            result = fnc(*args, **kw)
        finally:
            # 改完了一定要释放锁:
            lock.release()
        return result

    return wrapper


""""
    current_thread 返回当前线程实例
    
"""


def do_job(n):
    print('当前线程是 %s :>>执行 %s' % (threading.current_thread().name, n))
    # 处理加减法
    global balance
    balance += 5
    balance -= 5
    print('当前线程 %s 结束。' % threading.current_thread().name)


@my_lock
def do_lock_job(n):
    print('当前线程是 %s :>>执行 %s' % (threading.current_thread().name, n))
    if '2' in threading.current_thread().name and n % 10 == 0:
        print('休息2秒')
        time.sleep(2)
    # 处理加减法
    global balance
    balance += 5
    balance -= 5
    print('当前线程 %s 结束。' % threading.current_thread().name)


def run_test(flag):
    if isinstance(flag, Flag):
        if flag == Flag.has_lock:
            for x in range(100):
                do_lock_job(x)
        else:
            for x in range(100):
                do_job(x)
    else:
        raise BaseException


if __name__ == '__main__':
    print('主线程 %s 正在运行...' % threading.current_thread().name)
    # 创建并返回线程
    t1 = threading.Thread(target=run_test, args=(Flag.has_lock,), name='doJobThread1')
    t2 = threading.Thread(target=run_test, args=(Flag.has_lock,), name='doJobThread2')
    t1.start()
    t2.start()
    t1.join()  # 等待所有线程执行完毕才进行下一步
    do_lock_job("1")
    print('thread %s ended.' % threading.current_thread().name)
