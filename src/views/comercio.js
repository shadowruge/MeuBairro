import React from 'react';
import { StyleSheet, Text, View, Linking, TouchableOpacity, ScrollView } from 'react-native';



export default function App() {
    return (
      <View style={styles.container}>
  
  <TouchableOpacity style={styles.TouchableOpacity}
             onPress={() => {
               Linking.openURL('https://wa.me/+5521973705035/?text=Eu%20tenho%20interesse%20no%20seu%20Produto%20à%20venda');
             }}>
           <Text>Comerciantes do Bairro</Text>   
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
  