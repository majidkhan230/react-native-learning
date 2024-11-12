import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { globalStyles } from '../styles/global'
import { useNavigation } from '@react-navigation/native';




export const Home = () => {
  const reviewss = [
    { id: 1, title: "Great Product", rating: 4.5 },
    { id: 2, title: "Satisfactory Service", rating: 3.8 },
    { id: 3, title: "Exceeded Expectations", rating: 5.0 },
    { id: 4, title: "Could Be Better", rating: 2.9 },
    { id: 5, title: "Worth the Price", rating: 4.2 },
    { id: 6, title: "Average Experience", rating: 3.0 },
    { id: 7, title: "Very Disappointing", rating: 1.5 },
    { id: 8, title: "Highly Recommended", rating: 4.8 },
    { id: 9, title: "Not Satisfied", rating: 2.3 },
    { id: 10, title: "Amazing Quality", rating: 4.9 }
  ];
  const [reviews,setReview] = useState(reviewss)
  const navigation = useNavigation();
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home Page</Text>
    <FlatList
    data={reviews}
    renderItem={({item})=>(
   <TouchableOpacity onPress={()=>navigation.navigate("ReviewDetails",item)}>
    <Text>{item.title}</Text>
   </TouchableOpacity>
    )}
    keyExtractor={(review)=>review.id.toString()}
    />
    </View>
  )
}



const styles = StyleSheet.create({})