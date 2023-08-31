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
          Linking.openURL('https://wa.me/+5521966562979/?text=Você%20está%20disponivel%20para%20uma%20corrida?%20');
        }}>
        <Image style={styles.Image}
          source={require('../../../assets/uber/izaias.png')}
        />
          <Text>   </Text>  <Text>Izaias</Text>
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
