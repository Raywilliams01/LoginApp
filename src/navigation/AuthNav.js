import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { StyleSheet } from "react-native";
import { LightGrey, PrimaryColor } from "../utls/Colors";
import LoginScreen from "../screens/AuthScreen/Login/LoginScreen";
import SignUpScreen from "../screens/AuthScreen/SignUp/SignUpScreen";

const Tab = createMaterialTopTabNavigator();

const TabNavigation = () => {
  const { container } = styles;

  const tabStyle = {
    upperCaseLabel: false,
    labelStyle: { fontSize: 16 },
    activeTintColor: PrimaryColor,
    inactiveTintColor: "grey",
    indicatorStyle: {
      backgroundColor: PrimaryColor,
    },
  };

  return (
    <Tab.Navigator style={container} tabBarOptions={tabStyle}>
      <Tab.Screen name="Login" component={LoginScreen} />
      <Tab.Screen name="Sign Up" component={SignUpScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    elevation: 8,
    borderWidth: 0.2,
  },
});

export default TabNavigation;
