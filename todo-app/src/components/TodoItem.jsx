import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
const TodoItem = ({ item, pressHandler }) => {
  //    const handleClick = ()=>(
  //     console.log("clicked on item")
  //    )

  return (
    <TouchableOpacity onPress={() => pressHandler(item.id)}>
      <View  style={styles.item}>
        <MaterialIcons name="delete" size={18} color="#333"/>
        <Text>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderStyle: "dashed",
    borderWidth: 1,
    borderRadius: 10,
    flexDirection:"row",
    gap:4,
  },
});
