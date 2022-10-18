import { useReducer } from 'react'
//import { AuthContext, AuthReducer } from './'
import  {AuthContext}  from './AuthContext'
import  {authReducer}  from './authReducer'
import { types } from '../types/types'

const initialState = {
  logged: false
}

const initStore = () => {
  const user = JSON.parse( localStorage.getItem('userPayload') );

  return {
    logged: !!user, //si user existe entonces es true
    user
  }
}

export const AuthProvider = ({children}) => {

const [authState, dispatch] = useReducer(authReducer, initialState, initStore);

//payload = lo que vamos a almacenar
const onLoginProvider = (name='') => {
  //console.log('Name onLoginProvider' + name)

  const userPayload = {
    id: 'ABC',
    name: name
  }

  const action = {
    type:types.login,
    payload: userPayload
  }

  localStorage.setItem('userPayload', JSON.stringify(userPayload));
  
  dispatch(action)
}
const onLogoutProvider = () => {
  localStorage.removeItem('userPayload');

  const action = {
    type:types.logout,
    payload: {
      id:'',
      name: ''
    }
  }

  dispatch(action)
}




//...authState lo desestructuramos para tener las propiedades en lugar del objeto
  return (
    <AuthContext.Provider value={{
      //Atributos - Propiedades
      ...authState,
      //Metodos
      onLoginProvider:onLoginProvider,
      onLogoutProvider
    }}>
      {children}
    </AuthContext.Provider>
  )
}