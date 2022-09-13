import { View, Text, Button } from 'react-native'
import React from 'react'

export default function Login({navigation}) {
    return (
        <View>
            <Text>Login</Text>
            <Button onPress={() => navigation.navigate('custom_drawer', {screen: 'Home'})} title='Ir para drawer' />
        </View>
    )
}