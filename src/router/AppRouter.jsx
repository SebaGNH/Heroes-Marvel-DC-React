import React from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'
import LoginPage from '../auth/LoginPage'
import NavBar from '../ui/components/Navbar'
import {MarvelPage,DcPage} from '../heroes/pages'
import HeroesRoutes from '../heroes/routers/HeroesRoutes'

const AppRouter = () => {
  return (
    <>
  {/*   <NavBar/> */}

      <Routes>
       {/*  <Route path='/' element={<MarvelPage />}/> */}
        {/* <Route path='/MarvelPage' element={<MarvelPage />}/> */}
      {/*   <Route path='/DcPage' element={<DcPage />}/> */}
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/*' element={<HeroesRoutes />}/>
        {/* <Route path='/*' element={<Navigate to='/' />}/> */}
      </Routes>
    </>
  )
}

export default AppRouter