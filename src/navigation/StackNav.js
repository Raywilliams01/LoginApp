import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AuthScreen from "../screens/AuthScreen";
import Home from "../screens/Home";

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Auth" component={AuthScreen} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default StackNav;
