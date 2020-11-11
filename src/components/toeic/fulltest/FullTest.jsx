import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CContainer,
  CCarousel,
  CCarouselCaption,
  CCarouselControl,
  CCarouselIndicators,
  CCarouselInner,
  CCarouselItem,
  CNav,
  CNavItem,
  CNavLink
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import routes from '../../../containers/routes'
import '../../../scss/style.scss'
const slides = [1, 2, 3, 4, 5, 6]

const FullTest = () => {
  return (
    <CContainer className="body">
      <CContainer className="advertisement bg-primary mx-auto">
        <CRow>
          <CCol md lg="7" className="ads">
            THI THỬ TOEIC <br />
            ĐỀ THI THẬT 2020
          </CCol>
          <CCol md lg="5" >
            <img 
              thumbnail
              src="image/Capture.JPG"
              alt="advertise 1"
              loading="lazy"
              align="left"
            />
          </CCol>
        </CRow>
      </CContainer>
      <CContainer className="fulltest">
        <h2>
          Full Test - Thi thử đề thật{' '}
          <CIcon name="cil-bell" className="mfe-2" /> Thời lượng: 120 phút
        </h2>
        <CRow>
          <CCol lg="4">
            <ul>
              <li>
                <a href="#">&gt; Thi thử TOEIC 2020 - Đề 10</a>
              </li>
              <li>
                <a href="#">&gt; Thi thử TOEIC 2020 - Đề 8</a>
              </li>
              <li>
                <a href="#">&gt; Thi thử TOEIC 2020 - Đề 6</a>
              </li>
              <li>
                <a href="#">&gt; Thi thử TOEIC 2020 - Đề 4</a>
              </li>
              <li>
                <a href="#">&gt; Thi thử TOEIC 2020 - Đề 1</a>
              </li>
              <li>
                <a href="#">&gt; Thi thử TOEIC 2020 - Đề 3</a>
              </li>
            </ul>
          </CCol>
          <CCol lg="4">
            <ul>
              <li>
                <a href="#">&gt; Thi thử TOEIC 2020 - Đề 10</a>
              </li>
              <li>
                <a href="#">&gt; Thi thử TOEIC 2020 - Đề 10</a>
              </li>
              <li>
                <a href="#">&gt; Thi thử TOEIC 2020 - Đề 10</a>
              </li>
              <li>
                <a href="#">&gt; Thi thử TOEIC 2020 - Đề 10</a>
              </li>
              <li>
                <a href="#">&gt; Thi thử TOEIC 2020 - Đề 10</a>
              </li>
              <li>
                <a href="#">&gt; Thi thử TOEIC 2020 - Đề 10</a>
              </li>
            </ul>
          </CCol>
          <CCol lg="4">
            <ul>
              <li>
                <a href="#">&gt; Thi thử TOEIC 2020 - Đề 10</a>
              </li>
              <li>
                <a href="#">&gt; Thi thử TOEIC 2020 - Đề 10</a>
              </li>
              <li>
                <a href="#">&gt; Thi thử TOEIC 2020 - Đề 10</a>
              </li>
              <li>
                <a href="#">&gt; Thi thử TOEIC 2020 - Đề 10</a>
              </li>
              <li>
                <a href="#">&gt; Thi thử TOEIC 2020 - Đề 10</a>
              </li>
              <li>
                <a href="#">&gt; Thi thử TOEIC 2020 - Đề 10</a>
              </li>
            </ul>
          </CCol>
        </CRow>
      </CContainer>
    </CContainer>
  )
}

export default FullTest
