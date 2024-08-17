import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { CustomTextInput, CustomButton } from "../components";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.title}>
          <Text style={styles.signUp}>Sign Up</Text>
        </View>

        <View style={styles.textInputContainer}>
          <CustomTextInput
            title="Name"
            isSecureText={false}
            handleOnChangeText={setName}
            handleValue={name}
            handlePlaceholder="Enter your name"
          />
          <CustomTextInput
            title="Email"
            isSecureText={false}
            handleOnChangeText={setEmail}
            handleValue={email}
            handlePlaceholder="Enter your email"
          />
          <CustomTextInput
            title="Password"
            isSecureText={true}
            handleOnChangeText={setPassword}
            handleValue={password}
            handlePlaceholder="Create your password"
          />
        </View>
        <View style={styles.signUpOptions}>
          <CustomButton
            title="Sign Up"
            setWidth="80%"
            handleOnPress={() => {
              console.log("Sign up button pressed" + name + email + password);
            }}
            buttonColor="blue"
            pressetButtonColor="gray"
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignupPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "tomato",
  },
  signUp: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    marginBottom: 30,
  },
  title: {
    flex: 1,
  },
  textInputContainer: {
    flex: 2,
    paddingVertical: 20,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  signUpOptions: {
    flex: 3,
    width: "100%",
    alignItems: "center",
  },
});
