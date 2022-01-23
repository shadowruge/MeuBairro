import React from 'react';
import { StyleSheet, Text, View, Linking, TouchableOpacity, ScrollView } from 'react-native';

export default function App({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView>
            <TouchableOpacity style={styles.TouchableOpacity}
            onPress={() => {
              Linking.openURL('https://associacaoculturalespacocarioca.000webhostapp.com/');
            }}>   
            <Text>Associação Cultural Espaço Carioca</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.TouchableOpacity}
            onPress={() => {
              navigation.navigate('Historia');
            }}>   
            <Text>Historia de Cavalcanti</Text>
            </TouchableOpacity>
        
            <TouchableOpacity style={styles.TouchableOpacity}
            onPress={() => {
              navigation.navigate('Noticias');
            }}>   
            <Text>Noticias</Text>
            </TouchableOpacity>
        
            <TouchableOpacity style={styles.TouchableOpacity}
            onPress={() => {
              navigation.navigate('Comerciantes Parceiros');
            }}>   
            <Text>Comercio do Bairro</Text>
            </TouchableOpacity>
        
            <TouchableOpacity style={styles.TouchableOpacity}
            onPress={() => {
              Linking.openURL('https://www.detran.rj.gov.br/index.asp');
            }}>   
            <Text>Detran RJ</Text>
            </TouchableOpacity>
        
            <TouchableOpacity style={styles.TouchableOpacity}
            onPress={() => {
              Linking.openURL('https://www.caixa.gov.br/Paginas/home-caixa.aspx');
            }}>   
            <Text>Caixa Economica Federal</Text>
            </TouchableOpacity>
        
            <TouchableOpacity style={styles.TouchableOpacity}
            onPress={() => {
              Linking.openURL('https://www.bb.com.br/pbb/pagina-inicial#/');
            }}>   
            <Text>Banco do Brasil</Text>
            </TouchableOpacity>
        
            <TouchableOpacity style={styles.TouchableOpacity}
            onPress={() => {
              Linking.openURL('https://www.spcbrasil.org.br/');
            }}>   
            <Text>SPC</Text>
            </TouchableOpacity>
        
            <TouchableOpacity style={styles.TouchableOpacity}
            onPress={() => {
              Linking.openURL('https://www.gov.br/inss/pt-br');
            }}>   
            <Text>INSS</Text>
            </TouchableOpacity>
        
            <TouchableOpacity style={styles.TouchableOpacity}
            onPress={() => {
              Linking.openURL('https://www.gov.br/trabalho-e-previdencia/pt-br');
            }}>   
            <Text>Ministerio do Trabalho e Previdência</Text>
            </TouchableOpacity>
        
         <TouchableOpacity style={styles.TouchableOpacity}
            onPress={() => {
              Linking.openURL('https://www.jusbrasil.com.br/l/advogados-online');
            }}>   
            <Text>Advogados Online</Text>
            </TouchableOpacity>
        
            <TouchableOpacity style={styles.TouchableOpacity}
            onPress={() => {
              Linking.openURL('http://portal.mec.gov.br/acessibilidade-sp-940674614/190-secretarias-112877938/setec-1749372213/12556-rio-de-janeiro');;
            }}>   
            <Text>Ministerio da Educação RJ</Text>
            </TouchableOpacity>
        
            <TouchableOpacity style={styles.TouchableOpacity}
            onPress={() => {
              Linking.openURL('https://www.fetranspor.com.br/');
            }}>   
            <Text>Fetranspor RJ</Text>
            </TouchableOpacity>
        
            <TouchableOpacity style={styles.TouchableOpacity}
            onPress={() => {
              Linking.openURL('https://www.cartaoriocard.com.br/rcc/institucional') ;
            }}>   
            <Text>Riocard RJ</Text>
            </TouchableOpacity>
        
            <TouchableOpacity style={styles.TouchableOpacity}
            onPress={() => {
              Linking.openURL('http://prefeitura.rio/todas-as-noticias/');
            }}>   
            <Text>Prefeitura do RJ</Text>
            </TouchableOpacity>
        
            <TouchableOpacity style={styles.TouchableOpacity}
            onPress={() => {
              Linking.openURL('http://www.rj.gov.br/') ;
            }}>   
            <Text>Governo do Estado RJ</Text>
            </TouchableOpacity>
        
            <TouchableOpacity style={styles.TouchableOpacity}
            onPress={() => {
              Linking.openURL('https://sepm.rj.gov.br/') ;
            }}>   
            <Text>Polícia Militar RJ</Text>
            </TouchableOpacity>
        
            <TouchableOpacity style={styles.TouchableOpacity}
            onPress={() => {
              Linking.openURL('http://www.policiacivilrj.net.br/index.php');
            }}>   
            <Text>Polícia Civil RJ</Text>
            </TouchableOpacity>
        
            <TouchableOpacity style={styles.TouchableOpacity}
            onPress={() => {
              Linking.openURL('http://www.cbmerj.rj.gov.br/');
            }}>   
            <Text>Corpo de Bombeiros Militar RJ</Text>
            </TouchableOpacity>
        
            <TouchableOpacity style={styles.TouchableOpacity}
            onPress={() => {
              Linking.openURL('http://www.defesacivil.rj.gov.br/');
            }}>   
            <Text>Defesa Civil RJ</Text>
            </TouchableOpacity>
        
            <TouchableOpacity style={styles.TouchableOpacity}
            onPress={() => {
              Linking.openURL('https://servicos.receita.fazenda.gov.br/Servicos/CPF/ConsultaSituacao/ConsultaPublica.asp');
            }}>   
            <Text>Receita Federal</Text>
            </TouchableOpacity>
        
        
      </ScrollView>

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

  TouchableOpacity: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  }

});
