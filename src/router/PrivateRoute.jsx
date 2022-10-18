import {useContext} from 'react'
import { AuthContext } from '../auth/context/AuthContext'
import {Navigate, useLocation} from 'react-router-dom'

const PrivateRoute = ({children}) => {

  const {logged} = useContext(AuthContext)

  //const location = useLocation();
  //console.log(location)
  const {pathname,search} = useLocation();

  const lastPage = pathname + search;
  localStorage.setItem('lastPage',lastPage);

  return (logged)?
          children
          : <Navigate to='/login'/>
}

export default PrivateRoute