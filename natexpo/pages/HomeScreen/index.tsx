// Pois toda aplicação que utiliza react precisa dessa importação no inicio.
import React from 'react';

// Pois para a navegação vamos usar botões, e para usa-los, se faz necessario a View e o Text
import { Button, Text, View } from 'react-native';

// Parametros necessários para ser possível a navegação entre as páginas
// Funciona como fosse o history.push('/nome-da-pagina')
function HomeScreen(NavigationContainer: { navigation: { navigate: (arg0: string) => void; } }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button title="Ir para Detalhes" onPress={() => NavigationContainer.navigation.navigate('detalhes')} />
            
        </View>
    );
}

export default HomeScreen;