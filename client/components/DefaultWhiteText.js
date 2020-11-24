import React from "react";
import { Text, StyleSheet } from "react-native";

const DefaultWhiteText = (props) => {
  return <Text style={styles.text}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "roboto-regular",
    fontSize: 18,
    color: "white",
  },
});

export default DefaultWhiteText;
