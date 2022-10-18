import React,{useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import { AuthContext } from './context/AuthContext';

//const iDRandom = Math.random().toString(36).substring(2);

const LoginPage = () => {
  const {onLoginProvider} = useContext(AuthContext);
  const navigate = useNavigate();


  const onLogin = () => {

    const lastPage = localStorage.getItem('lastPage') || '/';

    onLoginProvider('LoginPage Canelo' ); //Nos pide el name

    //navigate('./marvel',{
    navigate(lastPage,{
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