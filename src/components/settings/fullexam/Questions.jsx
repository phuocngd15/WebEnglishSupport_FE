import React from 'react';
import Question from './Question';
const Questions = props => {
  const { numberAnswer = 25 } = props;
  const buildAnswerSheet = numberAnswer => {
    let answers = [];
    let counter = numberAnswer;
    while (counter > 0) {
      answers.unshift(<Question stt={counter} />);
      counter--;
    }
    console.log(answers);
    return answers;
  };
  return (
    <div className='answer-column'>
      <div className='answer-row'>
        <span className='answer-a'>A</span>
        <span className='answer-b'>B</span>
        <span className='answer-c'>C</span>
        <span className='answer-d'>D</span>
      </div>
      {buildAnswerSheet(numberAnswer)}
    </div>
  );
};

export default Questions;
