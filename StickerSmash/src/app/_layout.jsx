import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="+not-found"
      ></Stack.Screen>

      {/* <Stack.Screen
        name="index"
        options={{
          title: "Home",
        }}
      ></Stack.Screen>
      <Stack.Screen
       name="about"
       options={{
        title:"About"
       }}
       ></Stack.Screen> */}
    </Stack>
  );
};

export default RootLayout;

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
  },
});
