import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";

const ImageViewer = ({ imageSource }) => {
  return <Image source={imageSource} style={styles.image}></Image>;
};

export default ImageViewer;

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 380,
    // backgroundColor:"red",
    borderRadius: 18,
  },
});
