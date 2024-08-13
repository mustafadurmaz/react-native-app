import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Loginpage, SignupPage } from "../screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login"  screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Loginpage} />
      <Stack.Screen name="SignUp" component={SignupPage} />
    </Stack.Navigator>
  );
};

export default AuthStack;

