import React, { useState } from 'react';
import { CCol, CFormGroup, CInputRadio, CLabel } from '@coreui/react';
import Question from './Question';
const Questions = ({ pageNumber, numPages, res }) => {
  const [result, setResult] = useState(res);
  let group = [];
  let index = 0;
  let part = 1;
  for (var i = 0; i < numPages - 3; i++) {
    group.push(i + 1);
    group[i] = [];
  }
  var j = 1;
  let length = [6, 25, 12, 12, 9, 6, 12, 12, 6];
  for (var i = 0; i < length.length; i++) {
    for (var k = 0; k < length[i]; k++) {
      group[i].push(j);
      j++;
    }
  }
  switch (pageNumber) {
    case 5:
      part = 2;
      index = 1;
      break;
    case 6:
      part = 3;
      index = 2;
      break;
    case 7:
      part = 3;
      index = 3;
      break;
    case 8:
      part = 3;
      index = 4;
      break;
    case 9:
      part = 3;
      index = 5;
      break;
    case 10:
      part = 4;
      index = 6;
      break;
    case 11:
      part = 4;
      index = 7;
      break;
    case 12:
      part = 4;
      index = 8;
      break;
  }
  return (
    <>
      <h1>Part {part}</h1>
      {pageNumber ? (
        group[index].map(question => <Question number={question} />)
      ) : (
        <h1>Loading</h1>
      )}
    </>
  );
};

export default Questions;
