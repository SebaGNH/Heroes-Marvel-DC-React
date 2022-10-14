import {heroes} from '../data/dataHeroes'

export const getHeroesByName = (name = '') =>{

  name = name.trim().toLowerCase();
  //No escribió un nombre, va trim antes por los espacios
  if (name.length === 0) return [];
  //console.log(name)

  //el if anterior devuelve un arreglo vacío ya que este devolvería el arr de heroes
  return heroes.filter( hero => hero.superhero.toLowerCase().includes(name));

}