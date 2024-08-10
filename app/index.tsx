import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Name</Text>
      <TextInput 
      placeholder="Enter your name"
      style={styles.textInputStyle}
      keyboardType="default"
      />
      <Text>Surname</Text>
      <TextInput
      placeholder="Enter your surname"
      style={styles.textInputStyle} />
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
});
