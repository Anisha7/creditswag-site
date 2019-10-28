var express = require('express');
var router = express.Router();

// Example Route
router.get('/', (req, res) => {
  res.json("Hello World")
});

module.exports = router;
