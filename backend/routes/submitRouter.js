var express = require("express");
var router = express.Router();
var path = require("path");
var axios = require("axios");

var db = require("../models");
var Submission = db.submission;
var User = db.user;
var Problem = db.problem;
// send req to executor
// executor send verdict
// update verdict in databse
// send verdict to user

router.get("/submission", async (req, res) => {
  const sub = await Submission.find({ username: req.decoded.username });
  res.json({ sub });
});
router.post("/submit", (req, res) => {
  //console.log(req.decoded);
  axios
    .post("http://18.212.188.136:3000/solution/1", req.body)
    .then(async function (response) {
      // console.log(response)
      var digit1 = 0, digit2 = 0, flag = 0;
      str = response.data.stdout;
      if (response.data.stdout) {
        var n = str.length;
        for (let i = 0; i < n; i++) {
          if (flag == 0) {
            while (i < n && str[i] >= '0' && str[i] <= '9') {
              digit1 = digit1 * 10 + (str[i] - '0');
              flag = 1;
              i++;
            }
          }
          else {
            while (i < n && str[i] >= '0' && str[i] <= '9') {
              digit2 = digit2 * 10 + (str[i] - '0');
              i++;
            }
          }
        }
      }
      var gen_ans;
      if (digit1 === digit2) {
        gen_ans = "Solved";
      }
      else {
        if (digit2 == 0) {
          gen_ans = "Wrong";
        }
        else {
          gen_ans = "Partial Correct";
        }
      }
      console.log(gen_ans);
      var newSubmission = new Submission({
        problemcode: req.body.problemcode,

        result: {

          verdict: gen_ans,

        },
        username: req.decoded.username,
      });
      newSubmission.save(function (err) {
        if (err) {
          console.log(err);
        }
        console.log("submitted ");
      });
      var verdict = gen_ans == "Solved" ? 0.5 : 0;
      await User.findOneAndUpdate(
        { username: req.decoded.username },
        {
          $inc: {
            "meta.totalSubmission": 0.5,
            "meta.submissions": verdict,

          },
        },
        null,
        function (err, docs) {
          // console.log(err);

          response.data.meta = docs.meta
          // console.log("doc", docs);

        }
      );
      await Problem.findOneAndUpdate(
        { code: req.body.problemcode },
        {
          $inc: {
            "meta.totalSubmission": 0.5,
            "meta.submissions": verdict,

          },
        },
        null,
        function (err, docs) {
          // console.log(err);
          response.data.problemmeta = docs.meta
          //console.log("docupdated", docs.meta);
          //console.log("jenish", response.data);

        }
      );

      console.log("atyare", response.data);
      res.send(response.data);
    })
    .catch(function (error) {
      console.log(error);
      res.send(error);
    });

  // res.send(" something happend.... ");
});

module.exports = router;
