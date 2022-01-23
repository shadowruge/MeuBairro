import React from "react";
import { StyleSheet, Text, View, Linking, TouchableOpacity} from 'react-native';



export default function App() {
  return (
    <View style={styles.container}>
 
<TouchableOpacity style={styles.TouchableOpacity}
           onPress={() => {
             Linking.openURL('https://odia.ig.com.br/');
           }}>
         <Text>O Dia</Text>
       
   
   </TouchableOpacity>


   <TouchableOpacity style={styles.TouchableOpacity}
           onPress={() => {
             Linking.openURL('https://www.r7.com/');
           }}>
        <Text>R7</Text>
       </TouchableOpacity>

   <TouchableOpacity style={styles.TouchableOpacity}
           onPress={() => {
             Linking.openURL('https://g1.globo.com/rj/rio-de-janeiro/');
           }}>
      <Text>G1</Text> 
         
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
