import React from "react";
import { StyleSheet, Text, View, Linking, Button, TouchableOpacity} from 'react-native';



export default function App() {
  return (
    <View style={styles.container}>
 
<TouchableOpacity style={styles.TouchableOpacity}>
     
     <Text>
         Portal {' '}
         <Text
           style={styles.hyperlinkStyle}
           onPress={() => {
             Linking.openURL('https://odia.ig.com.br/');
           }}>
         O Dia
         </Text>
       </Text>
   
   </TouchableOpacity>


   <TouchableOpacity style={styles.TouchableOpacity}>
     
     <Text>
         Portal {' '}
         <Text
           style={styles.hyperlinkStyle}
           onPress={() => {
             Linking.openURL('https://www.r7.com/');
           }}>
        R7
         </Text>
       </Text>
   
   </TouchableOpacity>

   <TouchableOpacity style={styles.TouchableOpacity}>
     
     <Text>
         Portal {' '}
         <Text
           style={styles.hyperlinkStyle}
           onPress={() => {
             Linking.openURL('https://g1.globo.com/rj/rio-de-janeiro/');
           }}>
       G1
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
