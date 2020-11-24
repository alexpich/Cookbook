import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import RecipeItem from "./RecipeItem";

const RecipeList = (props) => {
  const renderRecipeItem = (itemData) => {
    return (
      <RecipeItem
        recipeName={itemData.item.recipeName}
        image={itemData.item.recipeImageUrl}
        // duration={itemData.item.duration}
        // complexity={itemData.item.complexity}
        onSelectRecipe={() => {
          props.navigation.navigate({
            routeName: "RecipeDetail",
            params: {
              recipeId: itemData.item.recipeId,
              recipeName: itemData.item.recipeName,
              recipeDescription: itemData.item.recipeDescription,
              recipeImageUrl: itemData.item.recipeImageUrl,
            },
          });
        }}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={props.listData}
        renderItem={renderRecipeItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default RecipeList;
