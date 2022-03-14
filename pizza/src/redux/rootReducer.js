import { combineReducers } from "redux";
import filltersReducer from './reducers/filltersReducer';
import pizzasReducer from './reducers/pizzasReducer';

const rootReducer = combineReducers({
  fillters: filltersReducer,
  pizzas: pizzasReducer
});

export default rootReducer;