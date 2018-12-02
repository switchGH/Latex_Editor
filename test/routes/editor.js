const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('editor', {title: 'Latex Editor'});
});

router.post('/', (req, res, next) => {
  var obj = {}; 
  console.log('body: ' + JSON.stringify(req.body.msg));
  var rejson = JSON.stringify(req.body);
  res.send(rejson);
});

module.exports = router;
