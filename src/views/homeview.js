import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Linking,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function App({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView>

        <TouchableOpacity style={styles.TouchableOpacity}>
          <Text
            title="História de Cavalcanti"
            onPress={() => {
              navigation.navigate("Historia");
            }}
          >
            Historia de Cavalcanti
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.TouchableOpacity}>
          <Text
            title="Noticias"
            onPress={() => {
              navigation.navigate("Noticias");
            }}
          >
            Noticias
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.TouchableOpacity}>
          <Text
            title="Comerciantes Parceiros"
            onPress={() => {
              navigation.navigate("Comerciantes Parceiros");
            }}
          >
            Comerciantes do Bairro
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.TouchableOpacity}>
          <Text
            style={styles.hyperlinkStyle}
            onPress={() => {
              Linking.openURL("https://www.detran.rj.gov.br/index.asp");
            }}
          >
            Detran RJ
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.TouchableOpacity}>
          <Text
            style={styles.hyperlinkStyle}
            onPress={() => {
              Linking.openURL(
                "https://www.caixa.gov.br/Paginas/home-caixa.aspx"
              );
            }}
          >
            Caixa Economica Federal
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.TouchableOpacity}>
          <Text
            style={styles.hyperlinkStyle}
            onPress={() => {
              Linking.openURL("https://www.bb.com.br/pbb/pagina-inicial#/");
            }}
          >
            Banco do Brasil
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.TouchableOpacity}>
          <Text
            style={styles.hyperlinkStyle}
            onPress={() => {
              Linking.openURL("https://www.spcbrasil.org.br/");
            }}
          >
            SPC
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.TouchableOpacity}>
          <Text
            style={styles.hyperlinkStyle}
            onPress={() => {
              Linking.openURL("https://www.gov.br/inss/pt-br");
            }}
          >
            Inss
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.TouchableOpacity}>
          <Text
            style={styles.hyperlinkStyle}
            onPress={() => {
              Linking.openURL(
                "https://www.gov.br/trabalho-e-previdencia/pt-br"
              );
            }}
          >
            Ministerio do Trabalho e Previdência
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.TouchableOpacity}>
          <Text
            style={styles.hyperlinkStyle}
            onPress={() => {
              Linking.openURL(
                "https://www.jusbrasil.com.br/l/advogados-online"
              );
            }}
          >
            Advogados Online
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.TouchableOpacity}>
          <Text
            style={styles.hyperlinkStyle}
            onPress={() => {
              Linking.openURL(
                "http://portal.mec.gov.br/acessibilidade-sp-940674614/190-secretarias-112877938/setec-1749372213/12556-rio-de-janeiro"
              );
            }}
          >
            Ministerio da Educação RJ
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.TouchableOpacity}>
          <Text
            style={styles.hyperlinkStyle}
            onPress={() => {
              Linking.openURL("https://www.fetranspor.com.br/");
            }}
          >
            Fetranspor RJ
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.TouchableOpacity}>
          <Text
            style={styles.hyperlinkStyle}
            onPress={() => {
              Linking.openURL(
                "https://www.cartaoriocard.com.br/rcc/institucional"
              );
            }}
          >
            Riocard RJ
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.TouchableOpacity}>
          <Text
            style={styles.hyperlinkStyle}
            onPress={() => {
              Linking.openURL("http://prefeitura.rio/todas-as-noticias/");
            }}
          >
            Prefeitura do RJ
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.TouchableOpacity}>
          <Text
            style={styles.hyperlinkStyle}
            onPress={() => {
              Linking.openURL("http://www.rj.gov.br/");
            }}
          >
            Governo do Estado RJ
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.TouchableOpacity}>
          <Text
            style={styles.hyperlinkStyle}
            onPress={() => {
              Linking.openURL("https://sepm.rj.gov.br/");
            }}
          >
            Polícia Militar RJ
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.TouchableOpacity}>
          <Text
            style={styles.hyperlinkStyle}
            onPress={() => {
              Linking.openURL("http://www.policiacivilrj.net.br/index.php");
            }}
          >
            Polícia Civil RJ
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.TouchableOpacity}>
          <Text
            style={styles.hyperlinkStyle}
            onPress={() => {
              Linking.openURL("http://www.defesacivil.rj.gov.br/");
            }}
          >
            Defesa Civil RJ
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.TouchableOpacity}>
          <Text
            style={styles.hyperlinkStyle}
            onPress={() => {
              Linking.openURL("http://www.cbmerj.rj.gov.br/");
            }}
          >
            Corpo de Bombeiros Militar RJ
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.TouchableOpacity}>
          <Text
            style={styles.hyperlinkStyle}
            onPress={() => {
              Linking.openURL(
                "https://servicos.receita.fazenda.gov.br/Servicos/CPF/ConsultaSituacao/ConsultaPublica.asp"
              );
            }}
          >
            Receita Federal
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B8EAED",
    paddingTop: 10,
    paddingHorizontal: 20,
  },

  TouchableOpacity: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    gap:14
  },
});
