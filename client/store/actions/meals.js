import Meal from "../../models/meal";

export const SET_MEALS = "SET_MEALS";
export const CREATE_MEAL = "CREATE_MEAL";
export const UPDATE_MEAL = "UPDATE_MEAL";
export const DELETE_MEAL = "DELETE_MEAL";
export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";

export const fetchMeals = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:8080/recipe");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const resData = await response.json();
      const loadedMeals = [];

      for (const key in resData) {
        loadedMeals.push(
          new Meal(
            key,
            resData[key].name,
            resData[key].description,
            resData[key].imageUrl,
            resData[key].recipeCategory
          )
        );
      }

      dispatch({ type: SET_MEALS, meals: loadedMeals });
    } catch (err) {
      throw err;
    }
  };
};

// export const createMeal = (title, name, description, imageUrl, recipeCategory);

export const toggleFavorite = (id) => {
  return {
    type: TOGGLE_FAVORITE,
    mealId: id,
  };
};
