import { CITIES
} from '../constants/action-types.js';


export const cities = payload => {
    return {
      type: CITIES,
      payload,
    }
  };

