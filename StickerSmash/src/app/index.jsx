import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import About from "./About";
import ReviewDetails from "./ReviewDetails";
import Home from "./Home";

const index = () => {
  const Stack = createNativeStackNavigator();
  return (
    // <View>
    //   <Text>hello</Text>
    // </View>

      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
      </Stack.Navigator>

  );
};

export default index;

const styles = StyleSheet.create({});
