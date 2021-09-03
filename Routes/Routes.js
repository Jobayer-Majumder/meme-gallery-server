const express = require('express');

const router = express.Router();



router.get('/', (req, res) => {
    res.send('Look mom i am using node js server')
})


router.get('/post', (req, res) => {
    res.send('look im in post router')
})

module.exports = router;