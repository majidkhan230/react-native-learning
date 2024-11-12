import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/global'
import { useNavigation } from '@react-navigation/native'

const About = () => {
  const navigation = useNavigation()
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>About</Text>
      <Button title={"Go to Review "} onPress={()=>navigation.navigate("ReviewDetails")}></Button>
      {/* <Flexbox /> */}
    </View>
  )
}

export default About

const styles = StyleSheet.create({})