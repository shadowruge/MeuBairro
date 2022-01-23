import React from 'react';
import { StyleSheet, Text, View, Linking, TouchableOpacity} from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
    <TouchableOpacity style={styles.TouchableOpacity}
            onPress={() => {
              Linking.openURL('https://pt.wikipedia.org/wiki/Em_Cima_da_Hora_(Rio_de_Janeiro)');
            }}>   
            <Text>Conheça à Encima da Hora</Text>
            </TouchableOpacity>

  




   <TouchableOpacity style={styles.TouchableOpacity}
            onPress={() => {
              Linking.openURL('https://www.luizferro.com.br/sites/paroquiasaopedro/index.htm');
            }}>   
            <Text>Conheça à Paróquia Apostulo São Pedro</Text>
            </TouchableOpacity>

  
   

   <TouchableOpacity style={styles.TouchableOpacity}
            onPress={() => {
              Linking.openURL('https://pt.wikipedia.org/wiki/Cavalcanti_(bairro_do_Rio_de_Janeiro)');
            }}>   
            <Text>Conheça  Cavalcanti</Text>
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
