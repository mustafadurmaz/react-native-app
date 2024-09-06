import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { CustomButton } from "../components";

const HomePage = () => {
  const [data, setData] = useState<any>([]);
  console.log("data", data);

  // Firestore'a veri gönderme işlemi
  const sendData = async () => {
    try {
      const docRef = await addDoc(collection(db, "reactNativeLesson"), {
        title: "Zero to Hero",
        content: "React Native is awesome",
        lesson: 95,
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  // Firestore'dan veri çekme işlemi

  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "reactNativeLesson"));
    querySnapshot.forEach((doc) => {
      // console.log(`${doc.id} => ${doc.data()}`);
      setData([...data, doc.data()]);
    });
  };

 
  return (
    <View style={styles.container}>
      <Text>HomePage</Text>
      <CustomButton
        title={"Save"}
        setWidth={"40%"}
        buttonColor="blue"
        pressetButtonColor="gray"
        handleOnPress={sendData}
      />
      <CustomButton
        title={"Get Data"}
        setWidth={"40%"}
        buttonColor="blue"
        pressetButtonColor="gray"
        handleOnPress={getData}
      />
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "tomato",
  },
});
