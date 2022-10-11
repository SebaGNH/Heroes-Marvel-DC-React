import React from 'react'
import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher';

const HeroList = ({publisher}) => {
  const listHero = getHeroesByPublisher(publisher);
  return (
    <>
      {
        listHero.map( hero => (
          <ul className="" key={hero.id}>
            <li>{hero.superhero}</li>

          </ul>
        ))
      }
    </>
  )
}

export default HeroList

