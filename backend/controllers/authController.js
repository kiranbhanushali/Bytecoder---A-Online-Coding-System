const config = require("../config/settings");
const db = require("../models");
const User = db.user;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

var passport = require("passport");
require("../config/passport")(passport);
var settings = require("../config/settings");

exports.users = (req, res) => {
  var users = User.find({}, function (err, users) {
    res.send(users);
  });
};
exports.register = (req, res) => {
  if (!req.body.username || !req.body.password) {
    res.json({ success: false, msg: "Please pass username and password." });
  } else {
    var newUser = new User({
      username: req.body.username,
      password: req.body.password,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
    });
    // save the user
    newUser.save(function (err) {
      if (err) {
        return res.json({
          success: false,
          msg: "Username already exists.",
          err,
        });
      }
      res.json({
        username: newUser.username,
        firstname: newUser.firstname,
        lastname: newUser.lastname,
        email: newUser.email,
        success: true,
        msg: "Successful created new user.",
      });
    });
  }
};

exports.login = (req, res) => {
  User.findOne(
    {
      username: req.body.username,
    },
    function (err, user) {
      if (err) throw err;

      if (!user) {
        res.send({
          success: false,
          msg: "Authentication failed. User not found.",
        });
      } else {
        // check if password matches
        user.comparePassword(req.body.password, function (err, isMatch) {
          if (isMatch && !err) {
            // if user is found and password is right create a token
            var token = jwt.sign(
              user.toJSON(),
              settings.secret,
              { expiresIn: 86400 } // 24 hours
            );
            // return the information including token as JSON
            console.log(user);
            res.json({
              username: user.username,
              firstname: user.firstname,
              lastname: user.lastname,
              email: user.email,
              success: true,
              token: "JWT " + token,
            });
          } else {
            res.send({
              success: false,
              msg: "Authentication failed. Wrong password.",
            });
          }
        });
      }
    }
  );
};
