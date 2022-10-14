import React,{useState} from 'react'
import HeroCard from '../components/HeroCard'
import { useForm } from '../../hooks/useForm'
import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'
import { getHeroesByName } from '../helpers/getHeroesByName'

const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  //console.log(location) //Object { pathname: "/search", search: "?q=hola", hash: "", state: null, key: "kh6d2j4d" }

  //const query = queryString.parse(location.search);
  //console.log(query) //Object { q: "hola" } 

  //Extrae la "q query" si no está no envía nada, la "q" fue declarada en "navitate"
  const {q = ''} = queryString.parse(location.search);

  const heroes = getHeroesByName(q);

  const {searchText,formState, onInputChange, onResetForm,} = useForm({searchText:''});

  const [errorShowHero, setErrorShowHero] = useState(false);

  const onSearchSubmit = (e) => {
    e.preventDefault();
    if (searchText.trim().length <=1) return;

    navigate(`?q=${searchText.toLowerCase().trim()}`,{
      replace: true
    })

    onResetForm();
  }


  return (
    <div className='row m-2'>
      <div className="col-md-5">
        <h4 className=''>Searching</h4>
        <form onSubmit={onSearchSubmit} className="mt-2">
          <input 
            type="text" 
            placeholder="Search a hero" 
            className='form-control'
            name="searchText"
            value={searchText}
            onChange={onInputChange}
            autoComplete='off' 
            />
            <button 
              type='submit'
              className="btn btn-primary mt-2"
              >
              Search
            </button>
        </form>
      </div>


    <div className="col-md-7">
    <h4>Results</h4>
    {
      q === ''?
      <div className="alert alert-primary">
        Search a hero
      </div>

      : (heroes.length === 0) &&
      <div className="alert alert-danger animatedFadeInfast">
        There's not results with <b>{q}</b>
      </div>
    }

    {heroes.length > 0 &&
      heroes.map(hero => (
          <HeroCard 
            key={hero.id}
            hero={hero}
          />
        ))
    }

      </div>
    </div>
  )
}

export default SearchPage