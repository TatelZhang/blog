const express = require('express')
const router = express.Router()

// GET /signout

router.get('/', (req, res, next) => {
  res.send('登出')
})

module.exports = router
