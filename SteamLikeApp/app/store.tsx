import React, { useState } from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import {GameCard} from "@/components/GameCard";
import {fakeData} from "@/data/fakeData";

export default function StoreScreen() {
  const [games, setGames] = useState(fakeData.slice(0, 10));

  const loadMore = () => {
    if (games.length >= fakeData.length) return;
    setGames(prev => [...prev, ...fakeData.slice(prev.length, prev.length + 10)]);
  };

  return (
    <Container>
      <FlatList
        data={games}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <GameCard game={item} />}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
`;
