const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('1');
});

module.exports = router;
