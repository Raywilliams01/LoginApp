import React from "react";
import TabNavigation from "../../navigation/AuthNav";
import { View, Image, StyleSheet } from "react-native";
import appIcon from "../../../assets/img";
import { SecondaryButton } from "../../components/Button/Button";

export default () => {
  const { container, subContainer, imgStyle } = styles;
  return (
    <View style={container}>
      <Image source={appIcon.loginIcon} style={imgStyle} />
      <View style={subContainer}>
        <TabNavigation />
      </View>
      <SecondaryButton title={"Continue as Guest"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  subContainer: {
    borderColor: "black",
    borderRadius: 20,
    height: 312,
    width: 272,
    justifyContent: "center",
    marginBottom: 30,
  },
  imgStyle: {
    marginBottom: 30,
  },
});
