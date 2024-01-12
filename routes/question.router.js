const router = require('express').Router();
const Questions = require('../components/Question');
const { Question } = require('../db/models');

router.get('/:index/:theme_id', async (req, res) => {
  try {
    const { index, theme_id } = req.params;
    // const { user } = res.locals;
    console.log(index, theme_id);
    const questions = await Question.findAll({ where: { theme_id } });
    console.log(questions[index], '-------------');
    if (questions[index]) {
      const html = res.renderComponent(Questions, {
        question: questions[index],
        index: Number(index) + 1,
      });
      res.send(html);
    } else {
      res.redirect('/home');
    }
  } catch (error) {
    console.log(error.message);
  }
});
module.exports = router;
