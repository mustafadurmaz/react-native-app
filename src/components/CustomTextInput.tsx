import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

interface CustomTextInputProps {
  title: string;
  isSecureText: boolean;
  handleOnChangeText: (text: string) => void;
  handleValue: string;
  handlePlaceholder: string;
}

const CustomTextInput = ({
  title,
  isSecureText,
  handleOnChangeText,
  handleValue,
  handlePlaceholder,
}: CustomTextInputProps) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputBoxText}>{title}</Text>
      <TextInput
        secureTextEntry={isSecureText}
        placeholder={handlePlaceholder}
        style={styles.textInputStyle}
        onChangeText={handleOnChangeText}
        value={handleValue}
      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  inputContainer: {
    width: "80%",
  },
  inputBoxText: {
    fontWeight: "bold",
    alignSelf: "flex-start",
    color: "white",
  },
  textInputStyle: {
    borderBottomWidth: 0.5,
    borderColor: "white",
    width: "100%",
    height: 50,
    borderRadius: 10,
    marginVertical: 10,
    textAlign: "center",
  },
});
