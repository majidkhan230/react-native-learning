import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/global'
import { useNavigation } from '@react-navigation/native';




export const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home Page</Text>
   <Button title={"Go to About"} onPress={()=>navigation.navigate("About")}></Button>
    </View>
  )
}



const styles = StyleSheet.create({})