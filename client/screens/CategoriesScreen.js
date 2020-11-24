import React, { useState, useEffect } from "react";
import { View, FlatList, ActivityIndicator, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import * as categoryActions from "../store/actions/categories";
import CategoryGridTile from "../components/CategoryGridTile";
import Colors from "../constants/Colors";

const CategoriesScreen = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    dispatch(categoryActions.fetchCategories()).then(() => {
      setIsLoading(false);
    });
  }, [dispatch]);

  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.categoryName}
        imageUrl={itemData.item.categoryImageUrl}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "CategoryRecipes",
            params: { categoryId: itemData.item.categoryId },
          });
        }}
      />
    );
  };

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={Colors.primaryColor} />
      </View>
    );
  }

  return (
    <FlatList
      data={categories}
      renderItem={renderGridItem}
      numColumns={2}
      keyExtractor={(renderGridItem, index) => index.toString()}
    />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: "Discover",
};

const styles = StyleSheet.create({
  centered: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default CategoriesScreen;
