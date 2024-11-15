import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";
import { Image } from "expo-image";
import ImageViewer from "../../components/ImageViewer";
import Button from "@/src/components/Button";

import * as ImagePicker from "expo-image-picker";

const PlaceHolderImage = require("@/src/assets/images/background-image.png");

const index = () => {

const [selectedImage,setSelectedImage] = useState(null | undefined)


  const imagePicker = async () => {
    let result = await ImagePicker.launchImageLibraryAsync();
    if (!result.canceled) {
      console.log(result.assets[0].uri);
      setSelectedImage(result.assets[0].uri)
    } else {
      alert("You did not select any image.");
    }
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Hello world</Text>
      <Link href={"mjd"} style={styles.button}>
        <Text>Go to About Screen</Text>
      </Link> */}
      <View style={styles.imageContainer}>
        {/* <Image source={PlaceHolderImage} style={styles.image}></Image> */}
        <ImageViewer imageSource={PlaceHolderImage} selectedImage={selectedImage}></ImageViewer>
      </View>
      <View style={styles.footer}>
        <Button
          label={"Choose a photo"}
          type={"primary"}
          onPress={imagePicker}
        />
        <Button label={"Use this photo"} />
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
  imageContainer: {
    flex: 1,
  },
  footer: {
    flex: 1 / 3,
    alignItems: "center",
    // backgroundColor:'red',
  },
  // text: {
  //   color: "#fff",
  // },
  // button: {
  //   fontSize: 20,
  //   color: "#fff",
  //   textDecorationLine: "underline",
  // },

  // image:{
  //   width:320,
  //   height:400,
  //   // backgroundColor:"red",
  //   borderRadius:18,
  // }
});
