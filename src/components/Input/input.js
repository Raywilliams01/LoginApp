import React from "react";
import { TextInput, StyleSheet } from "react-native";

const Input = ({ placeHolder }) => {
  const { container } = styles;
  return (
    <TextInput
      autoCapitalize="words"
      style={container}
      placeholder={placeHolder}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    height: 48,
    borderColor: "gray",
    backgroundColor: "white",
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
    padding: 5,
    fontSize: 20,
  },
});

export { Input };
