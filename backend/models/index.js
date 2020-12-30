const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./userModel");
db.problem = require("./problemsModel");
db.submission = require("./submissionModel");

module.exports = db;
