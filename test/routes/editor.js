const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/', (req, res, next) => {
  res.render('editor', {title: 'Latex Editor'});
});

router.post('/', (req, res, next) => {
  jsonData = JSON.stringify(req.body.msg).slice(1, -1);
  //jsonを受け取り、文頭・文末の「"」を削除する
  var arr = jsonData.split(/\\n/);//改行で分割し、配列に格納する
  for (var i = 0; i < arr.length; i++){
    console.log(arr[i]);
    arr[i] = arr[i].replace(/\\\\/g, '\\');
    fs.appendFileSync('sample.tex', arr[i] + '\n', function (err) {
      console.log(err);
    });
  }
  res.send(jsonData);
});

module.exports = router;
