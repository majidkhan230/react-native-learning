import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'
const index = () => {
  const navigation = useNavigation();
  return (
    <View className="bg-orange-600 flex-1 items-center justify-center">
      <Text className="text-teal-400 font-bold text-5xl">index</Text>
      <Button title='go to profile' onPress={()=>navigation.push("profile")}/>
    </View>
  )
}

export default index

const styles = StyleSheet.create({})