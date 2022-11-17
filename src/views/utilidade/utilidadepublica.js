import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Linking,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';

export default function App({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView>

        <TouchableOpacity style={styles.TouchableOpacity}
          onPress={() => {
            Linking.openURL('https://associacaoculturalespacocarioca.000webhostapp.com/');
          }}>
          <Image style={styles.Image}
            source={require('../../../assets/acec/acec.png')}
          />
          <Text>Associação Cultural Espaço Carioca</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.TouchableOpacity}
          onPress={() => {
            navigation.navigate('Historia');
          }}>
          <Image style={styles.Image}
            source={require('../../../assets/cavalcanti/index.jpeg')}
          />
          <Text>História de Cavalcanti</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.TouchableOpacity}
          onPress={() => {
            navigation.navigate('Noticias');
          }}>
          <Image style={styles.Image}
            source={require('../../../assets/noticias/images.jpeg')}
          />
          <Text>Notícias</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.TouchableOpacity}
          onPress={() => {
            Linking.openURL('https://www.detran.rj.gov.br/index.asp');
          }}>
          <Image style={styles.Image}
            source={require('../../../assets/detran/index.jpeg')}
          />
          <Text>Detran RJ</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.TouchableOpacity}
          onPress={() => {
            Linking.openURL('https://www.caixa.gov.br/Paginas/home-caixa.aspx');
          }}>

          <Image style={styles.Image}
            source={require('../../../assets/caixa/index.png')}
          />
          <Text>Caixa Economica Federal</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.TouchableOpacity}
          onPress={() => {
            Linking.openURL('https://www.bb.com.br/pbb/pagina-inicial#/');
          }}>
          <Image style={styles.Image}
            source={require('../../../assets/BB/index.png')}
          />
          <Text>Banco do Brasil</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.TouchableOpacity}
          onPress={() => {
            Linking.openURL('https://www.spcbrasil.org.br/');
          }}>
          <Image style={styles.Image}
            source={require('../../../assets/SPC/index.jpeg')}
          />
          <Text>SPC</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.TouchableOpacity}
          onPress={() => {
            Linking.openURL('https://www.gov.br/inss/pt-br');
          }}>
          <Image style={styles.Image}
            source={require('../../../assets/inss/index.png')}
          />
          <Text>INSS</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.TouchableOpacity}
          onPress={() => {
            Linking.openURL('https://www.gov.br/trabalho-e-previdencia/pt-br');
          }}>
          <Image style={styles.Image}
            source={require('../../../assets/MTE/index.png')}
          />
          <Text>Ministerio do Trabalho e Previdência</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.TouchableOpacity}
          onPress={() => {
            Linking.openURL('https://www.jusbrasil.com.br/l/advogados-online');
          }}>
          <Image style={styles.Image}
            source={require('../../../assets/ADON/index.png')}
          />
          <Text>Advogados Online</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.TouchableOpacity}
          onPress={() => {
            Linking.openURL('http://portal.mec.gov.br/acessibilidade-sp-940674614/190-secretarias-112877938/setec-1749372213/12556-rio-de-janeiro');;
          }}>
          <Image style={styles.Image}
            source={require('../../../assets/MDE/index.png')}
          />
          <Text>Ministerio da Educação RJ</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.TouchableOpacity}
          onPress={() => {
            Linking.openURL('https://www.fetranspor.com.br/');
          }}>
          <Image style={styles.Image}
            source={require('../../../assets/fetranpor/index.jpeg')}
          />
          <Text>Fetranspor RJ</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.TouchableOpacity}
          onPress={() => {
            Linking.openURL('https://www.cartaoriocard.com.br/rcc/institucional');
          }}>
          <Image style={styles.Image}
            source={require('../../../assets/riocard/index.jpeg')}
          />
          <Text>Riocard RJ</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.TouchableOpacity}
          onPress={() => {
            Linking.openURL('http://prefeitura.rio/todas-as-noticias/');
          }}>
          <Image style={styles.Image}
            source={require('../../../assets/prefeitura/index.png')}
          />
          <Text style={{ padding: 10 }}>Prefeitura do RJ</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.TouchableOpacity}
          onPress={() => {
            Linking.openURL('http://www.rj.gov.br/');
          }}>
          <Image style={styles.Image}
            source={require('../../../assets/estado/index.jpeg')}
          />
          <Text>Governo do Estado RJ</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.TouchableOpacity}
          onPress={() => {
            Linking.openURL('https://sepm.rj.gov.br/');
          }}>
          <Image style={styles.Image}
            source={require('../../../assets/pm/index.png')}
          />
          <Text>Polícia Militar RJ</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.TouchableOpacity}
          onPress={() => {
            Linking.openURL('http://www.policiacivilrj.net.br/index.php');
          }}>
          <Image style={styles.Image}
            source={require('../../../assets/pc/index.png')}
          />
          <Text>Polícia Civil RJ</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.TouchableOpacity}
          onPress={() => {
            Linking.openURL('http://www.cbmerj.rj.gov.br/');
          }}>
          <Image style={styles.Image}
            source={require('../../../assets/cb/index.jpeg')}
          />

          <Text>Corpo de Bombeiros Militar RJ</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.TouchableOpacity}
          onPress={() => {
            Linking.openURL('http://www.defesacivil.rj.gov.br/');
          }}>
          <Image style={styles.Image}
            source={require('../../../assets/dc/index.png')}
          />

          <Text>Defesa Civil RJ</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.TouchableOpacity}
          onPress={() => {
            Linking.openURL('https://servicos.receita.fazenda.gov.br/Servicos/CPF/ConsultaSituacao/ConsultaPublica.asp');
          }}>
          <Image style={styles.Image}
            source={require('../../../assets/receitafederal/receita.png')}
          />

          <Text>Receita Federal</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.TouchableOpacity}
          onPress={() => {
            Linking.openURL('https://www.gov.br/prf/pt-br');
          }}>
          <Image style={styles.Image}
            source={require('../../../assets/prf/Prf_brasao_novo.jpg')}
          />

          <Text>Policia Rodoviarea Federal</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.TouchableOpacity}
          onPress={() => {
            Linking.openURL('https://www.prt1.mpt.mp.br/');
          }}>
          <Image style={styles.Image}
            source={require('../../../assets/ministeriopublico/index.png')}
          />

          <Text>Ministerio Público RJ</Text>
        </TouchableOpacity>


      </ScrollView>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,


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
