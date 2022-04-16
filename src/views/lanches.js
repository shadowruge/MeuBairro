import React from 'react';
import { StyleSheet, Text, View, Linking, TouchableOpacity, Image, ScrollView } from 'react-native';



export default function App() {
  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.TouchableOpacity}
        onPress={() => {
          Linking.openURL('https://wa.me/+5521973917490/?text=PEDIDO:%20X-bacon,%20Pão,%20Hambúrguer,%20Queijo,%20Bacon,%20Alface,%20Pícles,%20Maionese-temperada,%20Bylly-Jack,%20Barbecue%20e%20Batata-palha::%20Digite%20Seu%20Nome:,%20Digite%20Seu%20Endereço:,%20O%20SR(a)%20Precisara%20de%20Troco?:,%20Se%20Sim%20Quanto?:,');
        }}>
        <Image style={styles.Image}
          source={require('../../assets/altashoras/index.png')}
        />

        <Text>Point Altas horas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.TouchableOpacity}
        onPress={() => {
          navigation.navigate('Utilidade Publica');
        }}>
        <Image style={styles.Image}
          source={require('../../assets/utilidadepublica/index.png')}
        />
        <Text>Utilidade PÚblica</Text>
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
    marginRight: 16,
    height: 50,
    width: 50
  }
});

