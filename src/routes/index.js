import React from "react";
import Home from "../pages/Home";
import Sobre from "../pages/Sobre";
import Contato from "../pages/Contato";
import Feather from 'react-native-vector-icons/Feather'
import StackRoutes from "./stackRoutes";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator()

export default function Routes(){
  return(
      <Drawer.Navigator
      screenOptions={{
        headerShown:false,
        drawerStyle:{
          backgroundColor:'#121212'
        },
        drawerActiveBackgroundColor:'#3B3DBF',
        drawerActiveTintColor:'#FFF',
        drawerInactiveBackgroundColor:'#CCC',
        drawerInactiveTintColor:'#000'
      }}>
        
        <Drawer.Screen 
        name="HomeStack"
        component={StackRoutes}
        />

        <Drawer.Screen 
        name="Sobre"
        component={Sobre}
        />

        <Drawer.Screen 
        name="Contato"
        component={Contato}
        />
      </Drawer.Navigator>

     
  )

}
