import React, { useEffect, useCallback } from "react";
import {
  ScrollView,
  Button,
  ImageBackground,
  StyleSheet,
  View,
  Text,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";

import HeaderButton from "../components/HeaderButton";
import DefaultWhiteText from "../components/DefaultWhiteText";
import { toggleFavorite } from "../store/actions/meals";

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <Text>{props.children}</Text>
    </View>
  );
};

const MealDetailScreen = (props) => {
  const mealId = props.navigation.getParam("mealId");

  const availableMeals = useSelector((state) => state.meals.meals);

  const selectedMeal = availableMeals.find((meal) => meal.id === mealId);

  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    // Forward these params named toggleFav to the navigation options
    props.navigation.setParams({ toggleFav: toggleFavoriteHandler });
  }, [toggleFavoriteHandler]);

  return (
    <ScrollView>
      <View>
        <ImageBackground
          source={{ uri: selectedMeal.imageUrl }}
          style={styles.image}
        >
          <View style={styles.details}>
            <DefaultWhiteText>{selectedMeal.duration}m</DefaultWhiteText>
            <DefaultWhiteText>
              {selectedMeal.complexity.toUpperCase()}
            </DefaultWhiteText>
          </View>
        </ImageBackground>
      </View>

      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map((ingredient) => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      {/* TODO: Add a play button to the right and pull up the tutorial video */}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map((step) => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const mealTitle = navigationData.navigation.getParam("mealTitle");
  const toggleFavorite = navigationData.navigation.getParam("toggleFav");
  // const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return {
    headerTitle: mealTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-heart"
          iconSize={24}
          onPress={toggleFavorite}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
    justifyContent: "flex-end",
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  title: {
    marginVertical: 10,
    marginTop: 20,
    marginHorizontal: 10,
    fontFamily: "roboto-bold",
    fontSize: 24,
  },
  listItem: {
    marginVertical: 5,
    marginHorizontal: 10,
    borderColor: "#CCC",
    borderBottomWidth: 1,
    padding: 10,
  },
});

export default MealDetailScreen;
