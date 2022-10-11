import React from 'react'
import {HeroList} from '../components'

const MarvelPage = () => {
  return (
    <>
      <h2>Marvel Page</h2>

      <HeroList 
        publisher={'Marvel Comics'}
      />
    
    </>
  )
}

export default MarvelPage