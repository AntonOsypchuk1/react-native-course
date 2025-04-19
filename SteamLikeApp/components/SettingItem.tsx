import React from 'react';
import { Switch } from 'react-native';
import styled from 'styled-components/native';

type Props = {
  label: string;
  value: boolean;
  onValueChange: (val: boolean) => void;
};

export const SettingItem = ({ label, value, onValueChange }: Props) => (
  <Row>
    <Label>{label}</Label>
    <StyledSwitch
      trackColor={{ false: "#767577", true: /* theme.primary */ undefined }}
      thumbColor={value ? /* theme.primary */ undefined : "#f4f3f4"}
      ios_backgroundColor="#3e3e3e"
      value={value}
      onValueChange={onValueChange}
    />
  </Row>
);

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.card};
  padding: 14px 16px;
  margin: 8px 16px;
  border-radius: 12px;
  elevation: 2;
`;

const Label = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.text};
`;

const StyledSwitch = styled(Switch)`
`;