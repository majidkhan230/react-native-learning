import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "@/src/screens/Home";
import About from "@/src/screens/About";
import ReviewDetails from "@/src/screens/ReviewDetails";
import { NavigationContainer } from "@react-navigation/native";

const HomeStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    // <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{
            title: "Home",
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: "black",
              height: 40,
            },
            headerTitleAlign: "center", // This aligns the title to the center
          }}
        />
        
        
        <Stack.Screen
          name="ReviewDetails"
          component={ReviewDetails}
        />
      </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default HomeStack;

const styles = StyleSheet.create({});
