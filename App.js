import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Apps from "./src/Apps";

export default function App() {
  return <Apps />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
