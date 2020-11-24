import React from "react";
import { useSelector } from "react-redux";

import RecipeList from "../components/RecipeList";

const FavoritesScreen = (props) => {
  const favRecipes = useSelector((state) => state.recipes.favoriteRecipes);

  return <RecipeList listData={favRecipes} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = {
  headerTitle: "Your Favorites",
};

export default FavoritesScreen;
