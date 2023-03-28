var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.send('Hello world!');
});

router.get('/example', function (req, res, next) {
    console.log('query:', req.query);
    res.send('GET example');
});

router.post('/example', function (req, res, next) {
    console.log('body:', req.body);
    res.send('POST example');
});

module.exports = router;
