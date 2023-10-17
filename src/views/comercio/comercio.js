import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  Linking,
  TouchableOpacity,
  Image } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.TouchableOpacity}
        onPress={() => {
          Linking.openURL('https://forms.gle/6pazWy5TXb5XD8zg6');
        }}>
        <Image style={styles.Image}
          source={require('../../../assets/comercio/sale.png')}
        />
        
        <Text style={styles.Text}>Anuncie aqui!</Text>
      </TouchableOpacity>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    marginTop: 200,

  },

  TouchableOpacity: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',

  },

  Image: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 100,
    height: 100,
    marginLeft: 10
  },
   
  Text: {
    width: 100,
    marginLeft: 10,
  },
});