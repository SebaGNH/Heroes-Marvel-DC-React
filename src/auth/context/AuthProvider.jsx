import { useReducer } from 'react'
//import { AuthContext, AuthReducer } from './'
import  {AuthContext}  from './AuthContext'
import  {authReducer}  from './authReducer'
import { types } from '../types/types'

const initialState = {
  logged: false
}

export const AuthProvider = ({children}) => {

const [authState, dispatch] = useReducer(authReducer, initialState);

//payload = lo que vamos a almacenar
const onLoginProvider = (name='') => {
  //console.log('Name onLoginProvider' + name)
  const action = {
    type:types.login,
    payload: {
      id:'ABC',
      name: name
    }
  }
  
  dispatch(action)
}
//...authState lo desestructuramos para tener las propiedades en lugar del objeto
  return (
    <AuthContext.Provider value={{
      ...authState,
      onLoginProvider:onLoginProvider
    }}>
      {children}
    </AuthContext.Provider>
  )
}