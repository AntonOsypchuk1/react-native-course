import styled from 'styled-components/native';

export const Divider = styled.View`
  height: 1px;
  background-color: ${({ theme }) => theme.card};
  margin: 10px 0;
`;
