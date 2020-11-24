import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, ActivityIndicator, StyleSheet } from "react-native";

import * as mealActions from "../store/actions/meals";
import MealList from "../components/MealList";
import Colors from "../constants/Colors";

const CategoryMealScreen = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  const meals = useSelector((state) => state.meals.meals);
  const dispatch = useDispatch();

  const catId = props.navigation.getParam("categoryId");

  // We can use this one if we have filteredMeals set up later.
  // const availableMeals = useSelector((state) => state.filteredMeals);
  // const availableMeals = useSelector((state) => state.meals.meals);

  // TODO: FIX BACKEND SO THAT EACH MEAL/RECIPE HAS A CATEGORY ID. this should work afterwards.
  // const displayedMeals = meals.filter(
  //   (meal) => meal.categoryIds.indexOf(catId) >= 0
  // );

  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  useEffect(() => {
    setIsLoading(true);
    dispatch(mealActions.fetchMeals()).then(() => {
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

  return <MealList listData={meals} navigation={props.navigation} />;
};

// CategoryMealScreen.navigationOptions = (navigationData) => {
//   const catId = navigationData.navigation.getParam("categoryId");

//   const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
//   return {
//     headerTitle: selectedCategory.title,
//   };
// };

const styles = StyleSheet.create({
  centered: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default CategoryMealScreen;
