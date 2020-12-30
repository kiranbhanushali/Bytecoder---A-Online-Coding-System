var express = require('express');
var router = express.Router();
var path = require('path');


var MONGODB_URL ='mongodb+srv://Jenish4024:Jenish4024@codebyte.1uoga.mongodb.net/codebyte?retryWrites=true&w=majority'
var mongoose = require("mongoose");
mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
	//don't show the log when it is test
	if(process.env.NODE_ENV !== "test") {
		console.log("Connected to %s", MONGODB_URL);
		console.log("App is running ... \n");
		console.log("Press CTRL + C to stop the process. \n");
	}
})
	.catch(err => {
		console.error("App starting error:", err.message);
		process.exit(1);
	});
var db = mongoose.connection;



router.get('/', function(req, res) {
    console.log( req.session) ;
    res.send("Hello welcome to the coding system backend api");
});

module.exports = router;
