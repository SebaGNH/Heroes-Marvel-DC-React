import React from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'
import LoginPage from '../auth/LoginPage'
import NavBar from '../ui/components/Navbar'
import {MarvelPage,DcPage} from '../heroes/pages'
import HeroesRoutes from '../heroes/routers/HeroesRoutes'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

const AppRouter = () => {
  return (
    <>
  {/*   <NavBar/> */}

      <Routes>
       {/*  <Route path='/' element={<MarvelPage />}/> */}
        {/* <Route path='/MarvelPage' element={<MarvelPage />}/> */}
      {/*   <Route path='/DcPage' element={<DcPage />}/> */}
        {/* <Route path='/login' element={<LoginPage />}/> */}

        {/* Ruta Publica */}
        <Route path='login/*' element={<PublicRoute>
          <Routes> {/* Agregamos nuevamente Routes */}
            <Route path='/*' element={<LoginPage />}/>
          </Routes>
        </PublicRoute>}/>

        {/* Ruta Privada */}
        <Route path='/*' element={<PrivateRoute>
          <HeroesRoutes />
        </PrivateRoute>}/>
        {/* <Route path='/*' element={<HeroesRoutes />}/> */}
        {/* <Route path='/*' element={<Navigate to='/' />}/> */}
      </Routes>
    </>
  )
}

export default AppRouter