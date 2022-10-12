import React from 'react'
import AppRouter from './router/AppRouter'

const App = () => { //HeroesApp.jsx
  return (    
    <div className='container'>
      <div className="bg-secondary">
        <AppRouter/>
      </div>
    </div>
  )
}

export default App