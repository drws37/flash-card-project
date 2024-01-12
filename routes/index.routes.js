const router = require('express').Router();

// подключаем один конкретный роут
const RegistrationRouter = require('./registration.routes');
const HomeRouter = require('./home.routes');
const questionRouter = require('./question.router');

// миделварка для одного конкретного роута
router.use('/', RegistrationRouter);
router.use('/home', HomeRouter);
router.use('/question', questionRouter);

module.exports = router;
