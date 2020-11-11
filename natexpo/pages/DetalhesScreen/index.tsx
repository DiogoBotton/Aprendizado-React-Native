// Pois toda aplicação que utiliza react precisa dessa importação no inicio.
import React from 'react';

// Pois para a navegação vamos usar botões, e para usa-los, se faz necessario a View e o Text
import { Button, Text, View } from 'react-native';

// Parametros necessários para ser possível a navegação entre as páginas
// Funciona como fosse o history.push('/nome-da-pagina')
function DetalhesScreen(NavigationContainer: { navigation: { navigate: (arg0: string) => void; } }) {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Detalhes Screen</Text>
            <Button title="Ir para Home" onPress={() => NavigationContainer.navigation.navigate('home')} />

            {/*Botão voltar para página anterior */}
            <Button title="Voltar" onPress={() => NavigationContainer.navigation.goBack()} />
        </View>
    );
}

export default DetalhesScreen;