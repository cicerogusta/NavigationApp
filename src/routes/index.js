import React from "react";
import Home from "../pages/Home";
import Sobre from "../pages/Sobre";
import Contato from "../pages/Contato";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feather from 'react-native-vector-icons/Feather'

const Tab = createBottomTabNavigator()

export default function Routes(){
  return(
      <Tab.Navigator
      screenOptions={{headerShown:false, tabBarHideOnKeyboard:true, tabBarShowLabel:false, tabBarActiveTintColor:'#FF0000', tabBarStyle:{
        backgroundColor:'#202225',
        borderTopWidth:0
      }}}
      >
        <Tab.Screen 
        name="Home"
        component={Home}
        options={{
          tabBarIcon:({color, size}) =>{
            return <Feather name="home" color={color} size={size}/>

          }
        }}
        />

        <Tab.Screen 
        name="Sobre"
        component={Sobre}
        options={{
          tabBarIcon:({color, size}) =>{
            return <Feather name="file-text" color={color} size={size}/>

          }
        }}
        />

        <Tab.Screen 
        name="Contato"
        component={Contato}
        options={{
          tabBarIcon:({color, size}) =>{
            return <Feather name="phone-call" color={color} size={size}/>

          },
          headerShown:false
        }}
        />
      </Tab.Navigator>

     
  )

}
