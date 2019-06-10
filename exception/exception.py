"""
    异常捕获：
        当我们认为某些代码可能会出错时，就可以用try来运行这段代码，如果执行出错，则后续代码不会继续执行，
        而是直接跳转至错误处理代码，即except语句块，执行完except后，如果有finally语句块，则执行finally语句块
    调试：
        1、使用assert
    单元测试：具体参考TestMyORM.py文件
    文档型测试：在类中编写测试代码

"""
try:
    print('try...')
    r = 10 / int('a')
    print('result:', r)
except ValueError as e:
    print('ValueError:', e)
except ZeroDivisionError as e:
    print('ZeroDivisionError:', e)
finally:
    print('finally...')
print('END')


def foo(s):
    n = int(s)
    # assert必须为ture 不然断言失败输出错误信息
    assert n != 0, 'n is zero!'
    return 10 / n


"""
    文档类测试 
    放于类内部，只执行第一个注释框中的内容
    测试代码 >>> 代码行
        输出预期
        使用 ...省略输出
"""


class Dict(dict):
    """
        >>> d2 = Dict(a=1, b=2, c='3')
        >>> d2['empty']
        Traceback (most recent call last):
            ...
        KeyError: 'empty'
    """

    def __init__(self, **kw):
        super(Dict, self).__init__(**kw)

    def __getattr__(self, key):
        try:
            return self[key]
        except KeyError:
            raise AttributeError(r"'Dict' object has no attribute '%s'" % key)

    def __setattr__(self, key, value):
        self[key] = value


if __name__ == '__main__':
    import doctest

    doctest.testmod()
