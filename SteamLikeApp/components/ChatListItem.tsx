// src/components/ChatListItem.tsx
import React from 'react';
import styled from 'styled-components/native';
import { Avatar } from './Avatar';

type Chat = {
  id: number;
  user: string;
  avatar: string;
  lastMessage: string;
  messages: { id: number; sender: 'me' | 'other'; content: string; timestamp: string }[];
};

export const ChatListItem = ({
  chat,
  onPress,
}: {
  chat: Chat;
  onPress: () => void;
}) => (
  <ItemContainer onPress={onPress}>
    <Avatar uri={chat.avatar} size={50} />
    <Info>
      <NameRow>
        <ChatName>{chat.user}</ChatName>
        <Time>{chat.messages[chat.messages.length - 1].timestamp}</Time>
      </NameRow>
      <LastMessage numberOfLines={1}>{chat.lastMessage}</LastMessage>
    </Info>
  </ItemContainer>
);

const ItemContainer = styled.TouchableOpacity`
  flex-direction: row;
  padding: 12px 16px;
  align-items: center;
  background-color: ${({ theme }) => theme.card};
  margin-bottom: 8px;
  border-radius: 12px;
`;

const Info = styled.View`
  flex: 1;
  margin-left: 12px;
`;

const NameRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const ChatName = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
`;

const Time = styled.Text`
  font-size: 12px;
  color: gray;
`;

const LastMessage = styled.Text`
  margin-top: 4px;
  font-size: 14px;
  color: ${({ theme }) => theme.text};
`;
