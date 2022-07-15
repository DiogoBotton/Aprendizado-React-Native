import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Home from './Screens/Home';
import Configurations from './Screens/Configurations';
import Profile from './Screens/Profile';
import CustomDrawer from './Components/CustomDrawer';
import { Ionicons, AntDesign, EvilIcons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={props => <CustomDrawer {...props} />}
        screenOptions={{
          drawerActiveBackgroundColor: '#5b88a5',
          drawerActiveTintColor: '#fff',
          drawerInactiveTintColor: "#fff",
          drawerLabelStyle: {
            marginLeft: -25,
            fontSize: 15
          }
        }}
      >
        <Drawer.Screen name='Home' component={Home} options={{
          drawerIcon: ({ color }) => (
            <AntDesign name="home" size={24} color="white" />
          )
        }} />
        <Drawer.Screen name='Profile' component={Profile} options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="person-outline" size={24} color="white" />
          )
        }} />
        <Drawer.Screen name='Configurations' component={Configurations} options={{
          drawerIcon: ({ color }) => (
            <EvilIcons name="gear" size={24} color="white" />
          )
        }} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}