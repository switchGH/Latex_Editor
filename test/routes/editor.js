const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/', (req, res, next) => {
  res.render('editor', {title: 'Latex Editor'});
});

router.post('/', (req, res, next) => {
  jsonData = JSON.stringify(req.body.msg).slice(1, -1);
  
  console.log(jsonData);
  var arr = jsonData.split(/\\n/);
  for (var i = 0; i < arr.length; i++){
    console.log(arr[i]);
    arr[i] = arr[i].replace(/\\\\/g, '\\');
    fs.appendFileSync('sample.tex', arr[i] + '\n', function (err) {
      console.log(err);
    });
  }
  // jsonData = JSON.parse(req.body.msg);
  // // jsonDataにユーザーが入力した文字列が入っている
  // console.log(jsonData);

  // fs.writeFileSync('sample.tex', jsonData, function (err) {
  //   console.log(err);
  // });
  var rejson = JSON.stringify(req.body);
  res.send(rejson);
});

module.exports = router;
