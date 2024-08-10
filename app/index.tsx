import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import React, { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  return (
    <View style={styles.container}>
      <Text>Name</Text>
      <TextInput
        placeholder="Enter your name"
        style={styles.textInputStyle}
        onChangeText={setName}
        value={name}
      />
      <Text>Surname</Text>
      <TextInput
        placeholder="Enter your surname"
        style={styles.textInputStyle}
        onChangeText={setSurname}
        value={surname}
      />

      <Pressable
        style={({ pressed }) => [
          { backgroundColor: pressed ? "gray" : "blue" },
          styles.button,
        ]}
        onPress={() => alert(`Hello ${name} ${surname}`)}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>
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
    justifyContent: "center"
  },
  buttonText: {
    fontWeight: "bold",
    color: "white",
  },
});
