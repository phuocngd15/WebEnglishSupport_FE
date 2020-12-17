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
  const [time, setTime] = useState(false);

  // luu state.dapan
  /*When document gets loaded successfully*/
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }
  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  // counter
  const handleCounter = e => {
    e.preventDefault();
    setTime({ time: true });
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className='doExam-main'>
      <CRow>
        <CCol>
          <div className='doExam-main-intro'>
            <h3>Mark your answer on your answer sheet:</h3>
            <p>
              Please refrain from replaying the audio, you can only listen one
              time when in real exam.
            </p>
            <p>Audio:</p>
            {/* <div className='Pause-Play-Button' onClick={handlePausePlayClick}>
          {isPlay ? (
            <Icon path={mdiPause} title='Pause' size={1} horizontal vertical />
          ) : (
            <Icon
              path={mdiTriangle}
              title='Play'
              size={1}
              horizontal
              vertical
              rotate={270}
            />
          )}
        </div> */}
            <TimeSlider
              axis='x'
              // xmax={duration}
              // x={currentTime}
              // onChange={handleTimeSliderChange}
              styles={{
                track: {
                  backgroundColor: '#e3e3e3',
                  height: '2px'
                },
                active: {
                  backgroundColor: '#333',
                  height: '2px'
                },
                thumb: {
                  marginTop: '-3px',
                  width: '8px',
                  height: '8px',
                  backgroundColor: '#333',
                  borderRadius: 0
                }
              }}
            />
          </div>
        </CCol>
        <CCol md='4'>
          {time ? (
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
                SUBMIT
              </CButton>
            </>
          ) : (
            <CButton
              variant='outline'
              color='success'
              size='lg'
              className='intro-container-btn-start'
              onClick={handleCounter}>
              START
            </CButton>
          )}
        </CCol>
      </CRow>
      <CRow>
        <CCol md='6' sm='12'>
          <Document
            className='doExam-exam'
            file={url}
            onLoadSuccess={onDocumentLoadSuccess}>
            <Page scale={1.2} pageNumber={pageNumber} />

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
        <CCol md='3' sm='12'>
          <div className='answer-sheet'>
            <div className='answer-sheet-header'>LISTENING SECTION</div>
            <CRow>
              <CCol md='3'>
                <Questions />
              </CCol>
              <CCol md='3'>
                <Questions />
              </CCol>
              <CCol md='3'>
                <Questions />
              </CCol>
              <CCol md='3'>
                <Questions />
              </CCol>
            </CRow>
          </div>
        </CCol>
        <CCol md='3' sm='12'>
          <div className='answer-sheet'>
            <div className='answer-sheet-header'>READING SECTION</div>
            <CRow>
              <CCol md='3'>
                <Questions />
              </CCol>
              <CCol md='3'>
                <Questions />
              </CCol>
              <CCol md='3'>
                <Questions />
              </CCol>
              <CCol md='3'>
                <Questions />
              </CCol>
            </CRow>
          </div>
        </CCol>
      </CRow>
    </div>
  );
};

export default DoExam;
