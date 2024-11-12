import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import About from "@/src/screens/About";

const AboutStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    // <NavigationContainer>
      <Stack.Navigator initialRouteName="About" >
        <Stack.Screen
          name="About" 
          component={About}
        />
      </Stack.Navigator>
  );
};

export default AboutStack;

const styles = StyleSheet.create({});
