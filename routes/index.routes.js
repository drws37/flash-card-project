const router = require('express').Router();

// подключаем один конкретный роут
const HomeRouter = require('./home.routes');

// миделварка для одного конкретного роута
router.use('/home', HomeRouter);

module.exports = router;
