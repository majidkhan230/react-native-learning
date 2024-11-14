import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack,Link } from 'expo-router'
const NotFoundScreen = () => {
  return (
  <>
    <Stack.Screen options={{
        title:'Oops! Not Found',
    }}></Stack.Screen>

  <View style={styles.container}>
    <Link href={'/'} style={styles.button} >
    <Text>Go to Home Screen</Text>
    </Link>
  </View>
  </>
  )
}

export default NotFoundScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#25292e",
    },
    button:{
        textDecorationLine:"underline",
        fontSize:20,
        color:"#fff",
    },
})