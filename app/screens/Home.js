import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { default as Colors } from "../resources/colors";

const character = {
  name: "Anurag Srivastava",
  home: "Wayne Manor",
  species: "Superhero"
};

function Home(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("Detail", { item: character })}
      >
        <Text style={styles.buttonText}>Who is {character.name}?</Text>
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
    color: Colors.parrotBlue,
    fontSize: 20
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

export default Home;
