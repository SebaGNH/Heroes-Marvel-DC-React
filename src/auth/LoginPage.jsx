import React from 'react'
import {useNavigate} from 'react-router-dom'

const LoginPage = () => {
  const navigate = useNavigate();
  const onLogin = () => {
    navigate('./marvel',{
      replace: true
    })
  }
  return (
    <>
      <div className="mt-2 p-4">
        <h1>Login</h1>
        <button 
          className="btn btn-success"
          onClick={onLogin}
          >Login</button>
      </div>
    </>
  )
}

export default LoginPage