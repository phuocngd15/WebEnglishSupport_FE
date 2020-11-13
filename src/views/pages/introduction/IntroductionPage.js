import React from 'react'
import {
  CButton,
  CCol,
  CContainer,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupAppend,
  CInputGroupText,
  CRow,
  CImg

} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const IntroductionPage = () => {
  return (
    <div className="c-app c-default-layout flex-row align-items-center introduction-page-container">
      <div className='introduction-page-modal'>
        <div className='introduction-page-header'>
          <div>Toeic so easy!</div>
        </div>
        <div className='introduction-page-footer'>
          {/* <button class="btn draw-border">Đăng nhập</button>
          <button class="btn draw-border">Đăng kí</button> */}
          <div class="button" id="button-1">
            <div id="slide"></div>
            <div href="#">Login</div>
          </div>
          <div class="button" id="button-2">
            <div id="slide"></div>
            <div href="#">Register</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IntroductionPage
