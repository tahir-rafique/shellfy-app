import { Stack } from "expo-router"
import { useColorScheme } from "react-native"
import { Colors } from "../constant/Colors";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light;  // check the nulleish value if true apply the fallback theme with all Light Colors.

    return (
        <>
            <StatusBar value="auto" />
            <Stack screenOptions={{
                headerStyle: { backgroundColor: theme.navBackground },
                headerTintColor: theme.text,
            }}>
                {/* Individual Screens */}
                <Stack.Screen name="index" options={{ title: "Home" }} />
                <Stack.Screen name="about" options={{ title: "About" }} />
                <Stack.Screen name="contact" options={{
                    title: "Contact",
                    headerStyle: { backgroundColor: 'pink' },
                    headerTintColor: 'green',
                }} />
            </Stack>
        </>

    )
}
