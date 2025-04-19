import React from 'react';
import styled from 'styled-components/native';

type Props = {
  uri: string;
  size?: number;
};

export const Avatar = ({ uri, size = 50 }: Props) => (
  <StyledAvatar source={{ uri }} style={{ width: size, height: size }} />
);

const StyledAvatar = styled.Image`
  border-radius: 999px;
`;
