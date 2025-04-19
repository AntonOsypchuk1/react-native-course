import React from 'react';
import styled from 'styled-components/native';

type Props = {
  label: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
};

export const Button = ({ label, onPress, variant = 'primary' }: Props) => (
  <ButtonContainer variant={variant} onPress={onPress}>
    <ButtonText variant={variant}>{label}</ButtonText>
  </ButtonContainer>
);

const ButtonContainer = styled.TouchableOpacity<{ variant: string }>`
  background-color: ${({ theme, variant }) =>
  variant === 'primary' ? theme.primary : 'transparent'};
  border: 1px solid ${({ theme }) => theme.primary};
  padding: 12px 20px;
  border-radius: 10px;
  align-items: center;
`;

const ButtonText = styled.Text<{ variant: string }>`
  color: ${({ theme, variant }) =>
  variant === 'primary' ? '#fff' : theme.primary};
  font-size: 16px;
  font-weight: bold;
`;
