#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2019/7/11 20:32
# @Author  : Baijb


from turtle import *
import turtle

"""
_tg_classes = ['ScrolledCanvas', 'TurtleScreen', 'Screen',
               'RawTurtle', 'Turtle', 'RawPen', 'Pen', 'Shape', 'Vec2D']

_tg_screen_functions = ['addshape', 'bgcolor', 'bgpic', 'bye',
        'clearscreen', 'colormode', 'delay', 'exitonclick', 'getcanvas',
        'getshapes', 'listen', 'mainloop', 'mode', 'numinput',
        'onkey', 'onkeypress', 'onkeyrelease', 'onscreenclick', 'ontimer',
        'register_shape', 'resetscreen', 'screensize', 'setup',
        'setworldcoordinates', 'textinput', 'title', 'tracer', 'turtles', 'update',
        'window_height', 'window_width']

_tg_turtle_functions = ['back', 'backward', 'begin_fill', 'begin_poly', 'bk',
        'circle', 'clear', 'clearstamp', 'clearstamps', 'clone', 'color',
        'degrees', 'distance', 'dot', 'down', 'end_fill', 'end_poly', 'fd',
        'fillcolor', 'filling', 'forward', 'get_poly', 'getpen', 'getscreen', 'get_shapepoly',
        'getturtle', 'goto', 'heading', 'hideturtle', 'home', 'ht', 'isdown',
        'isvisible', 'left', 'lt', 'onclick', 'ondrag', 'onrelease', 'pd',
        'pen', 'pencolor', 'pendown', 'pensize', 'penup', 'pos', 'position',
        'pu', 'radians', 'right', 'reset', 'resizemode', 'rt',
        'seth', 'setheading', 'setpos', 'setposition', 'settiltangle',
        'setundobuffer', 'setx', 'sety', 'shape', 'shapesize', 'shapetransform', 'shearfactor', 'showturtle',
        'speed', 'st', 'stamp', 'tilt', 'tiltangle', 'towards',
        'turtlesize', 'undo', 'undobufferentries', 'up', 'width',
        'write', 'xcor', 'ycor']
_tg_utilities = ['write_docstringdict', 'done']

__all__ = (_tg_classes + _tg_screen_functions + _tg_turtle_functions +
           _tg_utilities + ['Terminator']) # + _math_functions)

_alias_list = ['addshape', 'backward', 'bk', 'fd', 'ht', 'lt', 'pd', 'pos',
               'pu', 'rt', 'seth', 'setpos', 'setposition', 'st',
               'turtlesize', 'up', 'width']

"""


#
# turtle.width(4)
#
# # 前进:
# turtle.forward(200)
# # 右转90度:
# turtle.right(90)
#
# # 笔刷颜色:
# turtle.pencolor('red')
# turtle.forward(100)
# turtle.right(90)
#
# turtle.pencolor('green')
# turtle.forward(200)
# turtle.right(90)
#
# turtle.pencolor('blue')
# turtle.forward(100)
# turtle.right(90)
#
# # 调用done()使得窗口等待被关闭，否则将立刻关闭窗口:
# done()

def drawStar(x, y):
    turtle.pu()
    turtle.goto(x, y)
    turtle.pd()
    # set heading: 0
    turtle.seth(0)
    for i in range(5):
        turtle.fd(40)  # 向前40
        turtle.rt(144)  # 右转角度144






for x in range(0, 250, 50):
    drawStar(x, 0)

done()
