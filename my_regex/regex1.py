"""
    正则表达式
        用\d可以匹配一个数字，\w可以匹配一个字母或数字
        .可以匹配任意字符 用*表示任意个字符（包括0个），用+表示至少一个字符，用?表示0个或1个字符，
        用{n}表示n个字符，用{n,m}表示n-m个字符
        精确地匹配，可以用[]表示范围 例如 [0-9a-zA-Z\_]可以匹配一个数字、字母或者下划线
        A|B可以匹配A或B
        ^表示行的开头
        $表示行的结束
        特殊字符需要用'\'转义 例如 . * - + 等  使用r来标识字符串为原生内容（无需考虑转义） 例如：r'字符内容'
        **** 用()表示的就是要提取的分组（Group），匹配整个字符串的默认为第一分组

        正则匹配默认是贪婪匹配，也就是匹配尽可能多的字符:使用?来进行非贪婪匹配（涉及到的字符）
         re.match(r'^(\d+)(0*)$', '102300').groups() : ('102300', '')
         re.match(r'^(\d+?)(0*)$', '102300').groups() : ('1023', '00')


        关联：
        ***可以尝试使用whoosh模块实现搜索引擎功能：
            搜索引擎思路：爬行和抓取，建立索引，搜索词处理，排序
            数据结构：搜索引擎的核心数据结构为倒排文件（也称倒排索引），倒排索引是指用记录的非主属性值(也叫副键)来查找记录而组织的文件
            叫倒排文件，即次索引。倒排文件中包括了所有副键值，并列出了与之有关的所有记录主键值，主要用于复杂查询。

"""
import re


def is_valid_email(addr):
    if re.match(r'^[a-zA-Z0-9_\-.]+@[a-zA-Z0-9]+\.(com|org)$', addr):
        return True
    else:
        return False

"""
    re 中match默认从开头进行匹配，使用search可以进行全局的匹配
"""
if __name__ == "__main__":
    # 直接使用
    re.match(r'^(\d+?)(0*)$', '102300').groups()
    # 生成 Regular Expression对象
    re_telephone = re.compile(r'^(\d{3})-(\d{3,8})$')
    re_telephone.match('010-12345').groups()

    assert is_valid_email('someone@gmail.com')
    assert is_valid_email('bill.gates@microsoft.com')
    assert not is_valid_email('bob#example.com')
    assert not is_valid_email('mr-bob@example.com')
    print('ok')
