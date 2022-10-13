import { heroes } from "../data/dataHeroes"

export const getHeroById = (id) => {
  //si existe lo regresa, de lo contrario undefined
  return heroes.find( hero => hero.id === id);
}