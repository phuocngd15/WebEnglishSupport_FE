import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useParams, useHistory } from 'react-router-dom';
import { CButton, CContainer, CLink } from '@coreui/react';
import { getGGExam } from '../../../Store/slice/doExamSlice';

const Intro = () => {
  let id = useParams();

  const { isLogin } = useSelector(state => state.authentication);
  const [islogin, setIsLogin] = useState(isLogin);
  const dispatch = useDispatch();
  //old
  /*   const filterModel = {
    url: `http://localhost:9999/api/fullexam/${id.id}`
  }; */
  const filterModel = {
    url: `http://localhost:9999/api/uploadFile/getOne`,
    id: `1TuI1WgsC9XmWj4PBSSXVoohdSg1bT3i4`
  };
  useEffect(() => {
    if (islogin) {
      dispatch(getGGExam(filterModel));
    }
  }, [dispatch, filterModel, islogin]);
  //let exam = useSelector(state => state.exam).exam;

  return (
    <CContainer className='intro-container'>
      <h1>Test Number 9 - ETS 2020 </h1>
      <h4>Total time: 120 minutes</h4>
      <ul>
        <li>Listening: 45 minutes</li>
        <li>Reading: 75 minutes</li>
      </ul>
      <CButton
        variant='outline'
        color='success'
        size='lg'
        className='intro-container-btn-start'>
        <CLink to='/doExam'>START</CLink>
      </CButton>
    </CContainer>
  );
};

export default Intro;
