import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { default as Colors } from "../resources/colors";

function Settings(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings</Text>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.popToTop()}
      >
        <Text style={styles.buttonText}>Go to Home</Text>
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

export default Settings;
