import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity, Image} from 'react-native';



export default function App({navigation}) {
    return (
      <View style={styles.container}>
  
  
  
      <TouchableOpacity style={styles.TouchableOpacity}
            onPress={() => {
              navigation.navigate('Altas Horas Lanches');
            }}>   
                    <Image style={styles.Image}
      source={require ('../../assets/altashoras/index.png')}
    /> 
            <Text>Altas Horas Lanches</Text>
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
  
    Image:{
     marginRight:16,
  height:50,
  width:50
    }
  });
  
