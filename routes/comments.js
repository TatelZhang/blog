const express = require('express')
const router = express.Router()

const checkLogin = require('../middlewares/check').checkLogin
// POST /comments 创建一条留言
router.post('/', checkLogin, (req, res, next) => {
  res.send('创建留言')
})

// GET /comments/:commentId/remove  删除留言
router.get('/:comentId/remove', checkLogin, (req, res, next) => {
  res.send('删除留言')
})
module.exports = router
