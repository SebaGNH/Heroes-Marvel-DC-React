//Los tipos que creamos para no tener que escribir en el case
import { types } from '../types/types';

const initialState = {
  logged: false
}

export const authReducer = (state = initialState, action) => {
  
  switch (action.types) {

    case types.login:
      return {
        ...state,
        logged:true,
        name: action.payload
      };

    case types.logout:
      return {
        logged: false
      };
  
    default:
      return state;
  }
  
}

