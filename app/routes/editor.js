const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('editor', {title: 'Latex Editor'});
});

module.exports = router;
