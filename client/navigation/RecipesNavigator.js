import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryRecipesScreen from "../screens/CategoryRecipesScreen";
import RecipeDetailScreen from "../screens/RecipeDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import Colors from "../constants/Colors";

const RecipesNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryRecipes: CategoryRecipesScreen,
    RecipeDetail: RecipeDetailScreen,
  },
  {
    defaultNavigationOptions: {
      headerTintColor: Colors.primaryColor,
    },
  }
);

const FavNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    RecipeDetail: RecipeDetailScreen,
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.primaryColor,
    },
  }
);

const RecipesFavTabNavigator = createBottomTabNavigator(
  {
    Categories: {
      screen: RecipesNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons
              name="ios-restaurant"
              size={24}
              color={tabInfo.tintColor}
            />
          );
        },
      },
    },
    Favorites: {
      screen: FavNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons name="ios-heart" size={24} color={tabInfo.tintColor} />
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.primaryColor,
    },
  }
);

export default createAppContainer(RecipesFavTabNavigator);
