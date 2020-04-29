import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { default as Colors } from "../resources/colors";

function Detail(props) {
  const { route, navigation } = props;
  const { item } = route.params;
  const { name, home, species } = item;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Detail Screen</Text>
      <View style={styles.card}>
        <Text style={styles.cardText}>Name: {name}</Text>
        <Text style={styles.cardText}>Home: {home}</Text>
        <Text style={styles.cardText}>Job: {species}</Text>
      </View>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("Settings")}
      >
        <Text style={styles.buttonText}>Go to Settings</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: Colors.black,
    borderRadius: 5,
    margin: 20,
    padding: 10
  },
  buttonText: {
    color: Colors.white,
    fontSize: 20
  },
  card: {
    alignItems: "center",
    backgroundColor: Colors.black,
    borderRadius: 10,
    height: 100,
    margin: 10,
    padding: 10,
    width: 350
  },
  cardText: {
    color: Colors.parrotBlue,
    fontSize: 18,
    marginBottom: 5
  },
  container: {
    alignItems: "center",
    backgroundColor: Colors.white,
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: Colors.black,
    fontSize: 24,
    fontWeight: "bold"
  }
});

export default Detail;
