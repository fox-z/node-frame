## showjoy-node-background-framework

该项目为基于node的后台mvc框架, 基于koa2.3.0开.
nodejs版本 >= v8.7.0
npm版本 >= 5.4.2



## 下载

    git clone git@git.showjoy.net:node-server/showjoy-node-background-framework.git
## 目录介绍

    service:  业务真实处理层
    bin:  启动文件封装
    common: 项目共用的文件 
    config: 项目配置文件目录
    controller: 路由处理中间件
    routers: 路由文件目录
    test: 测试目录
    util: 工具方法
    script: 临时脚本目录
    public: 静态文件目录
    middlewares: 中间件目录
    app.js: koa应用实例

## 启动
    cd  showjoy-node-background-framework
    npm install .
    node bin/run

## 访问
    http://127.0.0.1:15000