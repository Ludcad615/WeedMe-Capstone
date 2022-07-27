import React, {useState} from 'react'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import "../styles/signUpLoginPage.css"

const LandingPage = () => {
    const [showLogin, setShowLogin] = useState(true);
  return (
    <div className="signUpLoginPage-wrapper">
      {showLogin ? (
        <div className="signUpLoginPage-wrapper_content">
          <h1>Welcome Back!</h1>
          <LoginForm  />
          <p>Don't have an Account?</p>
          <button id="sign-log-btn" onClick={() => setShowLogin(false)}>
            Sign up!
          </button>
        </div>
      ) : (
        <div className="signUpLoginPage-wrapper_content">
          <h1>Sign Up Below!</h1>
          <SignupForm  />
          <p>Already have an account?</p>
          <button id="sign-log-btn" onClick={() => setShowLogin(true)}>
            Login!
          </button>
        </div>
      )}
    </div>
  )
}

export default LandingPage