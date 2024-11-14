import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
const index = () => {
  return (
  <View style={styles.container}>
    <Text  style={styles.text}>Hello world</Text>
 <Link href={"about"} style={styles.button}  >
<Text >Go to About Screen</Text>
 </Link>
  </View>


  );
};

export default index;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#25292e",
    alignItems:"center",
    justifyContent:"center",
  },
  text:{
    color:"#fff",
  },
  button:{
    fontSize:20,
    color:"#fff",
    textDecorationLine:"underline",
  }
});
