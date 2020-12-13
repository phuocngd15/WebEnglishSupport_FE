import React, { useState } from 'react';
import {
  CCol,
  CFormGroup,
  CInput,
  CInputRadio,
  CLabel,
  CRow
} from '@coreui/react';

const Question = ({ number }) => {
  const [check, setStateCheck] = useState();

  const onChangeRadio = e => {
    setStateCheck({ check: e.target.value });
  };
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
              value={'option-' + number + 'a'}
              checked={check === `option-${number}a`}
              onClick={() => {
                setStateCheck(`option-${number}a`);
              }}
            />
            <CLabel>A</CLabel>
          </div>
          <div className='mr-3'>
            <input
              type='radio'
              className='radio-btn'
              value={'option-' + number + 'b'}
              checked={check === `option-${number}b`}
              onClick={() => {
                setStateCheck(`option-${number}b`);
              }}
            />
            B
          </div>
          <div className='mr-3'>
            <input
              type='radio'
              className='radio-btn'
              value={'option-' + number + 'c'}
              checked={check === `option-${number}c`}
              onClick={() => {
                setStateCheck(`option-${number}c`);
              }}
            />
            C
          </div>
          <div className='mr-3'>
            <input
              type='radio'
              className='radio-btn'
              value={'option-' + number + 'd'}
              checked={check === `option-${number}d`}
              onClick={() => {
                setStateCheck(`option-${number}d`);
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
