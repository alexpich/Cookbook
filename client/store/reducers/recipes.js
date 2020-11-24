import { RECIPES } from "../../data/dummy-data";
import { SET_RECIPES, TOGGLE_FAVORITE } from "../actions/recipes";

const initialState = {
  recipes: [],
  favoriteRecipes: [],
};

const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RECIPES:
      return {
        recipes: action.recipes,
      };
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteRecipes.findIndex(
        (recipe) => recipe.id === action.recipeId
      );
      if (existingIndex >= 0) {
        const updatedFavRecipes = [...state.favoriteRecipes];
        updatedFavRecipes.splice(existingIndex, 1);
        return { ...state, favoriteRecipes: updatedFavRecipes };
      } else {
        const recipe = state.recipes.find(
          (recipe) => recipe.id === action.recipeId
        );
        return {
          ...state,
          favoriteRecipes: state.favoriteRecipes.concat(recipe),
        };
      }
    default:
      return state;
  }
};

export default recipesReducer;
