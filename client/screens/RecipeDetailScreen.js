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
import { toggleFavorite } from "../store/actions/recipes";

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <Text>{props.children}</Text>
    </View>
  );
};

const RecipeDetailScreen = (props) => {
  const recipeId = props.navigation.getParam("recipeId");

  const recipes = useSelector((state) => state.recipes.recipes);

  const selectedRecipe = recipes.find((recipe) => recipe.recipeId === recipeId);

  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(recipeId));
  }, [dispatch, recipeId]);

  useEffect(() => {
    // Forward these params named toggleFav to the navigation options
    props.navigation.setParams({ toggleFav: toggleFavoriteHandler });
  }, [toggleFavoriteHandler]);

  return (
    <ScrollView>
      <View>
        <ImageBackground
          source={{ uri: selectedRecipe.recipeImageUrl }}
          style={styles.image}
        >
          <View style={styles.details}>
            {/* <DefaultWhiteText>{selectedRecipe.duration}m</DefaultWhiteText> */}
            <DefaultWhiteText>Time M</DefaultWhiteText>
            <DefaultWhiteText>
              {/* {selectedRecipe.complexity.toUpperCase()} */}calories?
            </DefaultWhiteText>
          </View>
        </ImageBackground>
      </View>

      {/* <Text style={styles.title}>Ingredients</Text>
{selectedRecipe.ingredients.map((ingredient) => (
  <ListItem key={ingredient}>{ingredient}</ListItem>
))} */}
      {/* TODO: Add a play button to the right and pull up the tutorial video */}
      {/* <Text style={styles.title}>Steps</Text>
{selectedRecipe.steps.map((step) => (
  <ListItem key={step}>{step}</ListItem>
))} */}

    </ScrollView>
  );
};

RecipeDetailScreen.navigationOptions = (navigationData) => {
  const recipeName = navigationData.navigation.getParam("recipeName");
  const toggleFavorite = navigationData.navigation.getParam("toggleFav");
  // const selectedRecipe = RECIPES.find((recipe) => recipe.id === recipeId);

  return {
    headerTitle: recipeName,
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

export default RecipeDetailScreen;
