import React from 'react'
import AppRouter from './router/AppRouter'
import { AuthProvider } from './auth/context/AuthProvider'

const App = () => { //HeroesApp.jsx
  return (    
    <div className='container'>
      <div className="bg-secondary">
      <AuthProvider>
        <AppRouter/>
      </AuthProvider>
      </div>
    </div>
  )
}

export default App