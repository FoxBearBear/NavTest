import React from 'react';
import {createAppContainer} from 'react-navigation'
import {Dimensions} from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Feather, FontAwesome5, Entypo} from "@expo/vector-icons";
import {OrcamentosScreen, CartoesScreen,CrediarioScreen,ComprasScreen,ContasScreen,RecorrentesScreen, PagamentosScreen} from "./screens";
import SideBar from "./components/SideBar";
import Compras from './screens/compras';
import { NavigationContainer } from '@react-navigation/native';

const Drawer  = createDrawerNavigator();


function App() {
  return (
    <NavigationContainer>
 <Drawer.Navigator
    initialRouteName="Home"
    screenOptions={{ gestureEnabled: false }}
  >
    <Drawer.Screen
      name="Home"
      component={OrcamentosScreen}
      options={{ title: 'Main Page' }}
    />
    <Drawer.Screen
      name="Profile"
      component={ComprasScreen}
      options={{ title: 'Earth Quakes' }}

    />
  </Drawer.Navigator>
    </NavigationContainer>
   
  );
}




export default App;
