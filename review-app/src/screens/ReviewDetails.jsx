import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/global'
import { useNavigation } from 'expo-router';

const ReviewDetails = ({route}) => {
  const {title,rating} = route.params;
  // console.log(data)
  // const navigation = useNavigation();
  return (
    <View style={globalStyles.container}>
    {/* <Text style={globalStyles.titleText}>Review Details</Text> */}
 <View>
  <Text>{title}</Text>
  <Text>rating:{rating}</Text>
 </View>
  </View>
  )
}
export default ReviewDetails

const styles = StyleSheet.create({})