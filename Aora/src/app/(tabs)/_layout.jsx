import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { icons } from "../../constants";

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="jusitfy-center items-center gap-1 ">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      ></Image>
      <Text
        className={`text-sm  `}
        style={{
          color: color,
        }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "red",
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <TabIcon
              icon={icons.home}
              color={color}
              focused={focused}
              name="Home"
            />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="create"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <TabIcon
              icon={icons.plus}
              color={color}
              focused={focused}
              name="Create"
            />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <TabIcon
              icon={icons.profile}
              color={color}
              focused={focused}
              name="Profile"
            />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="bookmark"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <TabIcon
              icon={icons.bookmark}
              color={color}
              focused={focused}
              name="Bookmark"
            />
          ),
        }}
      ></Tabs.Screen>
    </Tabs>
  );
};

export default TabLayout;
