import React from 'react';
import {FlatList} from "react-native";
import {fakeChats} from "@/data/fakeData";
import {ChatListItem} from "@/components/ChatListItem";
import styled from "styled-components/native";
import {useNavigation} from "expo-router";

export default function ChatScreen() {
  const navigation = useNavigation();

  return (
    <Container>
      <FlatList
        data={fakeChats}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ChatListItem
            chat={item}
            onPress={() => navigation.navigate('ChatRoom', { chatId: item.id })}
          />
        )}
        contentContainerStyle={{ padding: 12 }}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
`;