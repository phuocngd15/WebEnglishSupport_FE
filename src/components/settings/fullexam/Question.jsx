import React, { useState } from 'react';
import { CCol, CFormGroup, CLabel, CRow } from '@coreui/react';

const Question = ({ number }) => {
  const [check, setStateCheck] = useState();
  console.log(check);
  return (
    <CFormGroup row>
      <CCol md='3'>
        <CLabel>{number}.</CLabel>
      </CCol>
      <CCol md='9'>
        <CRow>
          <div className='mr-3'>
            <input
              type='radio'
              className='radio-btn'
              value={number + 'a'}
              checked={check === `${number}a`}
              onClick={() => {
                setStateCheck(`${number}a`);
              }}
            />
            A
          </div>
          <div className='mr-3'>
            <input
              type='radio'
              className='radio-btn'
              value={number + 'b'}
              checked={check === `${number}b`}
              onClick={() => {
                setStateCheck(`${number}b`);
              }}
            />
            B
          </div>
          <div className='mr-3'>
            <input
              type='radio'
              className='radio-btn'
              value={number + 'c'}
              checked={check === `${number}c`}
              onClick={() => {
                setStateCheck(`${number}c`);
              }}
            />
            C
          </div>
          <div className='mr-3'>
            <input
              type='radio'
              className='radio-btn'
              value={'' + number + 'd'}
              checked={check === `${number}d`}
              onClick={() => {
                setStateCheck(`${number}d`);
              }}
            />
            D
          </div>
        </CRow>
      </CCol>
    </CFormGroup>
  );
};

export default Question;
