import React,{useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import { AuthContext } from './context/AuthContext';

const LoginPage = () => {
  const {onLoginProvider} = useContext(AuthContext);
  const navigate = useNavigate();


  const onLogin = () => {
    onLoginProvider('Mati Scan maister'); //Nos pide el name

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