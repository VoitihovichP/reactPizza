import { SET_PIZZAS } from "../../constants/actions";

const setPizzas = (items) => ({
  types: SET_PIZZAS,
  payload: items
});

export default setPizzas;