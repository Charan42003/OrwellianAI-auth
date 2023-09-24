import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Profile({ navigation }) {
  const [name, setName] = useState("Guest User.");
  const [email, setEmail] = useState("Offline.");
  const [token, setToken] = useState(null);
  const [clik, setclik] = useState(false);

  // useEffect(() => {
  const getData = async () => {
    const token = await AsyncStorage.getItem("userAuth");
    const name = await AsyncStorage.getItem("userName");
    const email = await AsyncStorage.getItem("userEmail");
    setToken(token);
    setName(name);
    setEmail(email);
  };
  getData();
  console.log("running");
  // }, []);

  const signout = async () => {
    await AsyncStorage.removeItem("userAuth");
    await AsyncStorage.removeItem("userName");
    await AsyncStorage.removeItem("userEmail");
    await AsyncStorage.setItem("userName", "Guest User.");
    await AsyncStorage.setItem("userEmail", "Offline");
    const token = await AsyncStorage.getItem("userAuth");
    const name = await AsyncStorage.getItem("userName");
    const email = await AsyncStorage.getItem("userEmail");
    setToken(token);
    setName(name);
    setEmail(email);
    setclik(true);
  };
  clik ? getData() : getData();
  return (
    <View style={style.container}>
      <View style={style.nav}>
        <Image
          source={require("../../images/logoicon.png")}
          style={style.LogoImg}
        />

        <View style={style.avatarWrap}>
          <Text style={style.title}>Settings</Text>
        </View>
      </View>

      <View style={style.profile_wrap}>
        <View>
          <Text style={style.profile_name}>{name}</Text>
          <Text style={style.profile_desc}>{email}</Text>
        </View>
        <View style={style.profile_img_wrap}>
          <Image
            source={require("../../images/avathar.png")}
            style={style.profile_img}
          />
        </View>
      </View>
      {/* <Button title="set" onPress={() => storeData()} /> */}
      <Button title="get" onPress={() => getData()} />
      <TouchableOpacity
        onPress={() => (token ? signout() : navigation.navigate("SignUp"))}
      >
        <View style={style.btn}>
          <Text style={{ fontSize: 30, color: "white", textAlign: "center" }}>
            {token ? "Sign Out" : "Sign Up"}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#170e51",
  },
  nav: {
    width: "100%",
    display: "none",
    position: "relative",
  },
  LogoImg: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    position: "absolute",
    top: 55,
    left: 30,
  },
  avatar: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  avatarWrap: {
    padding: 5,
    position: "absolute",
    top: 55,
    right: 30,
  },
  title: {
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
  },
  border: {
    width: "100%",
    height: 1,
    backgroundColor: "#2c2a2e",
    position: "absolute",
    top: 60,
  },
  profile_wrap: {
    padding: 20,
    marginTop: 150,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  profile_name: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  profile_desc: {
    color: "#c8c2f1",
  },
  profile_img: {
    width: 160,
    height: 160,
  },
  profile_img_wrap: {
    backgroundColor: "#3b3370",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 70,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 80,
  },
  btn: {
    backgroundColor: "#19d87d",
    padding: 10,
    borderRadius: 16,
    marginHorizontal: 10,
    marginTop: 50,
  },
});

export default Profile;
