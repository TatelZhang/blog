> 目录结构
* /models 操作数据库文件
* /public 静态文件
* /routes 路由文件
* /views 模板文件
* index.js 主文件
* /config 配置文件夹

数据库： mongod --config F:\MongoDB\etc\mongodb.conf
### /config 文件
#### default.js
1. port: 启动程序监听端口
2. session express-session 配置信息
3. mongodb: mongodb 地址 协议为: ***mongodb://***
---------------------------------
> 依赖模块
1. express: web 框架
2. express-session: session 中间件
3. connect-mongo: 将session存储于mongodb, 结合express-session使用
4. connect-flash: 页面通知中间件，基于session实现
5. ejs： 模板引擎
6. express-formidable: 接收表单及文件上传的中间件
7. config-lite: 读取配置文件
8. marked: markdown 解析
9. moment： 时间格式化
10. mongolass: mongodb 驱动
11. objectid-to-timestamp: 根据ObjectID生成时间戳 
12. sha1: sha1加密,密码加密
13. winston: 日志
14. express-winston： express的winston中间件
## 功能设计
> 注册
--------------------------
  1. 注册页： *GET /signup*
  2. 注册(上传头像等)：*POST /signup*
---------------------------
> 登录
  1. 登录页： *GET /signin*
  2. 登录： *POST /signin*
-----------------------------------
> 登出： *GET /signout*
-----------------------------------
>  查看文章
  1. 主页： *GET /posts*
  2. 个人主页： *GET /posts?author=xxx*
  3. 查看文章(包括留言) *GET /posts/:postId*
-----------------------------------
> 发表文章
  1. 发表文章页：*GET /posts/create*
  2. 发表文章： *POST /posts/create*

> 修改文章
  1. 修改文章页： *GET /posts/:postId/edit*
  2. 修改文章： *POST /posts/:postId/edit*

> 删除文章： *GET /posts/:postId/remove*

> 留言
  1. 创建留言： *POST /comments*
  2. 删除留言： *GET /comments/:commentId/remove*

  
