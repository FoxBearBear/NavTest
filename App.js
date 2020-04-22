import React from 'react';
import {createAppContainer} from 'react-navigation'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import {Feather, FontAwesome5, Entypo} from "@expo/vector-icons";
import {OrcamentosScreen, CartoesScreen,CrediarioScreen,ComprasScreen,ContasScreen,RecorrentesScreen, PagamentosScreen} from "./screens";
import SideBar from "./components/SideBar";
import { NavigationContainer } from '@react-navigation/native';

const Drawer  = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <SideBar/>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}



function App() {
  return (
    <NavigationContainer>
 <Drawer.Navigator
    initialRouteName="Home"
    screenOptions={{ gestureEnabled: false }}
    drawerContent={CustomDrawerContent}
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
