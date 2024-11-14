import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
const Button = ({ label,type }) => {
 if(type === "primary"){
   return (
    <View style={styles.btnContainer}>
      <Pressable
        style={[styles.button, { backgroundColor: "#fff" }]}
        onPress={() => alert("You have just clicked on Button!")}
      >
        <FontAwesome
          name="picture-o"
          color="#25292e"
          style={styles.buttonIcon}
          size={24}
        ></FontAwesome>
        <Text style={[styles.buttonLabel, { color: "#25292e" }]}>{label}</Text>
      </Pressable>
    </View>
  )
}
  return(
    <View style={styles.btnContainer}>
    <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  </View>
  )
};

export default Button;

const styles = StyleSheet.create({
  btnContainer: {
    width: 280,
    height: 64,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
    // backgroundColor: "red",
  },
  button: {
    borderRadius: 10,
    // backgroundColor: "yellow",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  label: { color: "#fff", fontSize: 16 },
  buttonIcon: {
    paddingRight: 8,
  },
});
