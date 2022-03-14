import { SET_CATEGORY, SET_SORT_BY } from "../../constants/actions";

const initialFillterState = {
  category: 0,
  sortBy: 'popular'
}

const filltersReducer = (state = initialFillterState, action) => {
  switch (action.type) {
    case SET_SORT_BY:
      return {...state, sortBy: action.payload};
    case SET_CATEGORY:
      return {...state, category: action.payload};
    default:
      return state;
  }
}

export default filltersReducer;