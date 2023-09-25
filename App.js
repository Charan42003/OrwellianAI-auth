import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import TabManager from "./components/TabManage";
import Results from "./components/Results";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import Notification from "./Notification";

// import SMSListener from "./SmsListener";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <>
      {/* <SMSListener /> */}
      <NavigationContainer>
        <Stack.Navigator initialRouteName={"Home"}>
          <Stack.Screen
            name="Home"
            component={TabManager}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Results"
            component={Results}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Login"
            component={LoginPage}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUpPage}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <Notification /> */}
    </>
  );
}
