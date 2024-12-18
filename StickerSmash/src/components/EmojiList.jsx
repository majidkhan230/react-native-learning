import { FlatList, StyleSheet, Text, View,Pressable, Platform} from 'react-native'
import React, { useState } from 'react'
import { Image } from 'expo-image';
const EmojiList = ({ onSelect, onCloseModal }) => {
    const [emoji] = useState([
        require("../assets/images/emoji1.png"),
        require("../assets/images/emoji2.png"),
        require("../assets/images/emoji3.png"),
        require("../assets/images/emoji4.png"),
        require("../assets/images/emoji5.png"),
        require("../assets/images/emoji6.png"),
      ]);
  return (
   <FlatList horizontal contentContainerStyle={styles.listContainer} data={emoji} renderItem={({item})=>( <Pressable
    onPress={() => {
      onSelect(item);
      onCloseModal();
    }}>
    <Image source={item}  style={styles.image} />
  </Pressable>)} />
  )
}

export default EmojiList

const styles = StyleSheet.create({
    listContainer: {
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
      paddingHorizontal: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    image: {
      width: 100,
      height: 100,
      marginRight: 20,
    },
  });