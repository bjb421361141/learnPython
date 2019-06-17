# !/usr/bin/env python3
# -*- coding: utf-8 -*-
import re
from datetime import datetime, timedelta, timezone
from pytz import timezone as pytimezone1

"""
    datetime是Python处理日期和时间的标准库
    1、datetime对象的创建
    2、日期与其他类型间的转换
    3、日期计算
    4、时区转换
    
    *timestamp:1970年1月1日 00:00:00 UTC+00:00时区的时刻称为epoch time，记为0（1970年以前的时间timestamp为负数）
"""
# 对象创建
dt = datetime(2015, 4, 19, 12, 20)
utcTime = datetime.utcfromtimestamp(dt.timestamp())  # 直接转成utc时区时间
print(dt, utcTime)
now = datetime.now()
print("当前时间:%s now对象的类型 %s" % (now, str(type(now))))

# 时间操作
nowtimestamp = now.timestamp()
nowtimestamp -= 3600  # 提前一个小时
now2 = datetime.fromtimestamp(nowtimestamp)  # 默认时区和当前系统的时区一致
print(now2)
# 类型转换
cday = datetime.strptime('2015-6-1 18:19:59', '%Y-%m-%d %H:%M:%S')
print("格式化时间:%s cday对象的类型 %s" % (cday, str(type(cday))))
nowstr = now.strftime('%Y-%m-%d %H:%M:%S')
print(nowstr)
# 时区转换
# 时区转换的关键在于，拿到一个datetime时，要获知其正确的时区，然后强制设置时区，作为基准时间。
# 利用带时区的datetime，通过astimezone()方法，可以转换到任意时区。 没有带时区的无法进行转换
utc_Tm = datetime.utcnow().replace(tzinfo=timezone.utc)  # 拿到utc时间并设置成基准时间 相当于将当前时间作为此时区的时间
bj_tm = datetime.now().replace(tzinfo=timezone(timedelta(hours=8)))  # 相当于datetime.now(timezone(timedelta(hours=9)))
tk_tm = utc_Tm.astimezone(timezone(timedelta(hours=9)))
tk_tm2 = bj_tm.astimezone(timezone(timedelta(hours=9)))
print(utc_Tm, bj_tm, tk_tm, tk_tm2, sep="\n")
# print(pytimezone1.__globals__['all_timezones'])

"""
    输入时间和时区返回timestamp
    '2015-6-1 08:10:30', 'UTC+7:00'
"""


def to_timestamp(dt_str, tz_str):
    tz = re.match(r'^UTC((?:\+|\-)(0?\d)):00', tz_str)
    dt = datetime.strptime(dt_str, '%Y-%m-%d %H:%M:%S')
    ts = dt.replace(tzinfo=timezone(timedelta(hours=int(tz.group(1)))))

