import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

const TabLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
        }}
      ></Tabs.Screen>
    </Tabs>
  );
};

export default TabLayout;

const styles = StyleSheet.create({});
