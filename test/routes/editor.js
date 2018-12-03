const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/', (req, res, next) => {
  res.render('editor', {title: 'Latex Editor'});
});

router.post('/', (req, res, next) => {
  var obj = {}; 
  jsonData = JSON.stringify(req.body.msg);
  var arr = jsonData.split(/\\n/);
  for (var i = 0; i < arr.length; i++){
    console.log(arr[i]);
    fs.appendFileSync('sample.tex', arr[i] + '\n', function (err) {
      console.log(err);
    });
  }
  var rejson = JSON.stringify(req.body);
  res.send(rejson);
});

module.exports = router;
