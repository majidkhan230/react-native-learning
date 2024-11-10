import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/global'

const Home = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Hello this is me</Text>
      {/* <Flexbox /> */}
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})