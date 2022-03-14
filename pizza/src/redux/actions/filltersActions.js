import { SET_CATEGORY, SET_SORT_BY } from "../../constants/actions";

export const setSortBy = (value) => ({
  type: SET_SORT_BY,
  payload: value
});

export const setCategory = (category) => ({
  type: SET_CATEGORY,
  payload: category
});