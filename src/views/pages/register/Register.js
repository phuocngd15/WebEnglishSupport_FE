import React, { useRef } from 'react';
import { validate } from 'email-validator';

import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
  CCardHeader,
  CCardFooter
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { useDispatch } from 'react-redux';
import useEncrypt from '../../../components/hook/useEncrypt';
import { signupRequest } from '../../../Store/slice/authenticationSlice';
import { axiosPost } from '../../../axios/axios';
import { useHistory } from 'react-router-dom';
import { getValueRef } from '../../../share/func';
const Register = () => {
  const [mahoa] = useEncrypt();
  const dispatch = useDispatch();
  const history = useHistory();
  let usernameRef = useRef();
  let emailRef = useRef();
  let passRef = useRef();

  const handelCreateAccount = async () => {
    const filterModel = {
      fullname: mahoa(getValueRef(usernameRef)),
      email: mahoa(getValueRef(emailRef)),
      password: mahoa(getValueRef(passRef)),
      url: 'http://localhost:9999/signup'
    };
    const isCall =
      filterModel.fullname && filterModel.email && filterModel.password;
    const res = isCall && (await axiosPost(filterModel));
    if (res) {
      history.push('/login');
    }
  };
  return (
    <div className='c-app c-default-layout flex-row align-items-center'>
      <CContainer>
        <CRow className='justify-content-center'>
          <CCol md='7' lg='5' xl='4'>
            <CCard className='p-4'>
              <CCardHeader className='ccardheader'>
                <h2>Register</h2>
                <p>Create your account</p>
              </CCardHeader>
              <CCardBody>
                <CForm>
                  <CInputGroup className='mb-3'>
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name='cil-user' />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <input
                      ref={usernameRef}
                      type='text'
                      placeholder='Fullname'
                      required
                    />
                  </CInputGroup>
                  <CInputGroup className='mb-3'>
                    <CInputGroupPrepend>
                      <CInputGroupText>@</CInputGroupText>
                    </CInputGroupPrepend>
                    <input
                      ref={emailRef}
                      type='email'
                      className='email_input'
                      placeholder='Email'
                      autoComplete='email'
                      required
                    />
                  </CInputGroup>
                  <CInputGroup className='mb-3'>
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name='cil-lock-locked' />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <input
                      ref={passRef}
                      type='password'
                      placeholder='Password'
                      autoComplete='new-password'
                      required
                    />
                  </CInputGroup>
                  <div className='login-footer'>
                    <CButton
                      color='success'
                      block
                      onClick={handelCreateAccount}>
                      Create Account
                    </CButton>
                  </div>
                  {/* <CContainer className='create-food-content'>
                    <CRow className='field'>
                      <CCol lg='10'>
                        <CRow>
                          <CCol lg='5' className='pt-2'>
                            Tên món ăn
                          </CCol>
                          <CCol>
                            <input
                              type='text'
                              placeholder='Nhập tên thức ăn'
                              className='inp'
                              style={{ width: '100%' }}
                              required
                            />
                          </CCol>
                        </CRow>
                      </CCol>
                    </CRow>
                    <CRow className='field'>
                      <CCol lg='10'>
                        <CRow>
                          <CCol lg='5' className='pt-2'>
                            Giá vốn
                          </CCol>
                          <CCol>
                            <input
                              type='text'
                              placeholder='Nhập giá vốn'
                              className='inp'
                              style={{ width: '100%' }}
                              required
                            />
                          </CCol>
                        </CRow>
                      </CCol>
                    </CRow>
                    <CRow className='field'>
                      <CCol lg='10'>
                        <CRow>
                          <CCol lg='5' className='pt-2'>
                            Giá bán
                          </CCol>
                          <CCol>
                            <input
                              type='text'
                              placeholder='Nhập giá bán'
                              className='inp'
                              style={{ width: '100%' }}
                              required
                            />
                          </CCol>
                        </CRow>
                      </CCol>
                    </CRow>
                  </CContainer> */}
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Register;
