const express = require('express')
const router = express.Router()

const checkLogin = require('../middlewares/check').checkLogin

// GET /posts/ 所有文章页
router.get('/', (req, res, next) => {
  res.render('pages/posts', {user: ''})
})

// 新建文章页
router.get('/create', (req, res, next) => {
  res.render('pages/posts/create', {
    user: ''
  })
})

// POST /posts/create 新建文章
router.post('/create', checkLogin, (req, res, next) => {
  res.render('pages/posts/creat')
})

// GET /posts/:postId 查看文章
router.get('/:postId', (req, res, next) => {
  res.render('pages/posts/detail', {user: 'a'})
})

// GET /posts/:postId/edit 编辑文章
router.get('/:postId/edit', checkLogin, (req, res, next) => {
  res.send('更新文章页')
})

// POST /posts/:postId  更新文章
router.post('/:postId', checkLogin, (req, res, next) => {
  res.send('更新文章')
})

// GET /posts/:postId/remove  删除文章
router.get('/:postId/remove', checkLogin, (req, res, next) => {
  res.send('删除文章')
})
module.exports = router
