import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import UserStack from "./UserStack";
import { useSelector } from "react-redux";

const RootNavigation = () => {

  const isAuth = useSelector((state: any) => state.user);

  // const isAuth = false;

  return (
    <NavigationContainer independent={true} >
      {!isAuth ? <AuthStack /> : <UserStack />}
    </NavigationContainer>
  );
};

export default RootNavigation;
