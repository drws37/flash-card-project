const React = require('react');
const Layout = require('./Layout');

function Question({ question, user, index }) {
  return (
    <Layout user={user}>
      <div>
        <img src={question.question_image} alt='' />
        <div>
          <h2>{question.question}</h2>
        </div>
        <div>
          <h5>{question.name}</h5>
        </div>
      </div>
      <form className='form-answer' data-id={question.id}>
        <div>
          Введите ответ
          <input
            type='text'
            className='form-control'
            id='exampleInputPassword1'
            name='answer'
          />
          <button type='submit'>Ответить</button>
        </div>
      </form>
      <div className='answer' />
      <a href={`/question/${index}/${question.theme_id}`}>
        Следующий вопрос
      </a>
    </Layout>
  );
}
module.exports = Question;
