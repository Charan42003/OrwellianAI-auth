import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Dashboard() {
  const [scan, setScan] = useState(0)
  const [phishing, setPhishing] = useState(0)

  // async function getDashData() {
  //   const scans = await AsyncStorage.getItem('@totalScans');
  //   const phishings = await AsyncStorage.getItem('@totalPhishing');

  //   setScan(scans)
  //   setPhishing(phishings)
  // }
  // getDashData();
  return (
    <View style={style.container}>
      <View style={style.nav}>
        <Image
          source={require("../../images/logoicon.png")}
          style={style.LogoImg}
        />
        <View style={style.avatarWrap}>
          <Text style={style.title}>DashBoard</Text>
        </View>
      </View>
      <View style={style.body}>
        <TouchableOpacity>
          <LinearGradient
            // Background Linear Gradient
            colors={["#3b3370", "#5445b9"]}
            style={style.card}
          >
            <Image
              source={require("../../assets/icons/scan-icon.png")}
              style={{
                // tintColor: "#c8c2f1",
                tintColor: "#eee",
                width: 60,
                height: 60,
              }}
            />
            <Text
              style={{
                color: "#c8c2f1",
                textAlign: "right",
                fontSize: 60,
                marginTop: 20,
                fontWeight: "bold",
              }}
            >
              {scan}
            </Text>
            <Text
              style={{
                color: "#eee",
                textAlign: "right",
              }}
            >
              Total URL's scanned
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity>
          <LinearGradient
            // Background Linear Gradient
            colors={["#3b3370", "#5445b9"]}
            style={style.card}
          >
            <Image
              source={require("../../assets/icons/risk_score.png")}
              style={{
                // tintColor: "#c8c2f1",
                tintColor: "#eee",
                width: 60,
                height: 60,
              }}
            />
            <Text
              style={{
                color: "#c8c2f1",
                textAlign: "right",
                fontSize: 60,
                marginTop: 20,
                fontWeight: "bold",
              }}
            >
              {phishing}
            </Text>
            <Text
              style={{
                color: "#eee",
                textAlign: "right",
              }}
            >
              Total phishing links scanned
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
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

  body: {
    marginTop: 120,
    paddingHorizontal: 30,
  },

  card: {
    width: "100%",
    height: 250,
    borderRadius: 20,
    position: "relative",
    padding: 36,
    marginTop: 30,
  },
});

export default Dashboard;
