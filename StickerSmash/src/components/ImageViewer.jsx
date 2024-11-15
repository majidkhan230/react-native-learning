import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";

const ImageViewer = ({ imageSource,selectedImage }) => {
console.log(selectedImage)
console.log(imageSource)
  imageLink = selectedImage ? {uri:selectedImage} : imageSource
  
  return <Image source={imageLink} style={styles.image}></Image>;
};

export default ImageViewer;

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 350,
    // backgroundColor:"red",
    borderRadius: 18,
  },
});
