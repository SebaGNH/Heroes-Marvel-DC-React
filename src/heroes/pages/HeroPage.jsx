import React from 'react'
import {useParams,Navigate, useNavigate} from 'react-router-dom'
import {getHeroById} from '../helpers/getHeroById'

const HeroPage = () => {
  //const heroImgUrl = `/assets/img/${hero.id}.jpg`;
  const {id} = useParams();
  
  const hero = getHeroById(id);
  //console.log(hero.superhero)

  //Imagen
  const img = `/assets/img/${hero.id}.jpg`

  //Navegación
  const navigate = useNavigate();




  const onNavigateBack = () => {
    navigate(-1)
  }

  //Si no hay hero en la ruta del navegador deriva a marvel
  if (!hero) {
    return <Navigate to='/marvel' />
  }



  return (
    <div className='row mt-1 p-4'>
      
      <div className="col-md-4 ">
        <img 
          src={img} 
          alt={hero.superhero}
          className="card-img img-thumbnail  rounded-1"
          />      
      </div>

      <div className="col-md-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item bg-secondary">
            <p className='text-white'>Alter Ego: {hero.alter_ego}</p>
          </li>
          <li className="list-group-item bg-secondary">
            <p className='text-white'>Publisher: {hero.publisher}</p>
          </li>
          <li className="list-group-item bg-secondary">
            <p className='text-white'>First Appearance {hero.first_appearance}</p>
          </li>
        </ul>

        <h5 className='mt-5'>Caracters: </h5>
        <p>{hero.characters}</p>

        <button 
          className='btn btn-success'
          onClick={onNavigateBack}
          >Volver
        </button>
      </div>

    </div>
  )
}

export default HeroPage

/**
 * 
 *   <img 
                src={heroImgUrl} 
                alt={hero.superhero}
                className="card-img"
                />
 */