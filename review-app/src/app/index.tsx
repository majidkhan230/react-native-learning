import { StyleSheet, Text, View } from "react-native";

import Flexbox from "../screens/Flexbox";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

const index = () => {
  const [loaded, errors] = useFonts({
    "Nanito Regular": require("@/src/assets/fonts/Nunito-Regular.ttf"),
  });
  // console.log(data)

  return (
    <View>
      <Text style={styles.title}>Hello this is me</Text>
      <Flexbox />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  title: {
    fontFamily: "Nanito Regular",
    paddingTop: 40,
  },
});
