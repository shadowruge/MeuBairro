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
          Linking.openURL('https://wa.me/seutelaqui/?text=Eu%20tenho%20interesse%20no%20seu%20Produto%20à%20venda');
        }}>
        <Text></Text>
        <Image style={styles.Image}
          source={require('../../../assets/comercio/sale.png')}
        />
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
  }
});
