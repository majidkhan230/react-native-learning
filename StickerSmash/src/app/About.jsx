import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const About = ({navigation}) => {
  return (
    <View>
      <Text>About</Text>
      <Button title='go to review Detail' onPress={()=>navigation.navigate('ReviewDetails')}></Button>
      
    </View>
  )
}

export default About

const styles = StyleSheet.create({})