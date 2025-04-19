import React from 'react';
import styled from 'styled-components/native';

type Props = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
};

export const TextInputField = ({
   value,
   onChangeText,
   placeholder,
   secureTextEntry = false,
}: Props) => (
  <Input
    value={value}
    onChangeText={onChangeText}
    placeholder={placeholder}
    placeholderTextColor="#999"
    secureTextEntry={secureTextEntry}
  />
);

const Input = styled.TextInput`
    background-color: ${({ theme }) => theme.card};
    color: ${({ theme }) => theme.text};
    border-radius: 10px;
    padding: 12px;
    margin: 10px 0;
`;
