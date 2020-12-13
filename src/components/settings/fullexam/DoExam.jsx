import { CCol, CRow, CFormGroup, CInputRadio, CLabel } from '@coreui/react'
import React, { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import rc from './LC.pdf'
import Question from './Question'
const DoExam = () => {
  const url = rc
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  /*To Prevent right click on screen*/
  //   document.addEventListener('contextmenu', event => {
  //     event.preventDefault()
  //   })
  /*When document gets loaded successfully*/
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
    setPageNumber(1)
  }
  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset)
  }

  function previousPage() {
    changePage(-1)
  }

  function nextPage() {
    changePage(1)
  }

  return (
    <div className="doExam-main">
      <CRow>
        <CCol lg="8">
          <Document
            className="doExam-exam"
            file={url}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} />
          </Document>
          <div>
            <div className="pagec">
              Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
            </div>
            <div className="button">
              <button
                type="button"
                disabled={pageNumber <= 1}
                onClick={previousPage}
                className="Pre"
              >
                Previous
              </button>
              <button
                type="button"
                disabled={pageNumber >= numPages}
                onClick={nextPage}
              >
                Next  
              </button>
            </div>
          </div>
        </CCol>
        <CCol md="4" className="doExam-question">
          {numPages ? (
            <Question pageNumber={pageNumber} numPages={numPages} />
          ) : (
            <h1>Loading</h1>
          )}
        </CCol>
      </CRow>
    </div>
  )
}

export default DoExam
