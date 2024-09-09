import { StyleSheet, View, Image, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { Loading, CustomTextInput, CustomButton } from "@/src/components";
import { useSelector, useDispatch } from "react-redux";
import { setLoading } from "@/src/redux/userSlice";
import { login, autoLogin } from "@/src/redux/userSlice";

const Loginpage = ({ navigation }: { navigation: any }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // userSlice içerisindeki verileri almak için useSelector kullanılır.
  const { loading, error } = useSelector((state: any) => state.user);

  // userSlice içerisindeki verileri değiştirmek için useDispatch kullanılır.
  const dispatch = useDispatch();

  // kullanıcı otomatik giriş işlemleri
  useEffect(() => {
    dispatch(autoLogin() as any);
  }, []);
  

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/loginIcon.png")}
        style={styles.logo}
      />

      <CustomTextInput
        title="Email"
        isSecureText={false}
        handleOnChangeText={(text) => setEmail(text)}
        handleValue={email}
        handlePlaceholder="Enter your email"
      />

      <CustomTextInput
        title="Password"
        isSecureText={true}
        handleOnChangeText={(password) => setPassword(password)}
        handleValue={password}
        handlePlaceholder="Enter your password"
      />

      <Text>{error}</Text>

      <CustomButton
        title="Login"
        setWidth="80%"
        handleOnPress={() => {
          dispatch(login({ email, password }) as any);
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

      {loading ? (
        <Loading setLoading={() => dispatch(setLoading(false))} />
      ) : null}
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
