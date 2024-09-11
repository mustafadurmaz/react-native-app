import { Pressable, StyleSheet, Text, View, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { CustomButton } from "../components";
import { useDispatch } from "react-redux";
import { logout } from "../redux/userSlice";

const HomePage = () => {
  const [data, setData] = useState<any>([]);
  const [isSaved, setIsSaved] = useState<boolean>(false);

  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, [isSaved]);

  // Firestore'a veri gönderme işlemi
  const sendData = async () => {
    try {
      const docRef = await addDoc(collection(db, "reactNativeLesson"), {
        title: "Zero to Hero",
        content: "React Native is awesome",
        lesson: Math.floor(Math.random() * 100) + 1,
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  // Firestore'dan veri çekme işlemi

  const getData = async () => {
    const allData: any = [];
    try {
      const querySnapshot = await getDocs(collection(db, "reactNativeLesson"));
      querySnapshot.forEach((doc) => {
        // console.log(`${doc.id} => ${doc.data()}`);
        allData.push({ ...doc.data(), id: doc.id });
      });
      console.log("allData", allData);

      setData(allData);
    } catch (error) {
      console.log("Error getting documents: ", error);
    }
  };

  // Firestore'dan veri silme işlemi

  const deleteData = async (id: string) => {
    try {
      await deleteDoc(doc(db, "reactNativeLesson", id));
      console.log("Document successfully deleted!");
    } catch (error) {}
  };

  // Firestore'dan veri güncelleme işlemi

  const updateData = async (id: string) => {
    await updateDoc(doc(db, "reactNativeLesson", id), {
      title: "Zero to Hero",
      content: "React Native is awesome",
      lesson: 100,
    });
  };

  // Kullanıcı çıkış işlemleri

  const handleLogout = () => {
    dispatch(logout() as any);
  };

  const renderItem = ({ item }: { item: any }) => {
    return (
      <View>
        <Text>{item.id}</Text>
        <Text>{item.title}</Text>
        <Text>{item.content}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />

      <CustomButton
        title={"Save"}
        setWidth={"40%"}
        buttonColor="blue"
        pressetButtonColor="gray"
        handleOnPress={() => {
          sendData();
          setIsSaved((isSaved) => !isSaved);
        }}
      />
      <CustomButton
        title={"Get Data"}
        setWidth={"40%"}
        buttonColor="blue"
        pressetButtonColor="gray"
        handleOnPress={getData}
      />
      <CustomButton
        title={"Delete Data"}
        setWidth={"40%"}
        buttonColor="blue"
        pressetButtonColor="gray"
        handleOnPress={() => deleteData("25WAeE04f1ZTw29m4NDo")}
      />
      <CustomButton
        title={"Update Data"}
        setWidth={"40%"}
        buttonColor="blue"
        pressetButtonColor="gray"
        handleOnPress={() => updateData("1BET5pfxdc8kBs0vXtYQ")}
      />
      <CustomButton
        title={"LOGOUT"}
        setWidth={"40%"}
        buttonColor="red"
        pressetButtonColor="gray"
        handleOnPress={handleLogout}
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
