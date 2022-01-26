import React from 'react';
import { StyleSheet, Text, View, Linking, TouchableOpacity, Image, ScrollView } from 'react-native';



export default function App() {
    return (
<ScrollView>
     <View style={{flex:1, flexDirection:'row', justifyContent:'space-between', padding:10, margin:10}}>
  
       {/*buttom 1 and 2*/}
      <TouchableOpacity
             onPress={() => {
               Linking.openURL('https://wa.me/setyourfonenumber/?text=PEDIDO:%20X-bacon,%20Pão,%20Hambúrguer,%20Queijo,%20Bacon,%20Alface,%20Pícles,%20Maionese-temperada,%20Bylly-Jack,%20Barbecue%20e%20Batata-palha::%20Digite%20Seu%20Nome:,%20Digite%20Seu%20Endereço:,%20O%20SR(a)%20Precisara%20de%20Troco?:,%20Se%20Sim%20Quanto?:,');
             }}>
             <Image style={{width: 180, height:180}}
              source={require ('../../assets/altashoras/xburguer.png')} /> 
      </TouchableOpacity>    


      <TouchableOpacity
             onPress={() => {
               Linking.openURL('https://wa.me/setyourfonenumber/?text=PEDIDO:%20X-bacon,%20Pão,%20Hambúrguer,%20Queijo,%20Bacon,%20Alface,%20Pícles,%20Maionese-temperada,%20Bylly-Jack,%20Barbecue%20e%20Batata-palha::%20Digite%20Seu%20Nome:,%20Digite%20Seu%20Endereço:,%20O%20SR(a)%20Precisara%20de%20Troco?:,%20Se%20Sim%20Quanto?:,');
             }}>
             <Image style={{width: 180, height:180}}
              source={require ('../../assets/altashoras/duplocheddar.png')}
    /> 
      </TouchableOpacity>  
  </View>
        
        
        {/*buttom 3 and 4*/}
        <View style={{flex:1, flexDirection:'row', justifyContent:'space-between', padding:10, margin:10}}>


         <TouchableOpacity
             onPress={() => {
               Linking.openURL('https://wa.me/setyourfonenumber/?text=PEDIDO:%20X-bacon,%20Pão,%20Hambúrguer,%20Queijo,%20Bacon,%20Alface,%20Pícles,%20Maionese-temperada,%20Bylly-Jack,%20Barbecue%20e%20Batata-palha::%20Digite%20Seu%20Nome:,%20Digite%20Seu%20Endereço:,%20O%20SR(a)%20Precisara%20de%20Troco?:,%20Se%20Sim%20Quanto?:,');
             }}>
             <Image style={{width: 180, height:180}}
                source={require ('../../assets/altashoras/xeggcheddar.png')}/>   
         
         </TouchableOpacity>


         <TouchableOpacity
             onPress={() => {
               Linking.openURL('https://wa.me/setyourfonenumber/?text=PEDIDO:%20X-bacon,%20Pão,%20Hambúrguer,%20Queijo,%20Bacon,%20Alface,%20Pícles,%20Maionese-temperada,%20Bylly-Jack,%20Barbecue%20e%20Batata-palha::%20Digite%20Seu%20Nome:,%20Digite%20Seu%20Endereço:,%20O%20SR(a)%20Precisara%20de%20Troco?:,%20Se%20Sim%20Quanto?:,');
             }}>
             <Image style={{width: 180, height:180}}
      source={require ('../../assets/altashoras/adcionais.png')}
    />    
      </TouchableOpacity>
         
      </View>

           {/*buttom 5 and 6*/}
        <View style={{flex:1, flexDirection:'row', justifyContent:'space-between', padding:10, margin:10}}>

          <TouchableOpacity
             onPress={() => {
               Linking.openURL('https://wa.me/setyourfonenumber/?text=PEDIDO:%20X-bacon,%20Pão,%20Hambúrguer,%20Queijo,%20Bacon,%20Alface,%20Pícles,%20Maionese-temperada,%20Bylly-Jack,%20Barbecue%20e%20Batata-palha::%20Digite%20Seu%20Nome:,%20Digite%20Seu%20Endereço:,%20O%20SR(a)%20Precisara%20de%20Troco?:,%20Se%20Sim%20Quanto?:,');
             }}>
             <Image style={{width: 180, height:180}}
      source={require ('../../assets/altashoras/duploxburguer.png')}
    />    
      </TouchableOpacity>
  
      <TouchableOpacity
             onPress={() => {
               Linking.openURL('https://wa.me/setyourfonenumber/?text=PEDIDO:%20X-bacon,%20Pão,%20Hambúrguer,%20Queijo,%20Bacon,%20Alface,%20Pícles,%20Maionese-temperada,%20Bylly-Jack,%20Barbecue%20e%20Batata-palha::%20Digite%20Seu%20Nome:,%20Digite%20Seu%20Endereço:,%20O%20SR(a)%20Precisara%20de%20Troco?:,%20Se%20Sim%20Quanto?:,');
             }}>
             <Image style={{width: 180, height:180}}
      source={require ('../../assets/altashoras/xcalabresa.png')}
    /> 
      </TouchableOpacity>
</View>

        {/*buttom 7 and 8*/}
      <View style={{flex:1, flexDirection:'row', justifyContent:'space-between', padding:10, margin:10}}>

      <TouchableOpacity
             onPress={() => {
               Linking.openURL('https://wa.me/setyourfonenumber/?text=PEDIDO:%20X-bacon,%20Pão,%20Hambúrguer,%20Queijo,%20Bacon,%20Alface,%20Pícles,%20Maionese-temperada,%20Bylly-Jack,%20Barbecue%20e%20Batata-palha::%20Digite%20Seu%20Nome:,%20Digite%20Seu%20Endereço:,%20O%20SR(a)%20Precisara%20de%20Troco?:,%20Se%20Sim%20Quanto?:,');
             }}>
             <Image style={{width: 180, height:180}}
      source={require ('../../assets/altashoras/xtudo.png')}
    />    
      </TouchableOpacity>
  
      <TouchableOpacity
             onPress={() => {
               Linking.openURL('https://wa.me/setyourfonenumber/?text=PEDIDO:%20X-bacon,%20Pão,%20Hambúrguer,%20Queijo,%20Bacon,%20Alface,%20Pícles,%20Maionese-temperada,%20Bylly-Jack,%20Barbecue%20e%20Batata-palha::%20Digite%20Seu%20Nome:,%20Digite%20Seu%20Endereço:,%20O%20SR(a)%20Precisara%20de%20Troco?:,%20Se%20Sim%20Quanto?:,');
             }}>
             <Image style={{width: 180, height:180}}
      source={require ('../../assets/altashoras/xbacon.png')}
    /> 
      </TouchableOpacity>
</View>

          {/*buttom 9 and 10*/}
          <View style={{flex:1, flexDirection:'row', justifyContent:'space-between', padding:10, margin:10}}>

            <TouchableOpacity
             onPress={() => {
               Linking.openURL('https://wa.me/setyourfonenumber/?text=PEDIDO:%20X-bacon,%20Pão,%20Hambúrguer,%20Queijo,%20Bacon,%20Alface,%20Pícles,%20Maionese-temperada,%20Bylly-Jack,%20Barbecue%20e%20Batata-palha::%20Digite%20Seu%20Nome:,%20Digite%20Seu%20Endereço:,%20O%20SR(a)%20Precisara%20de%20Troco?:,%20Se%20Sim%20Quanto?:,');
             }}>
             <Image style={{width: 180, height:180}}
      source={require ('../../assets/altashoras/xpicanha.png')}
    />    
      </TouchableOpacity>
  
      <TouchableOpacity
             onPress={() => {
               Linking.openURL('https://wa.me/setyourfonenumber/?text=PEDIDO:%20X-bacon,%20Pão,%20Hambúrguer,%20Queijo,%20Bacon,%20Alface,%20Pícles,%20Maionese-temperada,%20Bylly-Jack,%20Barbecue%20e%20Batata-palha::%20Digite%20Seu%20Nome:,%20Digite%20Seu%20Endereço:,%20O%20SR(a)%20Precisara%20de%20Troco?:,%20Se%20Sim%20Quanto?:,');
             }}>
             <Image style={{width: 180, height:180}}
      source={require ('../../assets/altashoras/biglaurindao.png')}
    /> 
      </TouchableOpacity>
</View>

{/*buttom 11 and 12*/}
<View style={{flex:1, flexDirection:'row', justifyContent:'space-between', padding:10, margin:10}}>

<TouchableOpacity
             onPress={() => {
               Linking.openURL('https://wa.me/setyourfonenumber/?text=PEDIDO:%20X-bacon,%20Pão,%20Hambúrguer,%20Queijo,%20Bacon,%20Alface,%20Pícles,%20Maionese-temperada,%20Bylly-Jack,%20Barbecue%20e%20Batata-palha::%20Digite%20Seu%20Nome:,%20Digite%20Seu%20Endereço:,%20O%20SR(a)%20Precisara%20de%20Troco?:,%20Se%20Sim%20Quanto?:,');
             }}>
             <Image style={{width: 180, height:180}}
      source={require ('../../assets/altashoras/xduplo.png')}
    />  
      </TouchableOpacity>
  
      <TouchableOpacity
             onPress={() => {
               Linking.openURL('https://wa.me/setyourfonenumber/?text=PEDIDO:%20X-bacon,%20Pão,%20Hambúrguer,%20Queijo,%20Bacon,%20Alface,%20Pícles,%20Maionese-temperada,%20Bylly-Jack,%20Barbecue%20e%20Batata-palha::%20Digite%20Seu%20Nome:,%20Digite%20Seu%20Endereço:,%20O%20SR(a)%20Precisara%20de%20Troco?:,%20Se%20Sim%20Quanto?:,');
             }}>
             <Image style={{width: 180, height:180}}
      source={require ('../../assets/altashoras/xmontanha.png')}
    /> 
      </TouchableOpacity>
</View>





{/*buttom 17 and 18*/}
<View style={{flex:1, flexDirection:'row', justifyContent:'space-between', padding:10, margin:10}}>

  
      <TouchableOpacity
             onPress={() => {
               Linking.openURL('https://wa.me/setyourfonenumber/?text=PEDIDO:%20X-bacon,%20Pão,%20Hambúrguer,%20Queijo,%20Bacon,%20Alface,%20Pícles,%20Maionese-temperada,%20Bylly-Jack,%20Barbecue%20e%20Batata-palha::%20Digite%20Seu%20Nome:,%20Digite%20Seu%20Endereço:,%20O%20SR(a)%20Precisara%20de%20Troco?:,%20Se%20Sim%20Quanto?:,');
             }}>
             <Image style={{width: 180, height:180}}
      source={require ('../../assets/altashoras/bebidas.png')}
    /> 
      </TouchableOpacity>
</View>

      </ScrollView>
    );
  };  
  
    

  
