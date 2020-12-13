import React from 'react'
import { CCol, CFormGroup, CInputRadio, CLabel } from '@coreui/react'

const Question = ({ pageNumber, numPages }) => {
  let group = []
  let index = 0
  let part = 1
  for (var i = 0; i < numPages - 3; i++) {
    group.push(i + 1)
    group[i] = []
  }
  var j = 1
  let length = [6, 25, 12, 12, 9, 6, 12, 12, 6]
  for (var i = 0; i < length.length; i++) {
    for (var k = 0; k < length[i]; k++) {
      group[i].push(j)
      j++
    }
  }
  console.log(pageNumber)
  switch (pageNumber) {
    case 5:
      part = 2
      index = 1
      break
    case 6:
      part = 3
      index = 2
      break
    case 7:
      part = 3
      index = 3
      break
    case 8:
      part = 3
      index = 4
      break
    case 9:
      part = 3
      index = 5
      break
    case 10:
      part = 4
      index = 6
      break
    case 11:
      part = 4
      index = 7
      break
    case 12:
      part = 4
      index = 8
      break
  }
  return (
    <>
      <h1>Part {part}</h1>
      <CFormGroup row>
        {pageNumber ? (
          group[index].map(question => (
            <>
              <CCol md="2">
                <CLabel>{question}.</CLabel>
              </CCol>
              <CCol md="10">
                <CFormGroup variant="custom-radio" inline>
                  <CInputRadio
                    custom
                    id="inline-radio1"
                    name="inline-radios"
                    value="option1"
                  />
                  <CLabel variant="custom-checkbox" htmlFor="inline-radio1">
                    A
                  </CLabel>
                </CFormGroup>
                <CFormGroup variant="custom-radio" inline>
                  <CInputRadio
                    custom
                    id="inline-radio2"
                    name="inline-radios"
                    value="option2"
                  />
                  <CLabel variant="custom-checkbox" htmlFor="inline-radio2">
                    B
                  </CLabel>
                </CFormGroup>
                <CFormGroup variant="custom-radio" inline>
                  <CInputRadio
                    custom
                    id="inline-radio3"
                    name="inline-radios"
                    value="option3"
                  />
                  <CLabel variant="custom-checkbox" htmlFor="inline-radio3">
                    C
                  </CLabel>
                </CFormGroup>
                <CFormGroup variant="custom-radio" inline>
                  <CInputRadio
                    custom
                    id="inline-radio4"
                    name="inline-radios"
                    value="option4"
                  />
                  <CLabel variant="custom-checkbox" htmlFor="inline-radio4">
                    D
                  </CLabel>
                </CFormGroup>
              </CCol>
            </>
          ))
        ) : (
          <></>
        )}
      </CFormGroup>
    </>
  )
}

export default Question
