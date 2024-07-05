import React from "react";
import { 
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
 } from "react-native";

export default function App({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.TouchableOpacity}
        onPress={() => {
          navigation.navigate("Uber do Bairro");
        }}
      >
        <Image
          style={styles.Image}
          source={require("../../assets/uber/index.png")}
        />
        <Text>Uber do Bairro</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.TouchableOpacity}
        onPress={() => {
          navigation.navigate("Comerciantes Parceiros");
        }}
      >
        <Image
          style={styles.Image}
          source={require("../../assets/comercio/images.png")}
        />
        <Text>Comercio do Bairro</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.TouchableOpacity}
        onPress={() => {
          navigation.navigate("Utilidade Publica");
        }}
      >
        <Image
          style={styles.Image}
          source={require("../../assets/utilidadepublica/index.png")}
        />
        <Text>Utilidade Pública</Text>
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
    flexDirection: "row",
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
  },

  Image: {
    marginRight: 16,
    height: 50,
    width: 50,
    gap:14
  },
});
