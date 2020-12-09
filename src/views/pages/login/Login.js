import React, { useRef } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { signinRequest } from '../../../Store/slice/authenticationSlice'
import { getExamsRequest } from '../../../Store/slice/examSlide'

import useEncrypt from '../../../components/hook/useEncrypt'

const Login = () => {
  const dispatch = useDispatch()
  const { isloggedIn, messageLog } = useSelector(state => state.authentication)
  const usernameRef = useRef(null)
  const passRef = useRef(null)
  const [mahoa] = useEncrypt()

  const handelLogin = e => {
    e.preventDefault()
    // truc
    // const usernameEncrypted = mahoa(usernameRef.current.value)
    // const passEncrypted = mahoa(passRef.current.value)
    const usernameEncrypted = mahoa('truc@gmail.com')
    const passEncrypted = mahoa('123456')

    let filterModel = {
      email: usernameEncrypted,
      password: passEncrypted,
      url: 'http://localhost:9999/signin'
    }
    dispatch(signinRequest(filterModel))
   
  }
  if (isloggedIn) return <Redirect to="/" />

  return (
    <>
      {messageLog && <div>{messageLog}</div>}
      <div className="c-app c-default-layout flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md="8">
              <CCardGroup>
                <CCard className="p-4">
                  <CCardBody>
                    <CForm>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-user" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <input
                          type="text"
                          // ref={usernameRef}
                          value="truc@gmail.com"
                          placeholder="Username"
                          autoComplete="username"
                        />
                      </CInputGroup>
                      <CInputGroup className="mb-4">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-lock-locked" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <input
                          type="password"
                          // ref={passRef}
                          value="123456"
                          placeholder="Password"
                          autoComplete="current-password"
                        />
                      </CInputGroup>
                      <CRow>
                        <CCol xs="6">
                          <CButton
                            onClick={e => handelLogin(e)}
                            color="primary"
                            className="px-4"
                          >
                            Login
                          </CButton>
                        </CCol>
                        <CCol xs="6" className="text-right">
                          <CButton color="link" className="px-0">
                            Forgot password?
                          </CButton>
                        </CCol>
                      </CRow>
                    </CForm>
                  </CCardBody>
                </CCard>
                <CCard
                  className="text-white bg-primary py-5 d-md-down-none"
                  style={{ width: '44%' }}
                >
                  <CCardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      </p>
                      <Link to="/register">
                        <CButton
                          color="primary"
                          className="mt-3"
                          active
                          tabIndex={-1}
                        >
                          Register Now!
                        </CButton>
                      </Link>
                    </div>
                  </CCardBody>
                </CCard>
              </CCardGroup>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    </>
  )
}

export default Login
