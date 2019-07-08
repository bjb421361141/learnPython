# -*- coding: utf-8 -*-
import unittest
from demo.ormFramework.MyORM import StringField, Model


# 继承unittest.TestCase 来进行单元测试
class TestStudent(unittest.TestCase):
    class User(Model):
        # 定义类的属性到列的映射：
        id = StringField('id')
        name = StringField('username')
        email = StringField('email')
        password = StringField('password')

    class Person(object):
        pass

    class Model2(dict, Person):
        def __init__(self, **kw):
            super(TestStudent.Model2, self).__init__(**kw)

    def setUp(self):
        print('运行整个单元测试的开端 setUp')

    def tearDown(self):
        print('运行整个单元测试的结束 tearDown...')

    """
        测试异常的抛出一般适用于临界点的判断
    """
    def test_invalid(self):
        print("=================判断是否有按照预期抛出异常=================")
        u = TestStudent.User(id=12345, name='Michael', email='test@orm.org', password='my-pwd')
        u.save()
        # with self.assertRaises(KeyError):
        #     print(u["id"])  # 不存在属性抛出 AttributeError
        # with self.assertRaises(AttributeError):
        #     print(u.id)  # 不存在属性抛出 AttributeError

        u2 = TestStudent.Model2(id=12345, name='Michael', email='test@orm.org', password='my-pwd')
        print(u2["name"])
        with self.assertRaises(AttributeError):
            print(u2.name)


if __name__ == '__main__':
    unittest.main()
