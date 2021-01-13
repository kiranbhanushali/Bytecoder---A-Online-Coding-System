var express = require('express');
var router = express.Router();
var path = require('path');


router.post('/submit' , (req,res) =>{

    console.log( req.body ) ;
    res.send( " hd");



});

router.post('/upload', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded' });
  }

  const file = req.files.file;

    file.mv(`./public/uploads/${file.name}`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  });
});
module.exports = router;
