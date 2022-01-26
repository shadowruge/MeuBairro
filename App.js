import * as React from 'react';
import { View, Text, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeView from './src/views/home';
import UtilidadeView from './src/views/utilidadepublica';
import HistoriaView from './src/views/historia';
import NoticiasView from './src/views/noticias';
import ComercioView from './src/views/comercio';
import AltashorasView from './src/views/altashoras';
import UberbairroView from './src/views/uberBairro';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Página inicial" component={HomeView} />
        <Stack.Screen name="Utilidade Publica" component={UtilidadeView} />
        <Stack.Screen name="Noticias" component={NoticiasView} />
        <Stack.Screen name="Historia" component={HistoriaView} />
        <Stack.Screen name="Comerciantes Parceiros" component={ComercioView} />
        <Stack.Screen name="Altas Horas Lanches" component={AltashorasView} />
        <Stack.Screen name="Uber do Bairro" component={UberbairroView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


  
export default App;