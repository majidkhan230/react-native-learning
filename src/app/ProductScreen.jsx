import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";
import axios from "axios";
import {images} from "@/src/assets/images/index.js"
const index = () => {
  
    const [products, setProducts] = useState([
      {
        key: 1,
        title: "Smartphone",
        description:
          "A high-end smartphone with a powerful processor and stunning display.",
      },
      {
        key: 2,
        title: "Laptop",
        description:
          "A lightweight laptop with long battery life, ideal for productivity on the go.",
      },
      {
        key: 3,
        title: "Wireless Earbuds",
        description:
          "Compact earbuds with noise cancellation and clear sound quality.",
      },
      {
        key: 4,
        title: "Smartwatch",
        description:
          "A smartwatch with fitness tracking, notifications, and heart rate monitor.",
      },
      {
        key: 5,
        title: "Gaming Console",
        description:
          "A console offering immersive gaming with high-definition graphics.",
      },
      {
        key: 6,
        title: "Tablet",
        description:
          "A versatile tablet for browsing, reading, and media consumption.",
      },
      {
        key: 7,
        title: "Bluetooth Speaker",
        description:
          "Portable speaker with deep bass and excellent audio quality.",
      },
      {
        key: 8,
        title: "Digital Camera",
        description:
          "High-resolution camera for capturing stunning photos and videos.",
      },
      {
        key: 9,
        title: "Smart Home Assistant",
        description: "Voice-activated assistant for managing smart home devices.",
      },
      {
        key: 10,
        title: "Fitness Tracker",
        description:
          "Wearable tracker for monitoring steps, calories, and sleep quality.",
      },
    ]);

  const getData = async()=>{
    const res = await axios.get("https://fakestoreapi.com/products")
    const data = res?.data
    setProducts(data)
  }


  const handleClick = () => {
    console.log("button clicked");
    router.push("/screenAbout");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>index</Text>
      <TouchableOpacity onPress={handleClick} style={styles.btnContainer}>
        <Text >Click Me</Text>
      </TouchableOpacity>
      {/* <ScrollView>
    <View>
      {products.map(({key,title,description},index)=>{
        return(
          <View key={key}>
            <Text style={styles.titleContainer}>{title}</Text>
            <Text>{description}</Text>
          </View>
        )
      })}
    </View>
    </ScrollView> */}

<TouchableOpacity onPress={getData}>
  <Text>Get Data</Text>
</TouchableOpacity>



      <View>
 <FlatList data={products} renderItem={({item})=>{
  const {image,title,description} = item
  return(
    <View >
    <Text style={styles.titleContainer}>{title}</Text>
    <Text>{description}</Text>
{image ? (    <Image source={{uri:image}} width={100} height={100} />) : null}
    {/* <Image source={images.img05}  tintColor="rgba(255, 0, 0, 0.5)"  blurRadius={20} style={{ width: 100, height: 100, borderRadius: 10 }} resizeMode="cover" /> */}
    {/* <Image source={images.img05}    style={{ width: 100, height: 100, borderRadius: 10 }} resizeMode="cover" /> */}
    </View>
  )
}}/>
</View>


    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  textContainer: {
    textTransform: "capitalize",
    fontWeight: "bold",
    color: "white",
    backgroundColor: "teal",
    padding: 20,
    borderStyle: "solid",
    borderRadius: 25,
  },
  container: {
    // flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  btnContainer: {
    marginTop: 10,
    padding: 8,
    fontWeight: "600",
    backgroundColor: "pink",
  },
  titleContainer: {
    fontSize: 40,
    fontWeight: "bold",
  },
});
