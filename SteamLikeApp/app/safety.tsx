// src/screens/SafetyScreen.tsx
import React, { useState } from 'react';
import styled from 'styled-components/native';
import {SectionTitle} from "@/components/SectionTitle";
import {SettingItem} from "@/components/SettingItem";

export default function SafetyScreen() {
  const [steamGuard, setSteamGuard] = useState(true);
  const [parentalControls, setParentalControls] = useState(false);
  const [communityFilter, setCommunityFilter] = useState(false);

  return (
    <Container>
      <SectionTitle>Safety & Security</SectionTitle>

      <SettingItem
        label="Steam Guard"
        value={steamGuard}
        onValueChange={setSteamGuard}
      />

      <SettingItem
        label="Parental Controls"
        value={parentalControls}
        onValueChange={setParentalControls}
      />

      <SettingItem
        label="Filter Community Content"
        value={communityFilter}
        onValueChange={setCommunityFilter}
      />
    </Container>
  );
}

const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  padding-top: 16px;
`;
