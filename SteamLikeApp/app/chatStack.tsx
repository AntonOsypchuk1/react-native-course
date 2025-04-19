import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChatRoomScreen from "@/app/chatRoom";
import ChatScreen from './chat';

const Stack = createNativeStackNavigator();

export default function ChatStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ChatList" component={ChatScreen} />
      <Stack.Screen name="ChatRoom" component={ChatRoomScreen} />
    </Stack.Navigator>
  );
}
