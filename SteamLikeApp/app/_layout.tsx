import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {ThemeProvider} from "styled-components";
import {Ionicons} from "@expo/vector-icons";
import CommunityScreen from "@/app/community";
import ChatScreen from "@/app/chat";
import SafetyScreen from "@/app/safety";
import ProfileScreen from "@/app/profile";
import {ThemeProviderCustom, useThemeMode} from "@/utils/ThemeContext";
import {darkTheme} from "@/themes/dark";
import {lightTheme} from "@/themes/light";
import StoreScreen from "@/app/store";
import ChatStack from "@/app/chatStack";

const Tab = createBottomTabNavigator();

export default function RootLayout() {
  const { mode } = useThemeMode();
  const isDark = mode;

  return (
    <ThemeProviderCustom>
      <ThemeProvider theme={mode === 'dark' ? darkTheme : lightTheme}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarActiveTintColor: '#1A9FFF',
            tabBarInactiveTintColor: isDark ? '#aaa' : '#555',
            tabBarStyle: {
              backgroundColor: isDark ? '#2A2A2A' : '#FFFFFF',
              borderTopColor: isDark ? '#444' : '#ccc',
            },
            tabBarIcon: ({ color, size }) => {
              let iconName: keyof typeof Ionicons.glyphMap;

              switch (route.name) {
                case 'Home':
                  iconName = 'home';
                  break;
                case 'Community':
                  iconName = 'chatbubble-ellipses';
                  break;
                default:
                  iconName = 'ellipse';
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen name="Store" component={StoreScreen} />
          <Tab.Screen name="Community" component={CommunityScreen} />
          <Tab.Screen
            name="Chat"
            component={ChatStack}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="chatbubbles" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen name="Safety" component={SafetyScreen} />
          <Tab.Screen name="UserProfile" component={ProfileScreen} />
        </Tab.Navigator>
      </ThemeProvider>
    </ThemeProviderCustom>
  );
}