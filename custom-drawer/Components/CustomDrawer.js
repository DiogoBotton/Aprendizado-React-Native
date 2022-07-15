import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { View, ImageBackground, Image, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function CustomDrawer(props) {
  return (
    <View style={{ flex: 1, backgroundColor: '#243a69' }}>
      <DrawerContentScrollView {...props}>
        <ImageBackground
          source={require('../assets/bg.png')}
          style={{ padding: 20 }}
        >

          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Image
              source={require('../assets/user-profile.png')}
              style={{
                height: 80,
                width: 80,
                borderRadius: 40,
                marginBottom: 10
              }}
            />

            <Text style={{ color: '#fff', fontSize: 18 }} >WolFros</Text>

          </View>
        </ImageBackground>
        <DrawerItemList {...props} />

      </DrawerContentScrollView>
      <View style={{
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: '#ccc'
      }}>
        <TouchableOpacity>
          <View style={{
            flexDirection: 'row'
          }}>
            <MaterialIcons name="logout" size={24} color="white" />
            <Text style={{
              color: "#fff",
              fontSize: 15,
              marginLeft: 10
            }}>
              Logout
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View >
  )
}