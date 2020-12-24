import React, { Fragment, useEffect, useState } from 'react';
import { CLink } from '@coreui/react';
import { useDispatch, useSelector } from 'react-redux';
import { getExamRequest } from '../../../Store/slice/examSlide';
import { useHistory } from 'react-router-dom';

const Exam = props => {
  const { _id, title } = props;
  return (
    <div className='container'>
      <tr className='exam-page'>
        <td>
          <li>
            <CLink to={'/BauDauThi/' + _id} key={_id}>
              Thi thử TOEIC 2020 - {title}
            </CLink>
          </li>
        </td>
      </tr>
    </div>
  );
};

export default Exam;
