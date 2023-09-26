import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as WebBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google'
import AsyncStorage from '@react-native-async-storage/async-storage'

WebBrowser.maybeCompleteAuthSession();

const App2 = () => {
  const [userInfo, setUserInfo] = useState(null);

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: "167099430613-12rmdok3705l9k39n72psk35o1kve2r6.apps.googleusercontent.com",
  })

  useEffect(()=> {
    handleSignInWithGoogle();
  }, [response])

  async function handleSignInWithGoogle() {
    const user = await AsyncStorage.getItem("@user");
    if(!user) {
      if(response?.type === "success") {
        await getUserInfo(response.authentication.accessToken)
      }
    } else {
      setUserInfo(JSON.parse(user));
    }
  }

  const getUserInfo = async (token) => {
    if(!token) return;
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}`},
        }
      );

      const user = await response.json();
      await AsyncStorage.setItem("@user", JSON.stringify(user));
      setUserInfo(user);
    } catch(error) {
      //error handling
    }
  }

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>App2</Text>
      <Text>
        {JSON.stringify(userInfo)}
      </Text>
      <Button title="signin with google" onPress={()=> promptAsync()} />
      <Button title="remove" onPress={()=> AsyncStorage.removeItem("@user")} />
    </View>
  )
}

export default App2