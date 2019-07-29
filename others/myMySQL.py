#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2019/7/24 20:59
# @Author  : Baijb


"""
MySQL
    show engines; //显示数据库有提供的引擎
    show variables like '%storage_engine%'; //展示数据库引擎的使用
    select version(); // 查看mysql版本


事务（transaction）是用户定义的一个数据库操作序列，这些操作要么全做，要么全不做，是一个不可分割的工作单位。事务的ACID特性：
    基元性（atomicity）:整个事务中的所有操作，要么全部完成，要么全部不完成,执行有问题会被回滚回执行前
    一致性（consistency）:一致性是指在事务开始之前和事务结束以后，数据库的完整性约束没有被破坏。这是说数据库事务不能破坏关系数据的完整性以及业务逻辑上的一致性。
    隔离性（isolation）:多个事务并发访问时，事务之间是隔离的，一个事务不应该影响其它事务运行效果
    持续性（durability）:意味着在事务完成以后，该事务所对数据库所作的更改便持久的保存在数据库之中，并不会被回滚。（完成的事务是系统永久的部分，对系统的影响是永久性的，该修改即使出现致命的系统故障也将一直保持）



    *****
        write ahead logging：SQL Server中使用了WAL（Write-Ahead Logging）技术来保证事务日志的ACID特性，在数据写入到数据库之前，
        先写入到日志，再将日志记录变更到存储器中。
        oracle 数据库中存在重做日志文件(redo log),其作用是保证数据的一致性和事务的完整性，防止在系统崩溃时最近的事务无法恢复。
    *****
    mysql 数据库引擎：
        数据库引擎是用于存储、处理和保护数据的核心服务。利用数据库引擎可控制访问权限并快速处理事务，从而满足企业内大多数需要处理
        大量数据的应用程序的要求。安装mysql时定义数据库引擎

    ISAM：
        ISAM是一个定义明确且历经时间考验的数据表格管理方法，它在设计之时就考虑到数据库被查询的次数要远大于更新的次数。因此，ISAM执行读取操作的速度很快，而且不占用大量的内存和存储资源。
    ISAM的两个主要不足之处在于，它不支持事务处理，也不能够容错。需要定时备份，防止数据持久化后无法回滚
    MYISAM：
    　　MYISAM是MYSQL的ISAM扩展格式和缺省的数据库引擎。除了提供ISAM里所没有的索引和字段管理的功能，MYISAM还使用一种表格锁定的机制，来优化多个并发的读写操作。
    其代价是你需要经常运行OPTIMIZE TABLE命令，来恢复被更新机制所浪费的空间
    HEAP：
　　  HEAP允许只驻留在内存里的临时表格。驻留在内存里让HEAP要比ISAM和MYISAM都快，但是它所管理的数据是不稳定的，而且如果在关机之前没有进行保存，那么所有的数据都会丢失。在数据行被删除的时候，
    HEAP也不会浪费大量的空间。HEAP表格在你需要使用SELECT表达式来选择和操控数据的时候非常有用。
    INNODB和BERKLEYDB：
        支持事务和外键的处理。INNODB底层是通过B+树实现的
    ****拓展：
        B树（平衡二叉树）：二叉树的基础上保证经过多次增减操作后仍是一棵二叉树且保持节点分布均匀
        B+树:B+树是B-树的变体，也是一种多路搜索树,定义和B树相同
          1、非叶子结点的子树指针与关键字个数相同，可以通过关键字查找关键字对应下的树
          2、为所有叶子结点增加一个链指针
          3、所有关键字都在叶子结点出现；
        B*树：在B+树为基础上增加除根节点外的非叶子节点都加上兄弟节点的链接。

"""

import pymysql

"""

"""
conn = pymysql.connect(
        host="192.168.245.128",
        port=3306,
        user="slf",
        passwd="slf1234",
        db="SLF_DB",
        charset='utf8')

cursor = conn.cursor()
cursor.execute('create table my_user (id varchar(20) primary key, name varchar(20))')
cursor.execute('insert into my_user (id, name) values (%s, %s)', ['1', 'Michael'])
print(cursor.rowcount)
conn.commit()
cursor.close()
