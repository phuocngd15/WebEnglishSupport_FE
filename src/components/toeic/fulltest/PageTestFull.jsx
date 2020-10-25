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

const PageTestFull = () => {
  return (
    <CContainer>
      <CRow>
        <div className="rounded-lg border-dark p-4">
          <h3>
            Đề thi TOEIC chuẩn IIG ngày
            <br />
            08/10/2020
          </h3>
        </div>
      </CRow>
      <CRow>
        <h2>Thời gian</h2>
        <h2 className="rounded-circle border-dark py-3 px-3">02 h</h2>
        <h2 className="rounded-circle border-primary py-3 px-3">00 m</h2>
        <h2 className="rounded-circle border-danger py-3 px-3">00 s</h2>
        <button type="submit" className="rounded-lg bg-primary">
          BẮT ĐẦU THI
        </button>
      </CRow>
      <CContainer>
        <CRow>
          <CCol className="col-8 bg-success border-dark">
            <CRow>
              <CCol className="border-dark">
                <h1>col1</h1>
              </CCol>
              <CCol className="border-dark">
                <h1>col1</h1>
              </CCol>
              <CCol className="border-dark">
                <h1>col1</h1>
              </CCol>
              <CCol className="border-dark">
                <h1>col1</h1>
              </CCol>
              <CCol className="border-dark">
                <h1>col1</h1>
              </CCol>
              <CCol className="border-dark">
                <h1>col1</h1>
              </CCol>
              <CCol className="border-dark">
                <h1>col1</h1>
              </CCol>
            </CRow>
          </CCol>
          <CCol className="col-4 bg-danger border-dark">
            <h1>Câu trả lời</h1>
            <div className="bg-primary">
            </div>
            <p>: Câu đã trả lời</p>
            <p>: Câu chưa trả lời</p>

          </CCol>
        </CRow>
      </CContainer>
    </CContainer>
  )
}

export default PageTestFull
