var express = require('express');
var router = express.Router();
var path = require('path');


router.post('/run', function(req, res){
    console.log( req.body ) ;
});

module.exports = router;

