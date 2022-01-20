import React from 'react';
import { StyleSheet, Text, View, Linking, TouchableOpacity, ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  return (
    <View style={styles.container}>

<TouchableOpacity style={styles.TouchableOpacity}>
  
     <Text>
         Conheça {' '}
         <Text
           style={styles.hyperlinkStyle}
           onPress={() => {
             Linking.openURL('https://pt.wikipedia.org/wiki/Cavalcanti_(bairro_do_Rio_de_Janeiro)');
           }}>
         Cavalcanti
         </Text>
       </Text>
     
    </TouchableOpacity>
    
    <TouchableOpacity style={styles.TouchableOpacity}>
    <Text>
      Conheça à {' '}
      <Text
        style={styles.hyperlinkStyle}
        onPress={() => {
          Linking.openURL('https://pt.wikipedia.org/wiki/Em_Cima_da_Hora_(Rio_de_Janeiro)');
        }}>
      Encima da Hora
      </Text>
    </Text>
   </TouchableOpacity>

   <TouchableOpacity style={styles.TouchableOpacity}>
    <Text>
      Conheça à {' '}
      <Text
        style={styles.hyperlinkStyle}
        onPress={() => {
          Linking.openURL('https://www.luizferro.com.br/sites/paroquiasaopedro/index.htm');
        }}>
      Paróquia Apostulo São Pedro
      </Text>
    </Text>
   </TouchableOpacity>


  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B8EAED',
    paddingTop: 10,
    paddingHorizontal: 20,
  
  },
  
  TouchableOpacity:{
    backgroundColor:'#FFF',
    padding: 15,
    borderRadius: 10,
    marginBottom:10,
    
  }
  
});
