import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import React, { useState } from "react";
import Loading from "@/src/components/Loading";

const Loginpage = ({ navigation }: { navigation: any }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/loginIcon.png")}
        style={styles.logo}
      />
      <View style={styles.inputContainer}>
        <Text style={styles.inputBoxText}>Email</Text>
        <TextInput
          inputMode="email"
          placeholder="Enter your email"
          style={styles.textInputStyle}
          onChangeText={setName}
          value={name}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputBoxText}>Password</Text>
        <TextInput
          secureTextEntry={true}
          placeholder="Enter your password"
          style={styles.textInputStyle}
          onChangeText={setSurname}
          value={surname}
        />
      </View>

      <Pressable
        style={({ pressed }) => [
          { backgroundColor: pressed ? "gray" : "blue" },
          styles.button,
        ]}
        onPress={() => {
          setLoading(true);
        }}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>

      <Pressable
        style={({ pressed }) => [
          { backgroundColor: pressed ? "gray" : "lightgray", marginTop: 50 },
          styles.signupButton,
        ]}
        onPress={() => {
          navigation.navigate("SignUp");
        }}
      >
        <Text style={styles.buttonText}>Signup</Text>
      </Pressable>
      {loading ? <Loading setLoading={setLoading} /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    width: "80%",
  },
  textInputStyle: {
    borderBottomWidth: 0.5,
    width: "100%",
    height: 50,
    borderRadius: 10,
    marginVertical: 10,
    textAlign: "center",
  },
  button: {
    width: "80%",
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  buttonText: {
    fontWeight: "bold",
    color: "white",
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
  inputBoxText: {
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
});

export default Loginpage;
