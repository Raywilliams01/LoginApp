import React from "react";
import { View, StyleSheet } from "react-native";
import { Input } from "../../../components/Input/input";
import { PrimaryButton } from "../../../components/Button/Button";

const SignUpScreen = ({ navigation }) => {
  const { container, content, bthStyle } = styles;
  const navigateTo = () => navigation.replace("Home");
  return (
    <View style={content}>
      <View style={container}>
        <Input placeHolder={"Email"} />
        <Input placeHolder={"Password"} />
      </View>
      <PrimaryButton
        title={"Sign Up"}
        buttonStyle={bthStyle}
        onPress={navigateTo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 20,
  },
  bthStyle: {
    height: 46,
    width: 250,
    alignSelf: "center",
    borderRadius: 10,
    marginBottom: 30,
  },
});

export default SignUpScreen;
