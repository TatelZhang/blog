const express = require('express')
const path = require('path')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const flash = require('connect-flash')
const config = require('config-lite')(__dirname)
const routes = require('./routes')
const pkg = require('./package')

const app = express()

// 设置模板目录
app.set('views', path.join(__dirname, 'views'))
// 设置模板引擎为 ejs
app.set('view engine', 'ejs')

// 设置静态文件目录
app.use(express.static(path.join(__dirname, 'public')))


// session 中间件
app.use(session({
  name: config.session.key, // 设置cookie中保存sessio id 的字段名称
  secret: config.session.secret, // 通过设置 secret 计算hash值， 并放到cookie中
  resave: true, // 强制更新session
  saveUninitialized: false, // false, 强制创建一个session，即使未登录
  cookie: {
    maxAge: config.session.maxAge // 过期时间，过期后 cookie 中的session id 自动删除
  },
  store: new MongoStore({ // 将session 存储到 mongodb
    url: config.mongodb // 数据库地址
  })
}))

// flash中间件，用来显示通知
app.use(flash())

routes(app)// 加载路由
app.listen(config.port, () => {
  console.log(`${pkg.name} start at port ${config.port}`)
})
