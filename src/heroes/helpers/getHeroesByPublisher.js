import {heroes} from '../data/dataHeroes';

//Obtiene los heroes con el publisher recibido por parámetros
export const getHeroesByPublisher = (publisher) => {
  const validPublishers = ['DC Comics', 'Marvel Comics'];

   //Si no incluye alguno de los publisher
  if (!validPublishers.includes(publisher)) {
    throw new Error(`${publisher} is not a valid publisher`);
  }

  return heroes.filter( heroe => heroe.publisher === publisher)
}


