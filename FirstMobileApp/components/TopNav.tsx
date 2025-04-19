import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from "expo-router";
import {BottomTabNavigationProp} from "@react-navigation/bottom-tabs";
import {ParamListBase} from "@react-navigation/native";

export default function TopNav() {
  const nav = useNavigation<BottomTabNavigationProp<ParamListBase>>();

  return (
    <>
      <View style={styles.container}>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>FirstMobileApp</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  logo: {
    width: 120,
    height: 50,
    resizeMode: 'contain',
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
});
