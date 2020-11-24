import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import DefaultWhiteText from "./DefaultWhiteText";

const RecipeItem = (props) => {
  return (
    <View style={styles.recipeItem}>
      <TouchableOpacity onPress={props.onSelectRecipe}>
        <View>
          <ImageBackground source={{ uri: props.image }} style={styles.bgImage}>
            <View style={{ ...styles.recipeRow, ...styles.recipeHeader }}>
              <Text style={styles.title} numberOfLines={1}>
                {props.title}
              </Text>
            </View>
            <View style={{ ...styles.recipeRow, ...styles.recipeDetail }}>
              {/* <DefaultWhiteText>{props.duration}m</DefaultWhiteText>
              <DefaultWhiteText>{props.complexity.toUpperCase()}</DefaultWhiteText> */}
              <DefaultWhiteText>15m</DefaultWhiteText>
              <DefaultWhiteText>something</DefaultWhiteText>
            </View>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  recipeItem: {
    height: 400,
    width: "100%",
    backgroundColor: "#0a0a0a",
  },
  bgImage: {
    width: "100%",
    height: "100%",
  },
  recipeRow: {
    flexDirection: "row",
  },
  recipeHeader: {
    height: "90%",
    padding: 10,
  },
  title: {
    fontFamily: "roboto-regular",
    fontSize: 24,
    color: "white",
  },
  recipeDetail: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
});

export default RecipeItem;
