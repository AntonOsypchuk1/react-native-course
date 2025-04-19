import React from 'react';
import styled from 'styled-components/native';

export const SectionTitle = ({ children }: { children: string }) => (
  <Title>{children}</Title>
);

const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin: 16px 12px 8px;
  color: ${({ theme }) => theme.text};
`;
