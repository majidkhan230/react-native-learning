import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Flexbox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.box1}>one </Text>
      <Text style={styles.box2}>two</Text>
      <Text style={styles.box3}>three</Text>
      <Text style={styles.box4}>four</Text>
    </View>
  )
}

export default Flexbox

const styles = StyleSheet.create({
  container :{
    // flex:1, // taking full width and height
    flexDirection:"row", //default col hota hein
    justifyContent:"space-evenly",
    alignItems:"center",
    paddingTop:40, 
    backgroundColor:"#ddd",
  },
  box1: {
    flex:1,
    backgroundColor:"violet",
    padding:10,
  },
  box2: {
    flex:2,
    backgroundColor:"gold",
    padding:20,
  },
  box3: {
    flex:1,
    backgroundColor:"coral",
    padding:30,
  },
  box4: {
    flex:2,
    backgroundColor:"skyblue",
    padding:40,
  }


})