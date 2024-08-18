import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { CustomTextInput, CustomButton } from "../components";
import { NavigationProp } from "@react-navigation/native";

const SignupPage = ({ navigation }: { navigation: NavigationProp<any> }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView contentContainerStyle={styles.scrollViewContent}> */}
      <View style={styles.title}>
        <Image
          source={require("../../assets/images/signupIcon.png")}
          style={styles.image}
        />
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
        <Pressable
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={{ fontWeight: "bold" }}>
            Already have an account? Login
          </Text>
        </Pressable>
      </View>
      {/* </ScrollView> */}
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
  // scrollViewContent: {
  //   flexGrow: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   borderWidth: 1,
  // },
  signUp: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    marginBottom: 30,
  },
  title: {
    flex: 2,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  textInputContainer: {
    flex: 2,
    paddingVertical: 20,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  signUpOptions: {
    flex: 2,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});
