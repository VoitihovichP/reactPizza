import { SET_PIZZAS } from "../../constants/actions";

const setPizzasAction = (items) => ({
  type: SET_PIZZAS,
  payload: items
});

export default setPizzasAction;