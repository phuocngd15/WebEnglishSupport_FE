import { CCol, CRow, CButton } from '@coreui/react';
import React, { useState, useRef } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import rc from './LC.pdf';
import Questions from './Questions';
import { mdiTriangle } from '@mdi/js';
import Icon from '@mdi/react';
import { mdiPause } from '@mdi/js';
import audio from './TEST 01.mp3';
import useSound from 'use-sound';
import TimeSlider from 'react-input-slider';
import Countdown from 'react-countdown';

const DoExam = () => {
  // pdf
  const url = rc;
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }
  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    window.scrollTo(180, 180);
    changePage(-1);
  }

  function nextPage() {
    window.scrollTo(180, 180);
    changePage(1);
  }

  return (
    <div className='doExam-main'>
      <CRow>
        <CCol md='6' sm='12' className='exam'>
          <Document
            className='doExam-exam'
            file={url}
            onLoadSuccess={onDocumentLoadSuccess}>
          
            <Page scale={1.2} pageNumber={pageNumber} height={800} />

            <div>
              <div className='pagec'>
                Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
              </div>

              <div className='button'>
                <button
                  type='button'
                  disabled={pageNumber <= 1}
                  onClick={previousPage}
                  className='Pre mr-2'>
                  <Icon
                    path={mdiTriangle}
                    title='Previous'
                    size={1}
                    horizontal
                    vertical
                    rotate={90}
                  />
                </button>
                <button
                  type='button'
                  disabled={pageNumber >= numPages}
                  onClick={nextPage}>
                  <Icon
                    path={mdiTriangle}
                    title='Next page'
                    size={1}
                    horizontal
                    vertical
                    rotate={270}
                  />
                </button>
              </div>
            </div>
          </Document>
        </CCol>
        <CCol md='6' sm='12'>
          <div className='doExam-main-intro'>
            <h3>Mark your answer on your answer sheet</h3>
            <div><OClock /></div>
          </div>
          <AnswerSheet />
        </CCol>
      </CRow>
    </div>
  );
};

const AnswerSheet = () => {
  return (
    <CRow>
      <CCol md='6' sm='12'>
        <div className='answer-sheet'>
          <div className='answer-sheet-header'>LISTENING SECTION</div>
          <CRow className='answer-sheet-column'>
            <CCol md='3' sm='3'>
              <Questions fromIndex='1' toIndex='25' />
            </CCol>
            <CCol md='3' sm='3'>
              <Questions fromIndex='26' toIndex='50' />
            </CCol>
            <CCol md='3' sm='3'>
              <Questions fromIndex='51' toIndex='75' />
            </CCol>
            <CCol md='3' sm='3'>
              <Questions fromIndex='76' toIndex='100' />
            </CCol>
          </CRow>
        </div>
      </CCol>
      <CCol md='6' sm='12'>
        <div className='answer-sheet'>
          <div className='answer-sheet-header'>READING SECTION</div>
          <CRow className='answer-sheet-column'>
            <CCol md='3' sm='3'>
              <Questions fromIndex='101' toIndex='125' />
            </CCol>
            <CCol md='3' sm='3'>
              <Questions fromIndex='126' toIndex='150' />
            </CCol>
            <CCol md='3' sm='3'>
              <Questions fromIndex='151' toIndex='175' />
            </CCol>
            <CCol md='3' sm='3'>
              <Questions fromIndex='176' toIndex='200' />
            </CCol>
          </CRow>
        </div>
      </CCol>
    </CRow>
  );
};
const OClock = () => {
  const [isStart, setIsStart] = useState(false);
  const handleSubmit = () => {
    setIsStart(false);
  };
  const renderBtn = isStart => {
    const btn = isStart ? (
      <>
        <Countdown
          className='doExam-main-counter'
          date={Date.now() + 7200000}
        />
        <CButton
          variant='outline'
          color='danger'
          size='lg'
          className='intro-container-btn-start'
          onClick={handleSubmit}>
          Nộp bài
        </CButton>
      </>
    ) : (
      <CButton
        variant='outline'
        color='success'
        size='lg'
        className='intro-container-btn-start'
        onClick={() => setIsStart(true)}>
        Bắt đầu
      </CButton>
    );
    return btn;
  };
  return <>{renderBtn(isStart)}</>;
};
export default DoExam;
