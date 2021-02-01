var express = require('express')
var router = express.Router()
var path = require('path')

var ProblemModel = require('../models/problemsModel.js')

router.get('/problems', function (req, res) {
    if (req.query.category !== undefined) {
        ProblemModel.find(
            { category: req.query.category },
            function (err, problems) {
                res.send(problems)
            }
        )
    } else {
        ProblemModel.find({}, function (err, problems) {
            res.send(problems)
        })
    }
})

// router.post( '/a',function (req , res ) {
//     console.log( req.body) ;
//     res.send( req.body);
// }
// });
//
// add problems
var jwt = require('jsonwebtoken')
// routers T
const verifyJWT = (req, res, next) => {
    console.log(req.headers['authorization'])
    if (req.headers['authorization'] === undefined) res.send('enter token')
    const token = req.headers['authorization'].split(' ')[1]
    if (!token) {
        res.json({ success: false })
    } else {
        jwt.verify(token, 'mysecretkey', (err, decoded) => {
            if (err) res.json({ err: err, decoded: decoded, success: false })
            else {
                req.decoded = decoded
                next()
            }
        })
    }
}

router.post('/problem', verifyJWT, function (req, res) {
    var problem = new ProblemModel({
        title: req.body.title,
        code: req.body.code,
        category: req.body.category,
        markdown: req.body.statement,
        meta: req.body.meta,
        input: req.body.input,
        output: req.body.output,
    })

    // test cases save here
    //
    console.log(req.decoded)
    if (req.decoded.isAdmin) {
        //Save book.
        problem.save(function (err) {
            if (err) {
                console.log(err)
                res.send(err)
            } else console.log('saved')
        })
        res.send(problem)
    } else {
        res.send('only admin can add problem')
    }
})

router.get('/problem/:code', function (req, res) {
    ProblemModel.find({ code: req.params.code }, function (err, problems) {
        res.send(problems)
    })
})

router.post('/submit/:problemId', function (req, res) {
    console.log(req.body)
})

module.exports = router
