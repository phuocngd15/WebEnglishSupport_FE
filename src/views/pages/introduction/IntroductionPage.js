import React from 'react'
import { useHistory } from "react-router-dom";
import LoginIcon from 'mdi-react/LoginIcon'

const IntroductionPage = () => {
  let history = useHistory();
  const handleRegister = () => {
    history.push("/register");
  }
  const handleLogin = () => {
    history.push("/login");
  }
  return (
    <div className="c-app c-default-layout flex-row align-items-center introduction-page-container">
      <div className='introduction-page-modal'>
        <div className='introduction-page-header'>
          <div>Toeic test </div>
          <div>So easy!</div>
        </div>
        <div className='introduction-page-footer'>
          <div class="button" id="button-1">
            <div id="slide"></div>
            <div onClick={handleLogin}>Login</div>
            <LoginIcon />
          </div>
          <div class="button" id="button-2">
            <div id="slide"></div>
            <div onClick={handleRegister}>Register</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IntroductionPage
