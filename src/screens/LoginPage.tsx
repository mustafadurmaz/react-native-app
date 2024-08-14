import {
  StyleSheet,
  View,
  Image,
} from "react-native";
import React, { useState } from "react";
import { Loading, CustomTextInput, CustomButton } from "@/src/components";

const Loginpage = ({ navigation }: { navigation: any }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/loginIcon.png")}
        style={styles.logo}
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
        handlePlaceholder="Enter your password"
      />

      <CustomButton
        title="Login"
        setWidth="80%"
        handleOnPress={() => {
          setLoading(true);
        }}
        buttonColor="blue"
        pressetButtonColor="gray"
      />

      <CustomButton
        title="Sign up"
        setWidth="30%"
        handleOnPress={() => {
          navigation.navigate("SignUp");
        }}
        buttonColor="gray"
        pressetButtonColor="lightgray"
      />

      {loading ? <Loading setLoading={setLoading} /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "tomato",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    width: "80%",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  signupButton: {
    width: "30%",
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Loginpage;
