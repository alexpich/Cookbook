import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, ActivityIndicator, StyleSheet } from "react-native";

import * as recipeActions from "../store/actions/recipes";
import RecipeList from "../components/RecipeList";
import Colors from "../constants/Colors";

const CategoryRecipesScreen = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  const recipes = useSelector((state) => state.recipes.recipes);
  const dispatch = useDispatch();

  const catId = props.navigation.getParam("categoryId");

  // We can use this one if we have filteredRecipes set up later.
  // const availableRecipes = useSelector((state) => state.filteredRecipes);
  // const availableRecipes = useSelector((state) => state.recipes.recipes);

  // TODO:  Each recipe now has an array of categories
  // filter though each recipe, and look the recipe's categories, and look at each categoryId in the categories array. Then check if the recipe's categoryId == the selected categoryId
  const displayedRecipes = recipes.filter(
    // (recipe) => recipe.categories.indexOf(catId) >= 0
    // (recipe) => recipe.categories.indexOf(recipe.categories.categoryId) == catId
    (recipe) => recipe.categories.categoryId == catId
  );

  // const displayedRecipes = availableRecipes.filter(
  //   (recipe) => recipe.categoryIds.indexOf(catId) >= 0
  // );

  useEffect(() => {
    setIsLoading(true);
    dispatch(recipeActions.fetchRecipes()).then(() => {
      setIsLoading(false);
    });
  }, [dispatch]);

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={Colors.primaryColor} />
      </View>
    );
  }

  return (
    // TODO: refactor displayedRecipes to receive filtered recipes by categoryId on the backend. For now we will just display all recipes.
    // <RecipeList listData={displayedRecipes} navigation={props.navigation} />
    <RecipeList listData={recipes} navigation={props.navigation} />
  );
};

// TODO: fix this so we get the category id as a Header title
// CategoryRecipesScreen.navigationOptions = (navigationData) => {
//   const catId = navigationData.navigation.getParam("categoryId");

//   const selectedCategory = categories.find((cat) => cat.id === catId);
//   return {
//     headerTitle: selectedCategory.categoryName,
//   };
// };

const styles = StyleSheet.create({
  centered: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default CategoryRecipesScreen;
