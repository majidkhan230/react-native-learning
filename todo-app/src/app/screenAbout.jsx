import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { router } from "expo-router";

const screenAbout = () => {

  function handleClick (){
console.log("clicked on screenContact Button")
router.push("/ScreenContact")
// alert("clicked on button")
  }
  
  return (
    <View>
      <Text>screenAbout</Text>
      <TouchableOpacity onPress={handleClick}>
        <View style={styles.btnContainer}>
          <Text style={styles.textContainer}>Click me</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default screenAbout;

const styles = StyleSheet.create({
  btnContainer: {
    border: "solid",
    backgroundColor: "red",
    padding: 10,
    margin: 10,
    borderRadius: 25,
  },
  textContainer:{
    textAlign:"center",
    color:"white",
  }
});
