import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const TabLayout = () => {
  return (
 <Tabs>
    <Tabs.Screen name='home'></Tabs.Screen>
    <Tabs.Screen name='create'></Tabs.Screen>
    <Tabs.Screen name='bookmark'></Tabs.Screen>
    <Tabs.Screen name='profile'></Tabs.Screen>
 </Tabs>
  )
}

export default TabLayout