import React from 'react'

const HeroCard = ({hero}) => {
  const heroImgUrl = `/assets/img/${hero.id}.jpg`;
  return (
    <>
      <div className="col">
        <div className="card bg-secondary border border-dark">

          <div className="row no-gutters">
            <div className="col-4">
              <img 
                src={heroImgUrl} 
                alt={hero.superhero}
                className="card-img"
                />
            </div>
            <div className="col-8">
              <div className="card-body">
                <h5 className="card-title"> {hero.superhero} </h5>
                <p className="card-text"> {hero.alter_ego} </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default HeroCard