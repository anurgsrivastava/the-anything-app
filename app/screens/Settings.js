import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { default as Colors } from "../resources/colors";

function Settings(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../resources/images/batman_logo.png")}
      />
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
    padding: 15
  },
  buttonText: {
    color: Colors.white,
    fontSize: 20
  },
  container: {
    alignItems: "center",
    backgroundColor: Colors.white,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around"
  },
  image: {
    borderRadius: 130,
    height: 130,
    width: 130
  }
});

export default Settings;
