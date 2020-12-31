var express = require('express');
var router = express.Router();
var path = require('path');

var db = require('../models');
var User = db.user;

router.get('/profile', function(req, res) {
    console.log( req.decoded);
    res.send( req.decoded ) ;
});

module.exports = router;

        // // Fetch the user by id
        // User.findOne({_id: userId}).then(function(user){
        //     // Do something with the user
        //     return res.send(200);
        // });
    // }
    // return res.send(500);
