import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, TextInput, Image } from "react-native";

import { SwipeButton } from "react-native-expo-swipe-button";
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

//Home page
function Scan({ navigation }) {
  const [url, setUrl] = useState("");
  const [verified, setVerified] = useState("");
  const [token, setToken] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const token = await AsyncStorage.getItem("userAuth");
    setToken(token);
  };
  getData();
  return (
    <View style={style.container}>
      <View style={style.nav}>
        <Image
          source={require("../../images/logoicon.png")}
          style={style.LogoImg}
        />
        <View style={style.avatarWrap}>
          <Image
            source={require("../../images/avathar.png")}
            style={style.avatar}
          />
        </View>
      </View>
      <View>
        <Image
          source={require("../../images/safe-image.png")}
          style={{ width: 200, height: 200 }}
          resizeMode="contain"
        />
      </View>
      <Text
        style={{
          color: "white",
          fontSize: 30,
          fontWeight: "bold",
          marginVertical: 20,
        }}
      >
        {/* Inspect a Web Link! */}
        Scan a Link!
      </Text>
      {/* <View style={style.border} /> */}
      <TextInput
        value={url}
        placeholder="Paste your url here"
        placeholderTextColor="#e1e4e6"
        style={style.inputField}
        onChangeText={(value) => {
          return setUrl(value);
        }}
      />
      <View style={style.swapShadow}>
        <SwipeButton
          Icon={
            <MaterialIcons
              name="keyboard-arrow-right"
              size={50}
              color="white"
            />
          }
          onComplete={() => {
            if (url === "") {
              alert("Enter a valid URL");
              return;
            } else {
              token
                ? navigation.navigate("Results", { url: url })
                : navigation.navigate("SignUp");
              setUrl("");
            }
          }}
          title="Swipe to Scan"
          borderRadius={50}
          titleStyle={{
            color: "#3b3939",
            fontSize: 23,
            // color: "black",
          }}
          circleBackgroundColor="#261b6a"
          containerGradientProps={{
            // colors: ["#2c2a2e", "#1b1b1b"],
            colors: ["#53ce77", "#19d87d"],
            start: [0, 0.5],
            end: [1, 0.5],
          }}
          containerStyle={{
            backgroundColor: "#000",
          }}
          underlayTitle="Swipe to Scan"
          underlayTitleStyle={{
            color: "white",
          }}
          underlayStyle={{
            borderRadius: 50,
          }}
          underlayContainerGradientProps={{
            // colors: ["#39abe7", "#0783b6"],
            colors: ["#433886", "#261b6a"],
            start: [0, 0.5],
            end: [1, 0.5],
          }}
        />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "black",
    // backgroundColor: "#150e52",
    backgroundColor: "#170e51",
  },
  nav: {
    position: "absolute",
    top: 0,
    width: "100%",
  },
  LogoImg: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    position: "absolute",
    top: 55,
    left: 30,
    // tintColor: "#c8c2f1",
  },
  avatar: {
    width: 48,
    height: 48,
    resizeMode: "contain",
  },
  avatarWrap: {
    borderWidth: 1,
    borderColor: "#2c2a2e",
    borderRadius: 50,
    padding: 2,
    position: "absolute",
    top: 55,
    right: 30,
    // backgroundColor: "white",
    backgroundColor: "#c8c2f1",
  },
  border: {
    width: "100%",
    height: 1,
    backgroundColor: "#2c2a2e",
    position: "absolute",
    top: 60,
  },
  swapShadow: {
    width: "91%",
    height: 71,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    // backgroundColor: "#0783b6",
    backgroundColor: "#3b3370",
    marginVertical: 25,
    position: "relative",
    top: 3,
  },
  //Input field Style
  inputField: {
    backgroundColor: "transparent",
    borderColor: "#3b3370",
    // borderColor: "#0783b6",
    borderWidth: 2,
    width: "90%",
    height: 70,
    fontSize: 20,
    borderRadius: 50,
    color: "white",
    padding: 10,
    paddingHorizontal: 30,
  },
});

export default Scan;
