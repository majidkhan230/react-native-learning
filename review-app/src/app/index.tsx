import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const index = () => {
  return (
    <View>
      <Text style={styles.title}>index</Text>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
    title:{
paddingTop:40,
    }
})