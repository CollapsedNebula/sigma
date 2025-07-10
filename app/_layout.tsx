import * as Font from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect, useState } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadAppResources() {
      try {
        await Font.loadAsync({
          'NoonnuBasicGothicRegular': require('../assets/fonts/NoonnuBasicGothicRegular.otf'), // 경로가 정확한지 확인!
        });
        setFontsLoaded(true);
      } catch (e) {
        console.warn(e);
      } finally {
        SplashScreen.hideAsync();
      }
    }

    loadAppResources();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return <Stack>
    <Stack.Screen
      name="SignIn"
      options={{
        title: "로그인",
        headerTitleStyle: {
          fontFamily: 'NoonnuBasicGothicRegular',
          fontWeight: 'bold',
          fontSize: 24
        },
        headerLeft: () => null
      }} />
    <Stack.Screen
      name="SignUp"
      options={{
        title: "회원가입",
        headerTitleStyle: {
          fontFamily: 'NoonnuBasicGothicRegular',
          fontWeight: 'bold',
          fontSize: 24
        },
        headerLeft: () => null
      }}
    />
  </Stack>;
}
