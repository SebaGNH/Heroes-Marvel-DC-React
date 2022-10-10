import React from 'react'
import {Routes,Route,Navigate,Link,NavLink} from 'react-router-dom'
import LoginPage from '../auth/LoginPage'
import {MarvelPage,DcPage} from '../heroes/pages'


const AppRouter = () => {
  return (
    <>




      <Routes>
        {/* <Route path='/' element={<HomePage />}/> */}
        <Route path='/MarvelPage' element={<MarvelPage />}/>
        <Route path='/DcPage' element={<DcPage />}/>
        <Route path='/LoginPage' element={<LoginPage />}/>
        <Route path='/*' element={<Navigate to='/' />}/>
      </Routes>
    </>
  )
}

export default AppRouter