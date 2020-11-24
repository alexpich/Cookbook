import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, ActivityIndicator, StyleSheet } from "react-native";

import * as recipeActions from "../store/actions/recipes";
import RecipeList from "../components/RecipeList";
import Colors from "../constants/Colors";

const CategoryRecipeScreen = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  const recipes = useSelector((state) => state.recipes.recipes);
  const dispatch = useDispatch();

  const catId = props.navigation.getParam("categoryId");

  // We can use this one if we have filteredRecipes set up later.
  // const availableRecipes = useSelector((state) => state.filteredRecipes);
  // const availableRecipes = useSelector((state) => state.recipes.recipes);

  // TODO: FIX BACKEND SO THAT EACH RECIPE HAS A CATEGORY ID. this should work afterwards.
  // const displayedRecipes = recipes.filter(
  //   (recipe) => recipe.categoryIds.indexOf(catId) >= 0
  // );

  const displayedRecipes = availableRecipes.filter(
    (recipe) => recipe.categoryIds.indexOf(catId) >= 0
  );

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

  return <RecipeList listData={recipes} navigation={props.navigation} />;
};

// CategoryRecipeScreen.navigationOptions = (navigationData) => {
//   const catId = navigationData.navigation.getParam("categoryId");

//   const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
//   return {
//     headerTitle: selectedCategory.title,
//   };
// };

const styles = StyleSheet.create({
  centered: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default CategoryRecipeScreen;
