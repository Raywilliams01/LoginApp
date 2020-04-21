import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { PrimaryColor, SecondaryColor } from "../../utls/Colors";

export const PrimaryButton = ({ title, buttonStyle, onPress }) => {
  const { btnStyles, titleStyle, primaryStyle } = styles;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[btnStyles, primaryStyle, buttonStyle]}
    >
      <Text style={titleStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export const SecondaryButton = ({ title, buttonStyle, onPress }) => {
  const { btnStyles, titleStyle, secondaryStyle } = styles;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[btnStyles, secondaryStyle, buttonStyle]}
    >
      <Text style={titleStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnStyles: {
    height: 46,
    width: 312,
    borderRadius: 23,
  },
  primaryStyle: {
    backgroundColor: PrimaryColor,
    alignItems: "center",
    justifyContent: "center",
  },
  secondaryStyle: {
    backgroundColor: SecondaryColor,
    alignItems: "center",
    justifyContent: "center",
  },
  titleStyle: {
    fontSize: 25,
    color: "white",
  },
});
