import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboard from "./screens/Dashboard";
import Scan from "./screens/Scan";
import Profile from "./screens/Profile";
import Integrations from "./screens/Integrations";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function TabManager() {
  return (
    <Tab.Navigator
      initialRouteName="scan"
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          // backgroundColor: "rgba(27, 27, 27, 0.63)",
          backgroundColor: "#3b3370",
          // backgroundColor: '#1b1b1b',
          height: 70,
          position: "absolute",
          bottom: 30,
          borderRadius: 15,
          borderTopColor: "transparent",
          marginHorizontal: 15,
        },
        tabBarInactiveTintColor: "#c8c2f1",
        // tabBarInactiveTintColor: "#2c2a2e",
        tabBarActiveTintColor: "#0783b6",
        // tabBarActiveTintColor: '#39abe7'
      }}
    >
      <Tab.Screen
        name="scan"
        component={Scan}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View
              style={{
                backgroundColor: focused ? "transparent" : "transparent",
                borderRadius: 100,
                position: "relative",
              }}
            >
              <View
                style={{
                  height: 3,
                  width: 50,
                  backgroundColor: "#79d5cb",
                  position: "absolute",
                  top: -16,
                  left: -5,
                  borderRadius: 20,
                  display: focused ? "block" : "none",
                }}
              />
              <Image
                source={require("../assets/icons/home2.png")}
                style={{
                  width: focused ? 35 : 30,
                  height: focused ? 35 : 30,
                  tintColor: focused ? "#79d5cb" : "#c8c2f1",
                  // tintColor: focused ? "#0783b6" : "#2c2a2e",
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View
              style={{
                backgroundColor: focused ? "transparent" : "transparent",
                borderRadius: 100,
                position: "relative",
              }}
            >
              <View
                style={{
                  height: 3,
                  width: 50,
                  backgroundColor: "#79d5cb",
                  position: "absolute",
                  top: -16,
                  left: -5,
                  borderRadius: 20,
                  display: focused ? "block" : "none",
                }}
              />
              <Image
                source={require("../assets/icons/dashboard-icon.png")}
                style={{
                  width: focused ? 40 : 35,
                  height: focused ? 40 : 35,
                  tintColor: focused ? "#79d5cb" : "#c8c2f1",
                  // tintColor: focused ? "#0783b6" : "#2c2a2e",
                }}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="integration"
        component={Integrations}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View
              style={{
                backgroundColor: focused ? "transparent" : "transparent",
                borderRadius: 100,
                position: "relative",
              }}
            >
              <View
                style={{
                  height: 3,
                  width: 50,
                  backgroundColor: "#79d5cb",
                  position: "absolute",
                  top: -16,
                  left: -5,
                  borderRadius: 20,
                  display: focused ? "block" : "none",
                }}
              />
              <Image
                source={require("../assets/icons/integration.png")}
                style={{
                  width: focused ? 35 : 30,
                  height: focused ? 35 : 30,
                  tintColor: focused ? "#79d5cb" : "#c8c2f1",
                  // tintColor: focused ? "#0783b6" : "#2c2a2e",
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View
              style={{
                backgroundColor: focused ? "transparent" : "transparent",
                borderRadius: 100,
                position: "relative",
              }}
            >
              <View
                style={{
                  height: 3,
                  width: 50,
                  backgroundColor: "#79d5cb",
                  position: "absolute",
                  top: -16,
                  left: -5,
                  borderRadius: 20,
                  display: focused ? "block" : "none",
                }}
              />
              <Image
                source={require("../assets/icons/setting.png")}
                style={{
                  width: focused ? 40 : 35,
                  height: focused ? 40 : 35,
                  // tintColor: focused ? "#0783b6" : "#2c2a2e",
                  tintColor: focused ? "#79d5cb" : "#c8c2f1",
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const style = StyleSheet.create({
  navBtn: {},
});
