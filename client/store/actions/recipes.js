import Recipe from "../../models/recipe";

export const SET_RECIPES = "SET_RECIPES";
export const CREATE_RECIPE = "CREATE_RECIPE";
export const UPDATE_RECIPE = "UPDATE_RECIPE";
export const DELETE_RECIPE = "DELETE_RECIPE";
export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";

export const fetchRecipes = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:8080/recipe");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const resData = await response.json();
      const loadedRecipes = [];

      for (const key in resData) {
        loadedRecipes.push(
          new Recipe(
            key,
            resData[key].recipeName,
            resData[key].recipeDescription,
            resData[key].recipeImageUrl,
            resData[key].categories
          )
        );
      }

      dispatch({ type: SET_RECIPES, recipes: loadedRecipes });
    } catch (err) {
      throw err;
    }
  };
};

// export const createRecipe = (recipeName, recipeDescription, recipeImageUrl, categories);

export const toggleFavorite = (id) => {
  return {
    type: TOGGLE_FAVORITE,
    recipeId: id,
  };
};
