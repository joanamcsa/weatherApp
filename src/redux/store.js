import { createStore } from 'redux';
import rootReducer from './reducers/cities.js';

const store1 = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store1;
