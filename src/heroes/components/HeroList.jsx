import React from 'react'
import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher';
import {HeroCard} from './'

const HeroList = ({publisher}) => {
  const listHero = getHeroesByPublisher(publisher);
  return (
    <div className='row rows-col-1 row-cols-md-2 row-cols-lg-3 g-3  px-3'>
      {
        listHero.map( hero => (            
          <HeroCard
            key={hero.id}
            hero={hero}
          />
        ))
      }
    </div>
  )
}

export default HeroList;

