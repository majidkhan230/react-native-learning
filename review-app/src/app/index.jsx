import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Flexbox from "../screens/Flexbox";
import { useEffect } from "react";
import { Home } from "../screens/Home";
import About from "../screens/About";
import ReviewDetails from "../screens/ReviewDetails";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeStack from "./routes/HomeStack";
import Drawerr from "./routes/Drawerr";
import { NavigationContainer } from "@react-navigation/native";


SplashScreen.preventAutoHideAsync();

const index = () => {
  const [loaded, error] = useFonts({
    "Nanito Regular": require("@/src/assets/fonts/Nunito-Regular.ttf"),
  });
  // console.log(data)
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  const Stack = createNativeStackNavigator();
  return (
   <>
    {/* <HomeStack/> */}
    <Drawerr/>
   </>
  //   <Stack.Navigator initialRouteName="Home" >
  //   <Stack.Screen name="Home" component={Home} options={{
  //     title:"Home",
  //     headerStyle:{
  //       backgroundColor:"red",
  //     }
  //   }} ></Stack.Screen>
  //   <Stack.Screen name="About" component={About}></Stack.Screen>
  //   <Stack.Screen name="ReviewDetails" component={ReviewDetails}></Stack.Screen>
  // </Stack.Navigator>
  );
};

export default index;

const styles = StyleSheet.create({
  // title: {
  //   fontFamily: "Nanito Regular",
  //   paddingTop: 40,
  // },
});
