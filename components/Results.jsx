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
  const [safe, setSafe] = useState(true);

  const encodedUrl = encodeURIComponent(route.params.url);
  useEffect(() => {
    async function fetchData() {
      // const requestOptions = {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ url: route.params.url }),
      // };
      // const data = await fetch(
      //   "https://orwellian-ai-ml.onrender.com/predict",
      //   requestOptions
      // );
      // const ml_data = await data.json();
      // setMl_Result(ml_data.result);
      // if (ml_data.result == "phishing") {
      //   setSafe(false);
      // }

      //iscore api
      const iscore = await fetch(
        `https://ipqualityscore.com/api/json/url/DIfN4eg2hWZltfB4eTJemY0tK7vw0mVA/${encodedUrl}`
      );
      const final_data = await iscore.json();
      // console.log(final_data);
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
      setload(false);
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
        {/* <Image
          source={require("../images/reg-load.gif")}
          style={{ height: "0%" }}
          resizeMode="contain"
        /> */}
        {/* <Progress.Pie progress={0.4} size={50} /> */}
        {/* <Progress.Circle size={30} indeterminate={true} /> */}
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
          <Image
            source={{
              uri:
                "http://api.screenshotlayer.com/api/capture?access_key=ed7603f7f693fb73b8f42813d2755609&url=https://www.youtube.com/&viewport=1440x900",
            }}
            style={{ ...style.ss_img }}
          />
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

export default Results;
