import React, { useState } from 'react';
import {Button, FlatList} from 'react-native';
import styled from 'styled-components/native';
import {fakeChats} from "@/data/fakeData";
import {TextInputField} from "@/components/TextInputField";
import { ChatMessageBubble } from '@/components/ChatMessageBubble';

export default function ChatRoomScreen({ route }) {
  const { chatId } = route.params;
  const chat = fakeChats.find((c) => c.id === chatId);
  const [messages, setMessages] = useState(chat?.messages || []);
  const [text, setText] = useState('');

  const handleSend = () => {
    if (!text.trim()) return;
    const newMsg = {
      id: messages.length + 1,
      sender: 'me',
      content: text,
      timestamp: 'Now',
    };
    setMessages((prev) => [...prev, newMsg]);
    setText('');
  };

  return (
    <Container>
      <MessagesList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ChatMessageBubble message={item} />}
        inverted
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-end' }}
        showsVerticalScrollIndicator={false}
      />
      <InputRow>
        <TextInputField
          value={text}
          onChangeText={setText}
          placeholder="Type a message..."
        />
        <SendButton onPress={handleSend} label="Send" variant="secondary" />
      </InputRow>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
`;

const MessagesList = styled(FlatList as new () => FlatList<any>)`
  padding: 12px 0;
`;

const InputRow = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 8px 12px;
  background-color: ${({ theme }) => theme.card};
`;

const SendButton = styled(Button)`
  margin-left: 8px;
`;
