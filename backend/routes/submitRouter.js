var express = require('express')
var router = express.Router()
var path = require('path')
var axios = require('axios')

var db = require('../models')
var Submission = db.submission

// send req to executor
// executor send verdict
// update verdict in databse
// send verdict to user

router.get('/submission', async (req, res) => {
    const sub = await Submission.find({ username: req.decoded.username })
    res.json({ sub })
})
router.post('/submit', (req, res) => {
    console.log(req.decoded)
    axios
        .post('http://54.152.21.126:3000/solution/1', req.body)
        .then(function (response) {
            // console.log(response)
            var newSubmission = new Submission({
                problemcode: req.body.problemcode,
                result: {
                    verdict: response.data.stdout,
                },
                username: req.decoded.username,
            })
            newSubmission.save(function (err) {
                if (err) {
                    console.log(err)
                }
                console.log('submitted ')
            })
            res.send(response.data)
        })
        .catch(function (error) {
            console.log(error)
            res.send(error)
        })

    // res.send(" something happend.... ");
})

module.exports = router
