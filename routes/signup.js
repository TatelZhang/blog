const express = require('express')
const router = express.Router()

const checkNotLogin = require('../middlewares/check').checkNotLogin

// GET /signup 注册页面
router.get('/', checkNotLogin, (req, res, next) => {
  res.send('注册页面')
})

// POST /signup 注册
router.post('/', checkNotLogin, (req, res, next) => {
  res.send('注册')
})
module.exports = router
