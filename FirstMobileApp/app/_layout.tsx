import GalleryScreen from "@/app/gallery";
import ProfileScreen from "@/app/profile";
import HomeScreen from "@/app/index";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import {StyleSheet} from "react-native";
import React from "react";
import {AntDesign, FontAwesome5, MaterialCommunityIcons} from "@expo/vector-icons";
import TopNav from "@/components/TopNav";

const Tab = createMaterialTopTabNavigator();

export default function RootLayout() {
  return (
    <>
      <TopNav/>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            flexDirection: 'row',
            height: 50,
            alignItems: 'center',
            justifyContent: 'space-around',
            backgroundColor: '#f9f9f9'
          },
          tabBarLabelStyle: {
            fontSize: 14
          },
          tabBarItemStyle: {
            width: 120
          },
          tabBarScrollEnabled: true,
        }}
      >
        <Tab.Screen name="Головна" component={HomeScreen} options={{
          tabBarIcon: () => (
            <FontAwesome5 name="home" size={16} color="black"/>
          )
        }}/>
        <Tab.Screen name="Фотогалерея" component={GalleryScreen} options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="view-gallery" size={16} color="black"/>
          )
        }}/>
        <Tab.Screen name="Профіль" component={ProfileScreen} options={{
          tabBarIcon: () => (
            <AntDesign name="profile" size={16} color="black"/>
          )
        }}/>
      </Tab.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#f9f9f9'
  },
  link: {padding: 8}
});
