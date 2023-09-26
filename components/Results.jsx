import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Notifications from "expo-notifications";


Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

const Results = ({ navigation, route }) => {
  const [load, setload] = useState(true);
  //Fetched Data
  const [url, setUrl] = useState("");
  const [ip_address, setip_address] = useState("");
  const [category, setcategory] = useState("");
  const [risk_score, setrisk_score] = useState("");
  const [domain, setdomain] = useState("");
  const [status_code, setstatus_code] = useState("");
  const [adult, setadult] = useState("");
  const [ml_result, setMl_Result] = useState("safe");
  const [screenshot, setScreenshot] = useState(null);
  const [safe, setSafe] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const requestOptions = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${route.params.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: route.params.url,
        }),
      };
      const data = await fetch(
        "https://orwellian-ai.onrender.com/check/url-check",
        requestOptions
      );
      const response = await data.json();
      response.msg && console.log(response.msg);
      // console.log("=========");
      // console.log(response);
      // console.log("=========");
      response.ss && setScreenshot(response.ss);
      const final_data = response.urlInfo;
      console.log(response);
      if (final_data.suspicious) {
        setMl_Result("phishing");
        // await AsyncStorage.setItem('@totalPhishing'= AsyncStorage.getItem("@totalPhishing") + 1)
        // console.log(ml_result);
        setSafe(false);
      }
      if (ml_result == "phishing") {
        console.log(safe);
      }
      setUrl(final_data.final_url);
      setip_address(final_data.ip_address);
      setcategory(final_data.category);
      setrisk_score(final_data.risk_score);
      setdomain(final_data.domain);
      setstatus_code(final_data.status_code);
      if (final_data.adult) {
        setadult("true");
      } else {
        setadult("false");
      }
      await schedulePushNotification(ml_result, final_data.final_url);
      setload(false);
      // await AsyncStorage.setItem('@totalScans'= AsyncStorage.getItem("@totalScans") + 1)
    }
    fetchData();
  }, []);

  const safe_img = require("../images/home-banner2.png");
  const unsafe_img = require("../images/unsafe-image1.png");
  const icon = safe ? safe_img : unsafe_img;
  return (
    <View style={style.container}>
      <View style={{ ...style.nav, display: load ? "none" : "flex" }}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image
            source={require("../images/logoicon.png")}
            style={style.logo}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text style={style.close}>close</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          display: load ? "flex" : "none",
        }}
      >
        <ActivityIndicator size="Large" color="#fff" />
      </View>
      <ScrollView style={{ display: load ? "none" : "block", width: "100%" }}>
        <View style={style.result_img_wrap}>
          <Image
            source={icon}
            resizeMode="contain"
            style={{
              ...style.result_img,
              display: "flex",
            }}
          />
        </View>
        <Text
          style={{
            color: "white",
            fontSize: 30,
            paddingTop: 10,
            textAlign: "center",
          }}
        >{`It's a ${ml_result} Link.`}</Text>

        {/* url  */}
        <View style={style.result_wrap}>
          <View style={style.icon_wrap}>
            <Image
              source={require("../assets/icons/url.png")}
              style={style.icon_img}
            />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 10,
            }}
          >
            <View>
              <Text style={style.result_title}>URL :</Text>
            </View>
            <View>
              <Text style={style.result_text}>{url}</Text>
            </View>
          </View>
        </View>
        {/* IP address  */}
        <View style={style.result_wrap}>
          <View style={style.icon_wrap}>
            <Image
              source={require("../assets/icons/ip-address.png")}
              style={style.icon_img}
            />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 10,
            }}
          >
            <View>
              <Text style={style.result_title}>IP Address :</Text>
            </View>
            <View>
              <Text style={style.result_text}>{ip_address}</Text>
            </View>
          </View>
        </View>

        {/* Category  */}
        <View style={style.result_wrap}>
          <View style={style.icon_wrap}>
            <Image
              source={require("../assets/icons/category.png")}
              style={style.icon_img}
            />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 10,
            }}
          >
            <View>
              <Text style={style.result_title}>Category :</Text>
            </View>
            <View>
              <Text style={style.result_text}>{category}</Text>
            </View>
          </View>
        </View>

        {/* Risk Score  */}
        <View style={style.result_wrap}>
          <View style={style.icon_wrap}>
            <Image
              source={require("../assets/icons/risk_score.png")}
              style={style.icon_img}
            />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 10,
            }}
          >
            <View>
              <Text style={style.result_title}>Risk Score :</Text>
            </View>
            <View>
              <Text style={style.result_text}>{risk_score}</Text>
            </View>
          </View>
        </View>

        {/* Domain  */}
        <View style={style.result_wrap}>
          <View style={style.icon_wrap}>
            <Image
              source={require("../assets/icons/domain.png")}
              style={style.icon_img}
            />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 10,
            }}
          >
            <View>
              <Text style={style.result_title}>Domain :</Text>
            </View>
            <View>
              <Text style={style.result_text}>{domain}</Text>
            </View>
          </View>
        </View>

        {/* Status code  */}
        <View style={style.result_wrap}>
          <View style={style.icon_wrap}>
            <Image
              source={require("../assets/icons/status_code.png")}
              style={style.icon_img}
            />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 10,
            }}
          >
            <View>
              <Text style={style.result_title}>Status Code :</Text>
            </View>
            <View>
              <Text style={style.result_text}>{status_code}</Text>
            </View>
          </View>
        </View>

        {/* adult content  */}
        <View style={style.result_wrap}>
          <View style={style.icon_wrap}>
            <Image
              source={require("../assets/icons/adult.png")}
              style={style.icon_img}
            />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 10,
            }}
          >
            <View>
              <Text style={style.result_title}>Adult Content :</Text>
            </View>
            <View>
              <Text style={style.result_text}>{adult}</Text>
            </View>
          </View>
        </View>

        {/* ScreenShot  */}
        <View
          style={{
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            marginTop: 40,
            backgroundColor: "#170e51",
          }}
        >
          {screenshot && (
            <Image
              source={{
                uri: screenshot,
              }}
              style={{ ...style.ss_img }}
            />
          )}
          <View
            style={{
              width: 320,
              height: 200,
              position: "absolute",
              top: 0,
              backgroundColor: "#caccd0e8",
              zIndex: adult == "true" ? 333 : -1,
            }}
          ></View>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <View style={{ display: "flex", alignItems: "center" }}>
            <Text
              style={{
                color: "white",
                width: 100,
                textAlign: "center",
                padding: 10,
                paddingHorizontal: 20,
                backgroundColor: "maroon",
                borderRadius: 12,
                marginVertical: 20,
              }}
            >
              Close
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: "#170e51",
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
  },
  nav: {
    marginTop: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
  },
  logo: {
    width: 40,
    height: 40,
  },
  close: {
    color: "#eee",
    fontSize: 24,
  },
  result_img_wrap: {
    display: "flex",
    alignItems: "center",
  },
  result_img: {
    width: 320,
    height: 200,
    marginTop: 40,
  },
  result_wrap: {
    borderBottomWidth: 0.5,
    borderBottomColor: "white",
    padding: 20,
    width: "100%",
    // backgroundColor: "#3b3370",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 20,
  },
  icon_wrap: {
    padding: 4,
    backgroundColor: "#3b3370",
    borderRadius: 50,
    position: "relative",
    left: 8,
  },
  icon_img: {
    width: 30,
    height: 30,
    tintColor: "#c8c2f1",
  },
  result_title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    overflow: "hidden",
  },
  result_text: {
    color: "white",
    fontSize: 16,
    // fontWeight: "bold",
    overflow: "hidden",
    width: "100%",
    paddingRight: 2,
  },
  ss_img: {
    width: 320,
    height: 200,
    position: "relative",
    top: -6,
  },
});

async function schedulePushNotification(title, body) {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: `OrwellianAI. Found a ${title} link`, //phishing or safe
      body: `Know more details on ${body}.`,
      data: { data: "goes here" },
      icon: '../images/notification.png'
    },
    trigger: { seconds: 1 },
  });
}

export default Results;
