const express = require('express')
const router = express.Router()

const checkNotLogin = require('../middlewares/check').checkNotLogin

// GET /signin 获取登录页面
router.get('/', (req, res, next) => {
  res.render('pages/signin', {
    user: 'tatel'
  })
})
// router.get('/', checkNotLogin, (req, res, next) => {
//   res.send('登录页面')
// })

// POST /signin 登录

router.post('/', checkNotLogin, (req, res, next) => {
  // res.send('登录')
  res.send('components/header')
})

module.exports = router
