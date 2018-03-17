const express = require('express')
const router = express.Router()

const checkNotLogin = require('../middlewares/check').checkNotLogin

// GET /signup 注册页面
router.get('/', (req, res, next) => {
  res.render('pages/signup', {
    user: 'tatel',
    logined: true
  })
})

// POST /signup 注册
router.post('/', checkNotLogin, (req, res, next) => {
  res.send('注册')
})
module.exports = router
