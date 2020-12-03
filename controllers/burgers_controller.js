const express = require('express');
const router = express.Router();
const burgz = require('../models/burger.js')


router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
    burgz.all(function () {
        console.table(res)
    })
    console.log(req)
    console.log(res)

})



module.exports = router;