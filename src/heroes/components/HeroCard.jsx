import React from 'react'
import {Link} from 'react-router-dom'

const HeroCard = ({hero}) => {
  const heroImgUrl = `/assets/img/${hero.id}.jpg`;
  return (
    <>
      <div className="col">
        <div className="card bg-secondary border border-dark">

          <div className="row no-gutters">
            
            <div className="col-5">
              <img 
                src={heroImgUrl} 
                alt={hero.superhero}
                className="card-img"
                />
            </div>

            <div className="col-7">
              <div className="card-body">
                <h5 className="card-title"> {hero.superhero} </h5>
                
                {
                  hero.alter_ego !== hero.characters
                  ? <p className="card-text"> {hero.alter_ego} </p>
                  : <p className="card-text"> {hero.characters} </p>
                }

                <p className="card-text">
                  <small className='text-dark'>
                    {hero.first_appearance}
                  </small>
                </p>

                <Link to={`/hero/${hero.id}`}>
                  Más..
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default HeroCard