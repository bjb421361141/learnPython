#命令
> ## 版本管理
    conda --version
    conda update conda
> ##conda环境配置
    /**
        创建时没有指定版本的话默认使用anaconda使用的python版本
        默认环境的安装路径为  %安装目录%/envs/snowflakes
    **/
    conda create --name '环境名称' python=3.7 '需要安装的Python包列表'
    activate '环境名称'
    conda info --envs  //列出所有环境
    conda create -n '环境名' --clone '已存在的环境' //复制环境
    conda remove -n '环境名' --all
    deactivate  //注销当前环境
    //创建一个环境配置信息
    conda env export --name base > C:\Users\Baijb\Desktop\env.yml
    conda env create -f C:\Users\Baijb\Desktop\env.yml
    
> ##安装管理包
>> #### 1、使用conda管理
    /**
       使用conda 管理包可以自动安装依赖
    **/
    conda list  '包名' //列出所有安装的包 ，可以根据包名进行过滤
    conda install --name '环境名' '包名'    //不带名称直接安装到激活的环境中
>> #### 2、使用Anaconda.org安装包
    类似于Maven管理包文件，网站相当于Repository
    查找相应的包可以获取包的安装语句
>> #### 3、使用pip管理 
    activate '环境名称'  //需要跳转到相应的环境中
    pip search '包名' 
    pip install '包名'
>> #### 4、文件安装
    下载源文件 执行源文件中的setup.py 
    python setup.py install
