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
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={Home} 
        />
        
        <Stack.Screen
          name="About" // Add the name prop back here
          component={About}
          // options={{
          //   title: 'About mjd', // Set a custom title
          //   headerStyle: { backgroundColor: '#6200ee' }, // Set background color
          //   headerTintColor: '#fff', // Set text color
          //   headerTitleStyle: { fontWeight: 'bold', fontSize: 20 }, // Style title text
          // }}
        />
        
        <Stack.Screen
          name="ReviewDetails"
          component={ReviewDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeStack;

const styles = StyleSheet.create({});
