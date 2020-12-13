import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getExamRequest, getExamsRequest } from '../../../Store/slice/examSlide'
import { useParams, useHistory } from 'react-router-dom'
import { CButton, CContainer } from '@coreui/react'

const Intro = () => {
  let id = useParams()

  const { isloggedIn } = useSelector(state => state.authentication)
  const [isLogin, setIsLogin] = useState(isloggedIn)
  const dispatch = useDispatch()

  const filterModel = {
    url: `http://localhost:9999/api/fullexam/${id.id}`
  }
  useEffect(() => {
    if (isLogin) {
      dispatch(getExamRequest(filterModel))
    }
  }, [isLogin])
  let exam = useSelector(state => state.exam).exam
  console.log(exam)

  return (
    <CContainer className="intro-container">
      <h1>Test Number 9 - ETS 2020 </h1>
      <h4>Total time: 120 minutes</h4>
      <ul>
        <li>Listening: 45 minutes</li>
        <li>Reading: 75 minutes</li>
      </ul>
      <CButton
        variant="outline"
        color="success"
        size="lg"
        className="intro-container-btn-start"
      >
        START
      </CButton>
    </CContainer>
  )
}

export default Intro
