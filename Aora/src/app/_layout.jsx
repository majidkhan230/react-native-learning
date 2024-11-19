import { StyleSheet, Text, View } from 'react-native'
import "../../global.css";
import { Stack } from 'expo-router';



const RootLayout = () => {
  return (
<Stack>
  <Stack.Screen name="index" options={{headerShown:false}}></Stack.Screen>
  <Stack.Screen name='(auth)'></Stack.Screen>
  <Stack.Screen name='(tabs)'></Stack.Screen>
</Stack>
  )
}

export default RootLayout

const styles = StyleSheet.create({})