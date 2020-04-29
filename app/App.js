import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import SplashScreen from "react-native-splash-screen";
import { default as Colors } from "./resources/colors";

export default function App() {
  useEffect(() => SplashScreen.hide());

  return (
    <View style={styles.container}>
      <Text>Hello!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: Colors.white,
    flex: 1,
    justifyContent: "center"
  }
});
