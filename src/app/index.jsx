import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import TodoItem from "../components/TodoItem.jsx";
import Header from "../components/Header.jsx";
import AddTodos from "../components/AddTodos.jsx";

const index = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Complete homework",
      description: "Finish math and science homework",
      completed: false,
    },
    {
      id: 2,
      title: "Grocery shopping",
      description: "Buy vegetables, fruits, and milk",
      completed: false,
    },
    {
      id: 3,
      title: "Exercise",
      description: "Go for a 30-minute run",
      completed: true,
    },
    {
      id: 4,
      title: "Read a book",
      description: "Read 20 pages of 'Atomic Habits'",
      completed: false,
    },
    
  ]);

  const pressHandler=((id)=>(
setTodos((prev)=>(
prev.filter((item)=>(item.id != id))
))
  ))

  const SubmitHandler = (text)=>{

  if(text.length > 3){
    setTodos((prev)=>(
      [{id:Math.random(),title:text},...prev]
    ))
  }  
  else{
    Alert.alert("OOPS","todo must over 3 char long!",[{text:"undestood",onPress:()=>{console.log("clicked on understood")}}])
  }
    
}

  return (
    <View style={styles.container}>
      {/* header */}
     <Header/>
      <View  style={styles.content}>
     <AddTodos SubmitHandler={SubmitHandler} />
        <View style={styles.list}>
          <FlatList
          data={todos}
          keyExtractor={(item)=>item.id.toString()}
          renderItem={({item})=>(
          <TodoItem item={item}  pressHandler={pressHandler}/>
          )}
          />
        </View>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff"
    },
    content:{
        padding:40
    },
    list:{
        marginTop:20,
    },
});
