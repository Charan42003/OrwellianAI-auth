import React, { useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
// import {getLinksFromLatestMainMessage} from '../../oauth/GoogleSigninProvider'
import Toggle from "react-native-toggle-input";

const Integrations = () => {
  const [gmail, setGmail] = useState(false);
  const [whatsapp, setWhatsapp] = useState(false);
  const [facebook, setFacebook] = useState(false);
  const [messenger, setMessenger] = useState(false);
  const [telegram, setTelegram] = useState(false);
  // if(gmail) {
  //   getLinksFromLatestMainMessage();
  // }
  return (
    <View style={style.container}>
      <View style={style.nav}>
        <Image
          source={require("../../images/logoicon.png")}
          style={style.LogoImg}
        />
        <View style={style.avatarWrap}>
          <Text style={style.title}>Integrations</Text>
          <Image
            source={require("../../assets/icons/integration.png")}
            style={{
              width: 20,
              height: 20,
              tintColor: "white",
            }}
          />
        </View>
      </View>
      <ScrollView style={{ marginTop: 150 }}>
        <View style={style.integration_wrap}>
          <View
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              flexDirection: "row",
              gap: 30,
            }}
          >
            <Image
              source={require("../../images/gmail.png")}
              style={style.social_icon}
            />
            <Text style={style.social_title}>Gmail</Text>
          </View>
          <View>
            <Toggle
              color={"#53ce77"}
              size={30}
              filled={true}
              circleColor={"white"}
              toggle={gmail}
              setToggle={setGmail}
            />
          </View>
        </View>

        <View style={style.integration_wrap}>
          <View
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              flexDirection: "row",
              gap: 30,
            }}
          >
            <Image
              source={require("../../images/whatsapp.png")}
              style={style.social_icon}
            />
            <Text style={style.social_title}>Whatsapp</Text>
          </View>
          <View>
            <Toggle
              color={"#53ce77"}
              size={30}
              filled={true}
              circleColor={"white"}
              toggle={whatsapp}
              setToggle={setWhatsapp}
            />
          </View>
        </View>

        <View style={style.integration_wrap}>
          <View
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              flexDirection: "row",
              gap: 30,
            }}
          >
            <Image
              source={require("../../images/facebook.png")}
              style={style.social_icon}
            />
            <Text style={style.social_title}>Facebook</Text>
          </View>
          <View>
            <Toggle
              color={"#53ce77"}
              size={30}
              filled={true}
              circleColor={"white"}
              toggle={facebook}
              setToggle={setFacebook}
            />
          </View>
        </View>

        <View style={style.integration_wrap}>
          <View
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              flexDirection: "row",
              gap: 30,
            }}
          >
            <Image
              source={require("../../images/messenger.png")}
              style={style.social_icon}
            />
            <Text style={style.social_title}>Messenger</Text>
          </View>
          <View>
            <Toggle
              color={"#53ce77"}
              size={30}
              filled={true}
              circleColor={"white"}
              toggle={messenger}
              setToggle={setMessenger}
            />
          </View>
        </View>

        <View style={style.integration_wrap}>
          <View
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              flexDirection: "row",
              gap: 30,
            }}
          >
            <Image
              source={require("../../images/telegram.png")}
              style={style.social_icon}
            />
            <Text style={style.social_title}>Telegram</Text>
          </View>
          <View>
            <Toggle
              color={"#53ce77"}
              size={30}
              filled={true}
              circleColor={"white"}
              toggle={telegram}
              setToggle={setTelegram}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#170e51",
  },
  nav: {
    width: "100%",
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
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  title: {
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
  },
  logoTop: {
    width: 50,
    height: 50,
  },
  border: {
    width: "100%",
    height: 1,
    backgroundColor: "#2c2a2e",
    position: "absolute",
    top: 60,
  },
  integration_wrap: {
    backgroundColor: "#3b3370",
    padding: 20,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    margin: 10,
    borderRadius: 14,
    borderBottomWidth: 0.5,
    borderColor: "white",
  },
  social_icon: {
    width: 50,
    height: 50,
  },
  social_title: {
    color: "white",
    fontSize: 20,
  },
});

export default Integrations;
