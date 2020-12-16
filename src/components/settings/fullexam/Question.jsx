import React, { useState } from 'react';
import { CCol, CFormGroup, CLabel, CRow } from '@coreui/react';
import { cloneDeep } from 'lodash';
import { useDispatch } from 'react-redux';
import { chooseAnswer } from '../../../Store/slice/doExamSlice';

const Question = props => {
  const { onClickAnswer, stt } = props;
  const dispatch = useDispatch();
  const [answer, setAnswer] = useState([
    { id: 1, isChose: false },
    { id: 2, isChose: false },
    { id: 3, isChose: false },
    { id: 4, isChose: false }
  ]);

  const handleChoose = id => {
    let newState = cloneDeep(answer);
    newState.forEach(item => {
      if (item.id === id) {
        item.isChose = true;
      } else {
        item.isChose = false;
      }
    });
    dispatch(chooseAnswer({ stt: stt, dapAn: id }));
    setAnswer(newState);
  };

  const buildAnswerRow = answer => {
    console.log('answer', answer);
    const answerHTML = answer.map(item => {
      return (
        <input
          key={item.id}
          type='radio'
          className={`answer-${item.id}`}
          checked={item.isChose}
          onClick={() => handleChoose(item.id)}
        />
      );
    });
    return answerHTML;
  };
  return (
    <div className='answer-row'>
      <div>{stt}</div>
      {buildAnswerRow(answer)}
    </div>
  );
};

export default Question;
