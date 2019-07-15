#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2019/7/11 20:32
# @Author  : Baijb
from tkinter import Frame, Label, Button

"""
tkinter 为Python原生的图形化类库
Frame widget which may contain other widgets and can have a 3D border.
    pack()方法把Widget加入到父容器中，并实现布局。pack()是最简单的布局，grid()可以实现更复杂的布局
    
"""


class Application(Frame):
    # master 为父级Widgets模块
    def __init__(self, master=None):
        Frame.__init__(self, master)
        self.pack()
        self.createWidgets()

    def createWidgets(self):
        self.helloLabel = Label(self, text='Hello, world!')
        self.helloLabel.pack()
        self.quitButton = Button(self, text='Quit', command=self.quit)
        self.quitButton.pack()


app = Application()
# 设置窗口标题:
app.master.title('Hello World')
# 主消息循环:
app.mainloop()
