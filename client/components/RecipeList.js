import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import RecipeItem from "./RecipeItem";

const RecipeList = (props) => {
  const renderRecipeItem = (itemData) => {
    return (
      <RecipeItem
        title={itemData.item.name}
        image={itemData.item.imageUrl}
        // duration={itemData.item.duration}
        // complexity={itemData.item.complexity}
        onSelectRecipe={() => {
          props.navigation.navigate({
            routeName: "RecipeDetail",
            params: {
              recipeId: itemData.item.recipeId,
              recipeName: itemData.item.recipeName,
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
