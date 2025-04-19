import React from 'react';
import styled from 'styled-components/native';
import { useColorScheme } from 'react-native';

type Props = {
  onToggle: () => void;
};

export const ThemeToggleSwitch = ({ onToggle }: Props) => {
  const scheme = useColorScheme();
  const isDark = scheme === 'dark';

  return (
    <ToggleWrapper onPress={onToggle}>
      <Emoji>{isDark ? '🌙' : '☀️'}</Emoji>
    </ToggleWrapper>
  );
};

const ToggleWrapper = styled.TouchableOpacity`
  padding: 8px;
`;

const Emoji = styled.Text`
  font-size: 24px;
`;
