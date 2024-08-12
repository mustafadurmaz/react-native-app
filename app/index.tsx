import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Loginpage from "@/src/screens/LoginPage";
import SignupPage from "@/src/screens/SignupPage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{headerShown:false}} >
        <Stack.Screen
          name="Login"
          component={Loginpage}
        />
        <Stack.Screen name="SignUp" component={SignupPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
