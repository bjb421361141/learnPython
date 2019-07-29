import os
import sqlite3

"""
    SQLite是一种嵌入式数据库,它的数据库就是一个文件(C语言实现)，它是无类型的数据库，
    你可以保存任何类型的数据到你所想要保存的任何表的任何列中。
     优点：
        体积小，可嵌入，适合桌面和移动应用。支持大部分SQL，软件开源
     缺点   
        不能承受高并发访问。
    Python就内置了SQLite3（JAVA中也内置）
    
    关系型数据库理解：
        表：存放相同关系型数据的集合
        行：数据记录
        
     1、创建Connection
     2、获取cursor
     3、使用cursor 执行语句
     4、使用cursor获取数据信息 （cursor.rowcount() cursor.fetchall()）
     5、关闭cursor和connect
"""
dirPath = os.path.dirname(__file__)
# 拼接dbfile路径
dbfilePath = os.path.join(dirPath, 'test.db')
conn = None
try:
    conn = sqlite3.connect(dbfilePath)
    cursor = conn.cursor()
    cursor.execute('create table user (id varchar(20) primary key, name varchar(20))')
    cursor.execute('insert into user (id, name) values (\'1\', \'Michael\')')
    print(cursor.rowcount)
    cursor.close()
    conn.commit()
except ConnectionError as e:
    pass
finally:
    if conn is not None:
        conn.close()

try:
    conn = sqlite3.connect('test.db')
    cursor = conn.cursor()
    cursor.execute('select * from user where id=?', ('1',))
    values = cursor.fetchall()
    print(values)
    cursor.close()
except ConnectionError as e:
    pass
finally:
    conn.close()



