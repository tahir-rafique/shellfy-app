import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, useColorScheme, View } from "react-native";
import { Colors } from "../constant/Colors";
// import logo from '../assets/favicon.png'
// import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Link } from "expo-router";

// themed Components
import ThemeView from "../components/ThemeView";
import ThemedLogo from "../components/ThemeLogo";
import ThemedText from "../components/ThemeText";
import Spacer from "../components/Spacer";

export default function App() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <ThemeView style={styles.container} safe={true}>

      <StatusBar value="auto" />

      {/*  multiple-styles in single element */}
      {/* <Image style={[styles.img, { marginVertical: 20 }]} source={require('../assets/images/logo_light.png')} /> */}
      <ThemedLogo style={styles.img} />
      <Spacer height={10} />
      <Text style={styles.title}>The Number 1</Text>
      <Text style={styles.subTitle}>Reading List app!</Text>
      {/* <Image source={logo} /> */}
      {/* <Image source={{ uri:'https://freepick/myLogoImage'}} /> */}
      <Spacer height={20} />
      <Link
        href="/register"
        style={[styles.link, { borderBottomColor: theme.navBackground }]}
      >
        <ThemedText>Register Page</ThemedText>
      </Link>
      <Spacer height={30} />
      <Link
        href="/login"
        style={[styles.link, { borderBottomColor: theme.navBackground }]}
      >
        <ThemedText>Login Page</ThemedText>
      </Link>
      <Spacer height={30} />
      <Link
        href="/profile"
        style={[styles.link, { borderBottomColor: theme.navBackground }]}
      >
        <ThemedText>Profile Page</ThemedText>
      </Link>


    </ThemeView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  link: {
    borderBottomWidth: 1,
    paddingBottom: 2,
  },
});
