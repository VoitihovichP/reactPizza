import { SET_PIZZAS } from "../../constants/actions";

const initialPizzasState = {
  items: [],
  isLoaded: false
}

const pizzasReducer = (state = initialPizzasState, action) => {
  switch (action.type) {
    case SET_PIZZAS:
      return {...state, items: action.payload};
    default:
      return state;
  }
}

export default pizzasReducer;