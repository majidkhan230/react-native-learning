import { StyleSheet, Text, View } from 'react-native'
import "../../global.css";
import { Stack } from 'expo-router';



const RootLayout = () => {
  return (
<Stack>
  <Stack.Screen name="index" options={{headerShown:false}}></Stack.Screen>
  <Stack.Screen name='profile'  options={
    {
    headerStyle:{
      backgroundColor:"orange",
    }
    }
    }></Stack.Screen>
</Stack>
  )
}

export default RootLayout

const styles = StyleSheet.create({})