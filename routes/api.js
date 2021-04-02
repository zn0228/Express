var express = require('express');
var router = express.Router();

const arr=[
    "oooooo",
    "pppppp",
    "iiiiii"

];

router.get('/:num', function(req, res, next) {
    const num = +req.params.num;
    console.log(arr[num])
    
    res.json(arr);
});

module.exports = router;


