import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const TodoItem = ({item,pressHandler}) => {

//    const handleClick = ()=>(
//     console.log("clicked on item")
//    ) 
    
  return (
    <TouchableOpacity onPress={()=>(pressHandler(item.id))} >
      <Text style={styles.item}>{item.title}</Text>
    </TouchableOpacity >
  )
}

export default TodoItem

const styles = StyleSheet.create({
    item:{
        padding:16,
        marginTop:16,
        borderStyle:'dashed',
        borderWidth:1,
        borderRadius:10,
    }
})