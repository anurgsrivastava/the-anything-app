import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { default as Colors } from "../resources/colors";

function Detail(props) {
  const { route, navigation } = props;
  const { item } = route.params;
  const { name, home, species } = item;
  return (
    <View style={styles.container}>
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
    flexDirection: "column",
    height: 150,
    justifyContent: "space-around",
    margin: 10,
    padding: 10,
    width: 325
  },
  cardText: {
    color: Colors.parrotBlue,
    fontSize: 18
  },
  container: {
    alignItems: "center",
    backgroundColor: Colors.white,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around"
  }
});

export default Detail;
