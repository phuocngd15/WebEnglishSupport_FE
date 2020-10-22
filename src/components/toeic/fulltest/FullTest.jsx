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
  CCarouselItem
} from '@coreui/react'

import routes from '../../../containers/routes'
import '../../../scss/style.scss'
const slides = [1, 2, 3, 4, 5, 6]

const FullTest = () => {
  return (
    <CContainer>
      <CContainer className="containertoeic">
        <CRow className="row rowtoeic-text m-2">
          <CContainer className="testfullwrap">
            <CCol lg="5" className="testfullwrapinner testfullwrap_one">
              <span className="testfullonetwo testfull-one">TEST FULL</span>
              <span className="testfullonetwo testfull-two">
                LISTENING + READING
              </span>
            </CCol>
            <CCol lg="5" className="testfullwrapinner testfullwrap-two">
              <span className="testfullonetwo testfull-one">
                KIỂM TRA ĐẦY ĐỦ
              </span>
              <span className="testfullonetwo testfull-two">NGHE + ĐỌC</span>
            </CCol>
          </CContainer>
        </CRow>
        <CRow className="row rowtoeic-exam">
          <CCarousel animate autoSlide={2000}>
            <CCarouselInner>
              <CRow>
                <CCarouselItem>
                  <CRow className="inner-carousel">
                    <CCol md="3" className="rowtoeic-exam bg-success m-2 py-5">
                      <CCard borderColor="info">
                        <h3>Đề thi {slides[0]}</h3>
                        <h3>Thời gian: 02h 00m</h3>
                        <h4>Đề thi TOEIC IIG chuẩn ngày 08/10/2020</h4>
                      </CCard>
                    </CCol>
                    <CCol md="3" className="rowtoeic-exam bg-success m-2 py-5">
                      <CCard borderColor="info">
                        <h3>Đề thi {slides[0]}</h3>
                        <h3>Thời gian: 02h 00m</h3>
                        <h4>Đề thi TOEIC IIG chuẩn ngày 08/10/2020</h4>
                      </CCard>
                    </CCol>
                    <CCol md="3" className="rowtoeic-exam bg-success m-2 py-5">
                      <CCard borderColor="info">
                        <h3>Đề thi {slides[0]}</h3>
                        <h3>Thời gian: 02h 00m</h3>
                        <h4>Đề thi TOEIC IIG chuẩn ngày 08/10/2020</h4>
                      </CCard>
                    </CCol>
                  </CRow>
                </CCarouselItem>
                <CCarouselItem>
                  <CRow className="inner-carousel">
                    <CCol md="3" className="rowtoeic-exam bg-success m-2 py-5">
                      <CCard borderColor="info">
                        <h3>Đề thi {slides[1]}</h3>
                        <h3>Thời gian: 02h 00m</h3>
                        <h4>Đề thi TOEIC IIG chuẩn ngày 08/10/2020</h4>
                      </CCard>
                    </CCol>
                    <CCol md="3" className="rowtoeic-exam bg-success m-2 py-5">
                      <CCard borderColor="info">
                        <h3>Đề thi {slides[1]}</h3>
                        <h3>Thời gian: 02h 00m</h3>
                        <h4>Đề thi TOEIC IIG chuẩn ngày 08/10/2020</h4>
                      </CCard>
                    </CCol>
                    <CCol md="3" className="rowtoeic-exam bg-success m-2 py-5">
                      <CCard borderColor="info">
                        <h3>Đề thi {slides[1]}</h3>
                        <h3>Thời gian: 02h 00m</h3>
                        <h4>Đề thi TOEIC IIG chuẩn ngày 08/10/2020</h4>
                      </CCard>
                    </CCol>
                  </CRow>
                </CCarouselItem>
                <CCarouselItem>
                  <CRow className="inner-carousel">
                    <CCol md="3" className="rowtoeic-exam bg-success m-2 py-5">
                      <CCard borderColor="info">
                        <h3>Đề thi {slides[2]}</h3>
                        <h3>Thời gian: 02h 00m</h3>
                        <h4>Đề thi TOEIC IIG chuẩn ngày 08/10/2020</h4>
                      </CCard>
                    </CCol>
                    <CCol md="3" className="rowtoeic-exam bg-success m-2 py-5">
                      <CCard borderColor="info">
                        <h3>Đề thi {slides[2]}</h3>
                        <h3>Thời gian: 02h 00m</h3>
                        <h4>Đề thi TOEIC IIG chuẩn ngày 08/10/2020</h4>
                      </CCard>
                    </CCol>
                    <CCol md="3" className="rowtoeic-exam bg-success m-2 py-5">
                      <CCard borderColor="info">
                        <h3>Đề thi {slides[2]}</h3>
                        <h3>Thời gian: 02h 00m</h3>
                        <h4>Đề thi TOEIC IIG chuẩn ngày 08/10/2020</h4>
                      </CCard>
                    </CCol>
                  </CRow>
                </CCarouselItem>
              </CRow>
            </CCarouselInner>
            <CCarouselControl direction="prev" />
            <CCarouselControl direction="next" />
          </CCarousel>
        </CRow>
      </CContainer>
      <CContainer className>
        <CRow className="row rowtoeic-text m-3">
          <CContainer className="testfullwrap">
            <CCol lg="5" className="testfullwrapinner testfullwrap_one">
              <span className="testfullonetwo testfull-one">TEST FULL</span>
              <span className="testfullonetwo testfull-two">
                LISTENING + READING
              </span>
            </CCol>
            <CCol lg="5" className="testfullwrapinner testfullwrap-two">
              <span className="testfullonetwo testfull-one">
                KIỂM TRA ĐẦY ĐỦ
              </span>
              <span className="testfullonetwo testfull-two">NGHE + ĐỌC</span>
            </CCol>
          </CContainer>
        </CRow>
      </CContainer>
    </CContainer>
  )
}

export default FullTest
