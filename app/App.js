import React, { useEffect } from "react";
import SplashScreen from "react-native-splash-screen";
import MainStackNavigator from "./navigation/MainStackNavigator";

export default function App() {
  useEffect(() => SplashScreen.hide());
  return <MainStackNavigator />;
}
