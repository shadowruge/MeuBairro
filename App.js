import * as React from 'react';
import { View, Text, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeView from './src/views/homeview';
import HistoriaView from './src/views/historia';
import NoticiasView from './src/views/noticias';
import ComercioView from './src/views/comercio';

function ViewScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     
        <Button 

      title="Página inicial"
      onPress={() => navigation.navigate('HomeView') }
    />
      <Text style= {{marginBottom: 400}}>

      </Text>
      
</View>


    );
  }

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Página inicial" component={HomeView} />
        <Stack.Screen name="Noticias" component={NoticiasView} />
        <Stack.Screen name="Historia" component={HistoriaView} />
        <Stack.Screen name="Comerciantes Parceiros" component={ComercioView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


  
export default App;