import React, { useState } from 'react'
import { CLink } from '@coreui/react'
const Exam = ({ exam }) => {
  return (
    <div className="container">
      <tr className="exam-page">
        <td>
          <li>
            <CLink to="/BatDauThi" key={exam._id}>
              Thi thử TOEIC 2020 - {exam.title}
            </CLink>
          </li>
        </td>
      </tr>
    </div>
  )
}

export default Exam
