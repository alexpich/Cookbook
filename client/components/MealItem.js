import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import DefaultWhiteText from "./DefaultWhiteText";

const MealItem = (props) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={props.onSelectMeal}>
        <View>
          <ImageBackground source={{ uri: props.image }} style={styles.bgImage}>
            <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
              <Text style={styles.title} numberOfLines={1}>
                {props.title}
              </Text>
            </View>
            <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
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
  mealItem: {
    height: 400,
    width: "100%",
    backgroundColor: "#0a0a0a",
  },
  bgImage: {
    width: "100%",
    height: "100%",
  },
  mealRow: {
    flexDirection: "row",
  },
  mealHeader: {
    height: "90%",
    padding: 10,
  },
  title: {
    fontFamily: "roboto-regular",
    fontSize: 24,
    color: "white",
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
});

export default MealItem;
