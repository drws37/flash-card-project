const router = require('express').Router();
const { Theme, Question } = require('../db/models');
const HomePage = require('../components/HomePage');

router.get('/', async (req, res) => {
  try {
    const themeArray = await Theme.findAll();
    const html = res.renderComponent(HomePage, {
      title: 'StartGame',
      themeList: themeArray,
    });
    res.send(html);
  } catch ({ message }) {
    res.send({ message });
  }
});

router.get('/:paramId', async (req, res) => {
  try {
    const { paramId } = req.params;
    const questionArray = await Question.findAll({
      where: { theme_id: paramId },
    });
    console.log(questionArray);
    res.send(questionArray);
  } catch ({ message }) {
    console.log({ message });
  }
});

module.exports = router;
