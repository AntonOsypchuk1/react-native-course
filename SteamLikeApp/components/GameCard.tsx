import styled from "styled-components/native";
import {Image} from "react-native";

interface GameCardProps {
  game: {
    title: string;
    cover: string;
  }
}

export const GameCard = ({ game }: GameCardProps) => (
  <Card>
    <Cover source={{ uri: game.cover }} resizeMode="cover" />
    <Info>
      <Title>{game.title}</Title>
      <Tag>Action</Tag>
    </Info>
  </Card>
);

const Card = styled.View`
  background-color: ${({ theme }) => theme.card};
  border-radius: 12px;
  margin: 8px 16px;
  overflow: hidden;
  //elevation: 3;
`;

  const Cover = styled.Image`
  width: 100%;
  height: 180px;
`;

  const Info = styled.View`
  padding: 12px;
`;

  const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
`;

  const Tag = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.primary};
  margin-top: 4px;
`;
