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

export default function App() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/loginIcon.png")}
        style={styles.logo}
      />
      <Text>Email</Text>
      <TextInput
        inputMode="email"
        placeholder="Enter your email"
        style={styles.textInputStyle}
        onChangeText={setName}
        value={name}
      />
      <Text>Password</Text>
      <TextInput
        secureTextEntry={true}
        placeholder="Enter your password"
        style={styles.textInputStyle}
        onChangeText={setSurname}
        value={surname}
      />

      <Pressable
        style={({ pressed }) => [
          { backgroundColor: pressed ? "gray" : "blue" },
          styles.button,
        ]}
        onPress={() => {setLoading(true)}}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>
      {loading ? <Loading setLoading={setLoading} /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textInputStyle: {
    borderWidth: 1,
    width: "80%",
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
  },
  buttonText: {
    fontWeight: "bold",
    color: "white",
  },
  logo: {
    width: 100,
    height: 100,
  },
});
