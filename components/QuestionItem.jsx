const React = require('react');

function QuestionItem({ question }) {
  return (
    <div
      className='card'
      data-id={question.id}
      style={{ width: '18rem', margin: '20px' }}
    >
      <form id='answer-form'>
        <div className='mb-3'>
          <img src={question.question_image} alt='' />
          <label htmlFor='exampleInputEmail1' className='form-label'>
            {question.question}
          </label>
          <input answer='answer' />
        </div>
        <button className='btn btn-primary' type='submit'>
          ответ
        </button>
      </form>
    </div>
  );
}
module.exports = QuestionItem;
