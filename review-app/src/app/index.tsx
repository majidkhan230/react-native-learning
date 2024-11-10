import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Home from "../screens/Home";
import Flexbox from "../screens/Flexbox";
SplashScreen.preventAutoHideAsync();

const index = () => {
  const [loaded, errors] = useFonts({
    "Nanito Regular": require("@/src/assets/fonts/Nunito-Regular.ttf"),
  });
  // console.log(data)

  return (
   <Home/>
  );
};

export default index;

const styles = StyleSheet.create({
  // title: {
  //   fontFamily: "Nanito Regular",
  //   paddingTop: 40,
  // },
});
