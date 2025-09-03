import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";
import { Colors } from "./../../constant/Colors";
import { Ionicons } from '@expo/vector-icons';

export default function DashboardLayout() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.navBackground,
          paddingVertical: 10,
          height: 90,
        },
        tabBarActiveTintColor: theme.iconColor,
        tabBarInactiveTintColor: theme.iconColorFocused,
      }}
    >
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile", tabBarIcon: ({ focused }) => (
            <Ionicons
              size={24}
              name={focused ? "person-outline" : "person"}
              color={focused ? theme.iconColorFocused : theme.iconColor}
            />
          )
        }} />

      <Tabs.Screen name="books" options={{
        title: "Books", tabBarIcon: ({ focused }) => (
          <Ionicons
            size={24}
            name={focused ? "book-outline" : "book"}
            color={focused ? theme.iconColorFocused : theme.iconColor}
          />
        )
      }} />

      <Tabs.Screen name="create" options={{
        title: "Create", tabBarIcon: ({ focused }) => (
          <Ionicons
            size={24}
            name={focused ? "create-outline" : "create"}
            color={focused ? theme.iconColorFocused : theme.iconColor}
          />
        )
      }} />
    </Tabs>
  );
}
