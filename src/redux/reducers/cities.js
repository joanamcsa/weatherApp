import {CITIES} from '../constants/action-types.js';

  const INITIAL_STATE = {
    cities:[]
  };

  function rootReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case CITIES:
            state.cities = action.payload;
            break;
        default: 
            void(0);
        break;
    }
    return state;
  }

  export default rootReducer;