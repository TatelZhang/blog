const express = require('express')
const router = express.Router()

const checkNotLogin = require('../middlewares/check').checkNotLogin

// GET /signup 注册页面
router.get('/', (req, res, next) => {
  res.render('pages/signup', {
    user: ''
  })
})

// POST /signup 注册
router.post('/', checkNotLogin, (req, res, next) => {
  console.log(req.params)
  res.send('注册成功~')
})
module.exports = router
