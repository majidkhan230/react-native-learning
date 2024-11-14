import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Image } from "expo-image";

const PlaceHolderImage = require('@/src/assets/images/background-image.png')

const index = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Hello world</Text>
      <Link href={"mjd"} style={styles.button}>
        <Text>Go to About Screen</Text>
      </Link> */}
      <View style={styles.imageContainer}>
        <Image source={PlaceHolderImage} style={styles.image}></Image>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    // justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
  button: {
    fontSize: 20,
    color: "#fff",
    textDecorationLine: "underline",
  },
  imageContainer:{
    flex:1,
    // backgroundColor:"red",
  },
  image:{
    width:320,
    height:400,
    // backgroundColor:"red",
    borderRadius:18,
  }
});
