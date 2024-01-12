const { User } = require('../db/models');

async function getUser(req, res, next) {
  const user = await User.findOne({
    order: [['id', 'DESC']],
    attributes: ['name', 'scores'],
  });
  res.locals.user = user;
  next();
}

module.exports = getUser;
