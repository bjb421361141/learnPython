"""
   递归函数：
        使用数学归纳法进行设计
            1、从一般到特殊（粒度定为1）
"""
import random as rd
import math

# 递归 汉诺塔
# -*- coding: utf-8 -*-
# def hanoi(n, a, b, c):
#     if n == 1:
#         print(a, '-->', c)
#     else:
#         hanoi(n - 1, a, c, b)  # 将n-1个盘子先从a搬到b上 经过c
#         print(a, '-->', c)
#         hanoi(n - 1, b, a, c)  # 将n-1个盘子从b搬到c上 ，经过a
#
#
# if __name__ == '__main__':
#     hanoi(3, "A", "B", "C")

"""
    树:
        二叉树 - 二叉查找树 - 平衡二叉查找树、红黑树 - 递归树
"""


# 节点
class TreeNode(object):
    def __init__(self, content):
        if content is not None:
            self.content = content
            self.left_node = None
            self.right_node = None

    def equal(self, tree_node):
        if isinstance(tree_node, TreeNode):
            if self.content == tree_node.content:
                return True
        return False


# 树

class Tree(object):
    def __init__(self, content):
        self.root = TreeNode(content)

    # 添加树节点
    def add_node(self, content):
        node = TreeNode(content)
        if self.root is None:
            self.root = node
        else:
            q = [self.root]

            while True:
                pop_node = q.pop(0)
                if pop_node.left is None:
                    pop_node.left = node
                    return
                elif pop_node.right is None:
                    pop_node.right = node
                    return
                else:
                    q.append(pop_node.left)
                    q.append(pop_node.right)

    # 删除树节点
    def del_node(self, content):
        """
                从二叉树中删除一个元素
                先获取 待删除节点 item 的父节点
                如果父节点不为空，
                    判断 item 的左右子树
                    如果左子树为空，那么判断 item 是父节点的左孩子，还是右孩子，如果是左孩子，将父节点的左指针指向 item 的右子树，反之将父节点的右指针指向 item 的右子树
                    如果右子树为空，那么判断 item 是父节点的左孩子，还是右孩子，如果是左孩子，将父节点的左指针指向 item 的左子树，反之将父节点的右指针指向 item 的左子树
                    如果左右子树均不为空，寻找右子树中的最左叶子节点 x ，将 x 替代要删除的节点。
                删除成功，返回 True
                删除失败, 返回 False
        """
        if self.root is None:  # 如果根为空，就什么也不做
            return False
        else:
            flag = True
            q = [self.root]
            item = q.pop()
            while flag:
                if item is not None:
                    if item.left_node is not None:
                        if item.left_node.content == content:
                            # 做删除操作 并设置flag为 false
                            pass
                        else:
                            q.insert(0, item.left_node)
                    if item.left_node is not None:
                        if item.left_node.content == content:
                            # 做删除操作 并设置flag为 false
                            pass
                        else:
                            q.insert(0, item.left_node)
                elif item is None and len(q) <= 0:
                    flag = False
                else:
                    item = q.pop()

    # 查找最近的节点
    def __find_nearest_node(self, content):
        pass

    # 递归二叉树的遍历
    # 前序遍历 根节点->左节点->右节点
    def dlr(self, node):
        print(node.right_node)
        if node.left_node is not None and isinstance(node.left_node, TreeNode):
            self.dlr(node.left_node)
        if node.right_node is not None and isinstance(node.right_node, TreeNode):
            self.dlr(node.right_node)

    # 中序遍历 左节点->根节点->右节点
    def dlm(self, node):
        if node.left_node is not None and isinstance(node.left_node, TreeNode):
            self.dlm(node.left_node)
        print(node.right_node)
        if node.right_node is not None and isinstance(node.right_node, TreeNode):
            self.dlm(node.right_node)

    # 后序遍历 左节点->右节点->根节点
    def dlr(self, node):
        if node.left_node is not None and isinstance(node.left_node, TreeNode):
            self.dlr(node.left_node)
        if node.right_node is not None and isinstance(node.right_node, TreeNode):
            self.dlr(node.right_node)
        print(node.right_node)


# 生成二叉树
def generate_tree():
    my_list = rd.sample({4, 3, 2, 1}, math.floor(rd.random() * 10))
    tree = Tree("tree Node")
    for x in my_list:
        tree.add_node(str(x))


if __name__ == '__main__':
    print("aaaaa")
