const express = require('express')
const router  =  express.Router()

//routes
router.get('/', (req, res) => {
  res.send('Hi server. Test Base route is reached')
})

module.exports = router