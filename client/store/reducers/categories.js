import {
  SET_CATEGORIES,
  CREATE_CATEGORY,
  UPDATE_CATEGORY,
  DELETE_CATEGORY,
} from "../actions/categories";
import Category from "../../models/category";

const initialState = {
  categories: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return {
        categories: action.categories,
      };
  }
  return state;
};
