// Pois toda aplicação que utiliza react precisa dessa importação no inicio.
import React from 'react';

// Pois sempre que vamos fazer navegação em pilha, é necessário essa tag por volta, como veremos a frente
import { NavigationContainer } from '@react-navigation/native';

// É ela que controla a navegação em pilha
import { createStackNavigator } from '@react-navigation/stack';

// É ela que controla a navegação em Tabs (guias, abas)
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Menu lateral
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './pages/HomeScreen/index';
import DetalhesScreen from './pages/DetalhesScreen/index';
import DashboardScreen from './pages/DashboardScreen/index';

// Constantes para o manuseio das funções de navegação

// Primeiramente baixar biblioteca a seguir:
//yarn add @react-navigation/native

// Após isso, instalar as bibliotecas refentes aos tipos de navegação:

//yarn add yarn add @react-navigation/stack
const Stack = createStackNavigator();

// yarn add @react-navigation/bottom-tabs
const Tab = createBottomTabNavigator();

// yarn add @react-navigation/drawer
const Drawer = createDrawerNavigator();

// Para textar os tipos de navegação, Altere a propriedade 'Drawer' para 'Tab' ou 'Stack' para ver a diferença entre os 3 tipos de navegação
// Stack funciona sem precisar de estar no navigationContainer, funciona com botões
function App() {

  return (
    <NavigationContainer>
      <Drawer.Navigator>

        <Drawer.Screen name="home" component={HomeScreen}/>
        <Drawer.Screen name="detalhes" component={DetalhesScreen}/>
        <Drawer.Screen name="dashboard" component={DashboardScreen}/>

      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;