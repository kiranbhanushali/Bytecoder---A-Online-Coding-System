var express = require('express')
var router = express.Router()
var path = require('path')

var db = require('../models')
const userModel = require('../models/userModel')
var User = db.user

router.get('/profile', function (req, res) {
    console.log(req.decoded)
    res.send(req.decoded)
})
router.post('/img', function (req, res) {
    console.log(req.body)
    User.updateOne(
        { username: req.body.username },
        {
            $set: {
                imageUrl: req.body.url,
            },
        },
        function (err, model) {
            if (err) {
                console.log(err)
                return res.send(err)
            }
            return res.json(model)
        }
    )
})

module.exports = router

// // Fetch the user by id
// User.findOne({_id: userId}).then(function(user){
//     // Do something with the user
//     return res.send(200);
// });
// }
// return res.send(500);
