import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const AddTodos = ({SubmitHandler}) => {
  const [text, setText] = useState("");
  return (
    <View>
      <TextInput 
      style={styles.input}
      placeholder="add todo..." 
      onChangeText={(val) => setText(val)}
       />
       <Button onPress={()=>(SubmitHandler(text))} title="Add to do" color="coral"  />
    </View>
  );
};

export default AddTodos;

const styles = StyleSheet.create({
    input:{
        borderBottomWidth:2,
        borderStyle:"solid",
        padding:10,
        paddingBottom:2,
        marginBottom:16,
    },

});
