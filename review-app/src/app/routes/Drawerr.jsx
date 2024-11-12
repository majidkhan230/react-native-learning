import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import About from '@/src/screens/About';
import { Home } from '@/src/screens/Home';
import HomeStack from './HomeStack';
import AboutStack from './AboutStack';


// function NotificationsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button onPress={() => navigation.goBack()} title="Go back home" />
//     </View>
//   );
// }

const Drawer = createDrawerNavigator();

export default function Drawerr() {
  return (
    // <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" >
        <Drawer.Screen   name="Home" component={HomeStack} options={{
          headerShown:false,
        }} />
        <Drawer.Screen name="About" component={AboutStack} options={{
          headerShown:false,
        }} />
      </Drawer.Navigator>
  
  );
}