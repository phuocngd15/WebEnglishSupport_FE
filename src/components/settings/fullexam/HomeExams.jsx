import React, { Fragment, useEffect, useState } from 'react';
import { CCol, CRow, CContainer, CLink } from '@coreui/react';
import { mdiClockAlertOutline } from '@mdi/js';
import Icon from '@mdi/react';
import {
  getExamRequest,
  getExamsRequest
} from '../../../Store/slice/examSlide';
import { Link, Redirect } from 'react-router-dom';
import Exam from './Exam';
import { useDispatch, useSelector } from 'react-redux';
import Axios from 'axios';

const HomeExams = () => {
  const [listFullExam, setListFullExam] = useState([]);
  const [listMiniExam, setListMiniExam] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const response = await Axios.get('http://localhost:9999/api/fullexam/');
      if (!cancelled) {
        // const { data } = response;
        // setListExam(data);
        setListFullExam([
          { _id: '123456', title: 'Đề thi số 1' },
          { _id: '123456', title: 'Đề thi số 2' },
          { _id: '123456', title: 'Đề thi số 3' }
        ]);
        setListMiniExam([
          { _id: '123456', title: 'Đề thi số 1' },
          { _id: '123456', title: 'Đề thi số 2' }
        ]);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);
  return (
    <>
      <div className='fullTest-page'>
        <div className='fullTest-header '>
          <CRow>
            <CCol lg='7' className='fullTest-header-subject'>
              <div>Practice makes perfect</div>
            </CCol>
            <CCol md lg='5'>
              <img
                src='image/Capture.JPG'
                alt='advertise 1'
                loading='lazy'
                align='left'
                className='fullTest-image'
              />
            </CCol>
          </CRow>
        </div>
      </div>
    </>
  );
};

export default HomeExams;
