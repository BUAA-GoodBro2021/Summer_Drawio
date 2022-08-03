# 墨书-drawio

#### 介绍
从 [drawio](https://github.com/jgraph/drawio) 开源项目中，抽离出 webapp 纯前端模块，进行二次开发。

#### 前提条件

* 本地部署了 nodeJs、npm 环境，并全局安装了 yarn、serve
* 本地安装了 jdk、ant 环境

#### 安装教程

1.克隆本仓库
```
git clone [drawio-webapp项目仓库]
```
2.在根目录运行脚本
```
yarn start
```
3.浏览器访问： http://localhost:5050?dev=1&test=1

4.修改源码，刷新浏览器页面，查看更新


##### 本地 nginx 部署

如果想在本地使用 nginx 部署，那么 nginx 配置： 

```
location ^~ /drawio { 
    alias /xxx/drawio-webapp/; 
    index index.html; 
} 
```

重启 nginx 后，在浏览器访问: http://localhost/drawio/?test=1&dev=1 


#### 打包发布

* 打包

1. 运行脚本

```
yarn build
```

2. 查看打包效果

浏览器访问：http://localhost:5050


* 发布

复制除 /build 外的所有项目文件，部署到服务器即可

