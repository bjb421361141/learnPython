#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2019/7/4 11:03
# @Author  : Baijb

"""
    TODO
        根据查询条件（ip地址，城市名（编号），经纬度等）对外提供天气信息查询的接口？？
        使用中国
    1、YaHoo 天气api调用（需要加入白名单）
    通过oAuth进行认证调用API
    Client ID (Consumer Key)
        dj0yJmk9ZlNDRFh5SkhNcUVaJmQ9WVdrOWFtdHVRelZGTnpBbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTg5
    Client Secret (Consumer Secret)
        ee7f52d5fabb71d8f71836b159f32ac69744a5d6
    Application Name: weather

    2、openweathermap + 缓存
    通过citycode和appId 来请求
    appid：3621d96d75ec682efe66d6a6c885f816

    后续测试
"""

