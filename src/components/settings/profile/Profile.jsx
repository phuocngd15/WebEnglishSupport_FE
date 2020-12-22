import React from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CCollapse,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFade,
  CForm,
  CFormGroup,
  CFormText,
  CValidFeedback,
  CInvalidFeedback,
  CTextarea,
  CInput,
  CInputFile,
  CInputCheckbox,
  CInputRadio,
  CInputGroup,
  CInputGroupAppend,
  CInputGroupPrepend,
  CDropdown,
  CInputGroupText,
  CLabel,
  CSelect,
  CRow
} from '@coreui/react';
import CIcon from '@coreui/icons-react';

const Profile = () => {
  return (
    <div>
      <CCol xs='12' sm='5'>
        <CCard>
          <CCardHeader>Thông tin cá nhân</CCardHeader>
          <CCardBody>
            <CFormGroup row className='my-0'>
              <CCol xs='6'>
                <CFormGroup>
                  <CLabel htmlFor='city'>Họ tên</CLabel>
                  <CInput id='city' placeholder='Enter your city' />
                </CFormGroup>
              </CCol>
              <CCol xs='6'>
                <CFormGroup>
                  <CLabel htmlFor='postal-code'>Email</CLabel>
                  <CInput id='postal-code' placeholder='Postal Code' />
                </CFormGroup>
              </CCol>
            </CFormGroup>
            <CFormGroup row className='my-0'>
              <CCol xs='6'>
                <CFormGroup>
                  <CLabel htmlFor='city'>Giói tính</CLabel>
                </CFormGroup>
                <CCol md='8'>
                  <CFormGroup variant='custom-radio' inline>
                    <CInputRadio
                      custom
                      id='inline-nam'
                      name='inline-radios'
                      value='option1'
                    />
                    <CLabel variant='custom-checkbox' htmlFor='inline-nam'>
                      Nam
                    </CLabel>
                  </CFormGroup>
                  <CFormGroup variant='custom-radio' inline>
                    <CInputRadio
                      custom
                      id='inline-nu'
                      name='inline-radios'
                      value='option2'
                    />
                    <CLabel variant='custom-checkbox' htmlFor='inline-nu'>
                      Nữ
                    </CLabel>
                  </CFormGroup>
                </CCol>
              </CCol>
              <CCol xs='6'>
                <CFormGroup>
                  <CLabel htmlFor='postal-code'> Mật khẩu</CLabel>
                  <CInput id='postal-code' placeholder='Postal Code' />
                </CFormGroup>
              </CCol>
            </CFormGroup>
            <CFormGroup row className='my-0'>
              <CCol xs='6'>
                <CFormGroup>
                  <CLabel htmlFor='city'>Số điện thoại</CLabel>
                  <CInput id='city' placeholder='Enter your city' />
                </CFormGroup>
              </CCol>
              <CCol xs='6'>
                <CFormGroup>
                  <CLabel htmlFor='postal-code'>Level</CLabel>
                  <CInput id='postal-code' placeholder='Postal Code' />
                </CFormGroup>
              </CCol>
            </CFormGroup>
            <CFormGroup row className='my-0'>
              <CCol xs='6'>
                <CFormGroup>
                  <CLabel htmlFor='city'>Ngày đăng ký</CLabel>
                  <CInput id='city' placeholder='Enter your city' />
                </CFormGroup>
              </CCol>
            </CFormGroup>
          </CCardBody>
        </CCard>
      </CCol>
    </div>
  );
};

export default Profile;
