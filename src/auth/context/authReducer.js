//Los tipos que creamos para no tener que escribir en el case
import { types } from '../types/types';

const initialState = {
  logged: false
}
//Reducer no llama a apis, ni se realizan operaciones, solo maneja el reducer
export const authReducer = (state = initialState, action) => {
  //console.log('authReducer action'+ action.type)
  switch (action.type) {

    case types.login:
      return {
        ...state,
        logged:true,
        user: action.payload
      };

    case types.logout:
      return {
        logged: false
      };
  
    default:
      return state;
  }
  
}

