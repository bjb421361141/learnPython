"""
    返回函数:把函数作为结果值返回：相关参数和变量都保存在返回的函数中，这种称为“闭包（Closure）返回闭包时牢记一点：返回函数不要引用任何循环变量，或者后续会发生变化的变量。
    匿名函数：因为函数没有名字，不必担心函数名冲突。匿名函数有个限制，就是只能有一个表达式，不用写return，返回值就是该表达式的结果。
    装饰器: 对目标方法进行包装，增加新功能
    偏函数：把一个函数的某些参数给固定住（也就是设置默认值），返回一个新的函数
"""
import functools
import time
from types import FunctionType


def lazy_sum(*args):
    def sum():
        ax = 0
        for n in args:
            ax = ax + n
        return ax

    return sum


f = lazy_sum(1, 3, 5, 7, 9)
print(f())
print(f())


# 返回闭包时牢记一点：返回函数不要引用任何循环变量，或者后续会发生变化的变量。
def count():
    fs = []
    for i in range(1, 4):
        def f():
            return i * i

        fs.append(f)
    return fs


f1, f2, f3 = count()
print(f1())
print(f2())
print(f3())


# 使用
def count2():
    def f(j):
        return lambda: j * j
        # def g():
        #     return j*j
        # return g

    fs = []
    for i in range(1, 4):
        fs.append(f(i))  # f(i)立刻被执行，因此i的当前值被传入f()
    return fs


f1, f2, f3 = count2()
print(f1())
print(f2())
print(f3())

# 匿名函数
print(list(map(lambda x: x * x, [1, 2, 3, 4, 5, 6, 7, 8, 9])))


# 装饰器
# 装饰器返回的是一个函数，该函数包含原函数的调用
def decorator(func):
    # 相当于 wrapper.__name__ = func.__name__
    @functools.wraps(func)
    def wrapper(*args, **kw):
        print('调用函数:%s' % func.__name__)
        return func(*args, **kw)

    return wrapper


# 如果出现@XXX(参数) 相当于返回一个装饰器函数的函数
# 一般@XXX 返回一个封装目标函数的函数
@decorator
def time2():
    print("2018-01-02")


time2()
print(time2.__name__)


# 支持带参数和不带参数的装饰器： 不带参数的接受的是function 带参数的接收的是参数列表
def metric(*text):
    if type(text[0]) == FunctionType:
        # 不带参数的不用封装装饰器
        @functools.wraps(text[0])
        def wrapper(*args, **kwargs):
            start_tm = time.time()
            print("开始时间：" + str(start_tm))
            r = text[0](*args, **kwargs)
            end_tm = time.time()
            print("结束时间：" + str(end_tm))
            # 可以使用round 来进行小数截取
            print('%s executed in %.2f ms' % (text[0].__name__, end_tm - start_tm))
            return r

        return wrapper
    else:
        # 带参数的需要封装装饰器
        def decorator(fn):
            @functools.wraps(fn)
            def wrapper(*args, **kwargs):
                print("带参数：" + str(text))
                start_tm = time.time()
                print("开始时间：" + str(start_tm))
                r = fn(*args, **kwargs)
                end_tm = time.time()
                print("结束时间：" + str(end_tm))
                # 可以使用round 来进行小数截取
                print('%s executed in %.2f ms' % (fn.__name__, end_tm - start_tm))
                return r

            return wrapper

        return decorator


# metric(slow_fn(sec))
@metric
def slow_fn(sec):
    # 休眠10秒
    time.sleep(sec)
    print("慢函数")
    return sec


# metric("快", "第二个参数")(slow_fn(sec))
@metric("快", "第二个参数")
def fast_fn(sec):
    # 休眠10秒
    time.sleep(sec)
    print("快函数")
    return sec


print("#################################################")
slow_fn(5)
print("#################################################")
fast_fn(1)

# 偏函数 为函数指定一个默认值，默认的值为从左到右
int2 = functools.partial(int, base=2)


# 相当于 定义一个新的函数
def int3(x, base=2):
    return int(x, base)
