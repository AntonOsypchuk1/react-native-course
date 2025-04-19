import React from 'react';
import styled from 'styled-components/native';
import {ThemeToggleSwitch} from "@/components/ThemeToggleSwitch";
import {fakeUser} from "@/data/fakeData";
import {useThemeMode} from "@/utils/ThemeContext";
import {Avatar} from "@/components/Avatar";

export default function ProfileScreen() {
  const { mode, toggleTheme } = useThemeMode();

  return (
    <Container>
      <Header>
        <Avatar uri={fakeUser.avatar} size={90} />
        <Username>{fakeUser.username}</Username>
        <Email>{fakeUser.email}</Email>
      </Header>

      <Card>
        <CardTitle>Game Stats</CardTitle>
        <StatRow>
          <Stat>
            <StatNumber>{fakeUser.gamesOwned}</StatNumber>
            <StatLabel>Games Owned</StatLabel>
          </Stat>
          <Divider />
          <Stat>
            <StatNumber>{fakeUser.favoriteGame}</StatNumber>
            <StatLabel>Favorite Game</StatLabel>
          </Stat>
        </StatRow>
      </Card>

      <Card>
        <CardTitle>Theme</CardTitle>
        <SettingRow>
          <SettingLabel>Dark Mode</SettingLabel>
          <ThemeToggleSwitch onToggle={toggleTheme} />
        </SettingRow>
      </Card>
    </Container>
  );
}

const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  padding: 24px;
`;

const Header = styled.View`
  align-items: center;
  margin-bottom: 30px;
`;

const Username = styled.Text`
  color: ${({ theme }) => theme.text};
  font-size: 22px;
  font-weight: bold;
  margin-top: 12px;
`;

const Email = styled.Text`
  color: gray;
  font-size: 14px;
`;

const Card = styled.View`
  background-color: ${({ theme }) => theme.card};
  border-radius: 14px;
  padding: 18px;
  margin-bottom: 20px;
  //elevation: 3;
`;

const CardTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  margin-bottom: 10px;
`;

const StatRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Stat = styled.View`
  flex: 1;
  align-items: center;
`;

const StatNumber = styled.Text`
  color: ${({ theme }) => theme.text};
  font-size: 18px;
  font-weight: bold;
`;

const StatLabel = styled.Text`
  color: gray;
  font-size: 12px;
  margin-top: 4px;
  text-align: center;
`;

const Divider = styled.View`
  width: 1px;
  height: 40px;
  background-color: #ccc;
  margin: 0 12px;
`;

const SettingRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const SettingLabel = styled.Text`
  color: ${({ theme }) => theme.text};
  font-size: 14px;
`;
