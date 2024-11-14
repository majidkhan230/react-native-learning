import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const Button = ({ label }) => {
  return (
    <View style={styles.btnContainer}>
      <Pressable
        style={styles.button}
        onPress={() => alert("You have just clicked on Button!")}
      >
        <Text style={styles.label}>{label}</Text>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  btnContainer: {
    width: 320,
    height: 68,
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
});
