// src/components/ChatMessageBubble.tsx
import React from 'react';
import styled from 'styled-components/native';

type Message = {
  id: number;
  sender: 'me' | 'other';
  content: string;
  timestamp: string;
};

export const ChatMessageBubble = ({ message }: { message: Message }) => {
  const isMe = message.sender === 'me';
  return (
    <BubbleContainer isMe={isMe}>
      <Bubble isMe={isMe}>
        <MessageText isMe={isMe}>{message.content}</MessageText>
      </Bubble>
      <Time isMe={isMe}>{message.timestamp}</Time>
    </BubbleContainer>
  );
};

const BubbleContainer = styled.View<{ isMe: boolean }>`
  align-self: ${({ isMe }) => (isMe ? 'flex-end' : 'flex-start')};
  margin: 4px 16px;
`;

const Bubble = styled.View<{ isMe: boolean }>`
  max-width: 80%;
  background-color: ${({ theme, isMe }) =>
  isMe ? theme.primary : theme.card};
  padding: 10px 14px;
  border-radius: 16px;
  border-bottom-right-radius: ${({ isMe }) => (isMe ? '4px' : '16px')};
  border-bottom-left-radius: ${({ isMe }) => (!isMe ? '4px' : '16px')};
`;

const MessageText = styled.Text<{ isMe: boolean }>`
  color: ${({ isMe }) => (isMe ? '#fff' : '#000')};
  font-size: 14px;
`;

const Time = styled.Text<{ isMe: boolean }>`
  align-self: ${({ isMe }) => (isMe ? 'flex-end' : 'flex-start')};
  font-size: 10px;
  color: gray;
  margin-top: 2px;
`;
