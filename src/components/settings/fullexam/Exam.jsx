import React, { Fragment, useEffect, useState } from 'react';
import { CLink } from '@coreui/react';
import { useDispatch, useSelector } from 'react-redux';
import { getExamRequest } from '../../../Store/slice/examSlide';
import { useHistory } from 'react-router-dom';

const Exam = props => {
  const { _id, title, type } = props;
  return (
    <div className='container'>
      <tr className='exam-page'>
        <td>
          <li>
            <CLink to={'/BauDauThi/' + _id} key={_id}>
              {title} {type}
            </CLink>
          </li>
        </td>
      </tr>
    </div>
  );
};

export default Exam;
