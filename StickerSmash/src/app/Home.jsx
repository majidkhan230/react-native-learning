import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'

const Home = () => {
    const navigation = useNavigation()
  return (
    <View>
      <Text>Home</Text>
      <Button title='Go to About Page' onPress={()=>navigation.navigate("About")}></Button>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})