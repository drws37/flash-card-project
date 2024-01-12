const router = require('express').Router();

// подключаем один конкретный роут
const RegistrationRouter = require('./registration.routes');
const HomeRouter = require('./home.routes');

// миделварка для одного конкретного роута
router.use('/', RegistrationRouter);
router.use('/home', HomeRouter);

module.exports = router;
