import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  Pressable,
} from "react-native";

type Props = {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const Loading = ({ setLoading }: Props) => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => setLoading(false)}
        style={styles.closeButtonContainer}
      >
        <Text style={styles.closeButton}>X</Text>
      </Pressable>

      <ActivityIndicator size={"large"} color={"blue"} />
      <Text style={styles.loadingText}>Loading...</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: "tomato",
    alignItems: "center",
    justifyContent: "center",
  },
  loadingText: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 20,
  },
  closeButtonContainer: {
    backgroundColor: "black",
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 50,
    right: 10,
  },
  closeButton: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
