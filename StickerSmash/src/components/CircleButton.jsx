import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
const CircleButton = () => {
  return (
    <View style={styles.circleContainer}>
   <AntDesign style={styles.icon} name="plus" size={32} color="black" />
    </View>
  )
}

export default CircleButton

const styles = StyleSheet.create({
    circleContainer : {
        backgroundColor: "white",
        padding:20,
        borderWidth:4,
        borderColor:"gold",
        borderRadius: 50,
    },
    icon : {
        fontWeight:"600"}
})