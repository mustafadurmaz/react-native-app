import {
  StyleSheet,
  Text,
  View,
  Pressable,
  PressableStateCallbackType,
} from "react-native";
import React from "react";

interface CustomButtonProps {
  title: string;
  setWidth: string;
  handleOnPress: () => void;
  buttonColor?: string;
  pressetButtonColor?: string;
}

const CustomButton = ({
  title,
  setWidth,
  handleOnPress,
  buttonColor,
  pressetButtonColor,
}: CustomButtonProps) => {
  return (
    <Pressable
      onPress={handleOnPress}
      style={({ pressed }: PressableStateCallbackType) => [
        {
          backgroundColor: pressed ? pressetButtonColor : buttonColor,
          marginTop: 50,
          width: setWidth as any,
        },
        styles.button,
      ]}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
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
});
