import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import OneSignal from 'react-native-onesignal';
import Constants from 'expo-constants';

export default function RootLayout() {
  useEffect(() => {
    OneSignal.LogLevel(6, 0);
    OneSignal.setAppId(Constants.expoConfig.extra.oneSignalAppId);

    // Prompt for push permission
    OneSignal.promptForPushNotificationsWithUserResponse();

    // Ensure notifications show in foreground
    const sub = OneSignal.addEventListener(
      'notificationWillShowInForeground',
      event => event.complete(event.getNotification())
    );
    return () => OneSignal.removeEventListener(sub);
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>✅ Setup complete!</Text>
    </View>
  );
}
