const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/', (req, res, next) => {
  res.render('editor', {title: 'Latex Editor'});
});

router.post('/', (req, res, next) => {
  var obj = {}; 
  //console.log('body: ' + JSON.stringify(req.body.msg));
  jsonData = JSON.stringify(req.body.msg);
  var arr = jsonData.split(/\r\n|\\n/);
  console.log(arr);
  for (var i = 0; i < arr.length; i++){
    console.log(arr[i]);
  }
  fs.writeFileSync('sample.tex', arr);
  //fs.writeFileSync('sample.txt', JSON.stringify(req.body.msg));
  var rejson = JSON.stringify(req.body);
  res.send(rejson);
});

module.exports = router;
