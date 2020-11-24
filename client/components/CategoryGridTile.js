import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  Image,
} from "react-native";

const CategoryGridTile = (props) => {
  let TouchableComp = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableComp = TouchableNativeFeedback;
  }
  return (
    <View style={styles.gridItem}>
      <TouchableComp style={{ flex: 1 }} onPress={props.onSelect}>
        <View style={{ ...styles.container }}>
          <Image
            style={styles.img}
            source={{ uri: props.imageUrl }}
          />
          <Text style={styles.title}>{props.title}</Text>
        </View>
      </TouchableComp>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    backgroundColor: "#0a0a0a",
    flex: 1,
    height: 150,
    overflow: "hidden",
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
  img: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    opacity: 0.5,
  },
  title: {
    textAlign: "center",
    color: "white",
    fontSize: 24,
    fontFamily: "roboto-regular",
    zIndex: 10,
    position: "absolute",
    top: 50,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default CategoryGridTile;
