import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeView from './src/views/home';
import UtilidadeView from './src/views/utilidade/utilidadepublica';
import HistoriaView from './src/views/historia/historia';
import NoticiasView from './src/views/noticias/noticias';
import ComercioView from './src/views/comercio/comercio';
import UberbairroView from './src/views/uber/uberBairro';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Seja bem vindo!" component={HomeView} />
        <Stack.Screen name="Utilidade Publica" component={UtilidadeView} />
        <Stack.Screen name="Noticias" component={NoticiasView} />
        <Stack.Screen name="Historia" component={HistoriaView} />
        <Stack.Screen name="Comerciantes Parceiros" component={ComercioView} />
        <Stack.Screen name="Uber do Bairro" component={UberbairroView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


  
export default App;