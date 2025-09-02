import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";
import { Colors } from './../../constant/Colors';

export default function DashboardLayout() {

  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <Tabs
      screenOptions={{
        headerShown: false, tabBarStyle: {
          backgroundColor: theme.navBackground,
          paddingVertical: 10,
          height: 90,
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'green',
      }}
    >
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
      <Tabs.Screen name="books" options={{ title: "Books" }} />
      <Tabs.Screen name="create" options={{ title: "Create" }} />

    </Tabs>
  );
}
