var express = require('express');
var router = express.Router();
var path = require('path');

var ProblemModel = require( '../models/problemsModel.js');


router.get('/problems', function(req, res) {
    if( req.query.category !== undefined ) {
        
        ProblemModel.find({category:req.query.category }, function (err, problems) {
            res.send(problems);
        });

    }else{
        ProblemModel.find({}, function (err, problems) {
            res.send(problems);
        });
    }
});

// router.post( '/a',function (req , res ) {
//     console.log( req.body) ;
//     res.send( req.body);
// }
// );
router.post('/problem', function(req, res){

    console.log( req.body);
    var problem = new ProblemModel(
        { title: req.body.title,
            code: req.body.code,
            category:req.body.category,
            markdown:req.body.statement,
            meta: req.body.meta
        });


    // test cases save here 
    //



    //Save book.
    problem.save(function (err) {
        if (err) console.log(err) ; 
        else console.log( "saved");
    });
    res.send( problem ) ;

});



router.get('/problem/:code', function(req, res) {

    ProblemModel.find({code:req.params.code}, function (err, problems) {
        res.send(problems);
    });
});


router.post( '/submit/:problemId' , function(req,res){
    console.log( req.body ) ;
});

module.exports = router;
