import { StyleSheet, Text } from "react-native";

import { Link } from "expo-router";

// themed Components
import ThemedText from "./../../components/ThemeText";
import ThemedView from "./../../components/ThemeView";
import ThemedButton from "./../../components/ThemeButton";
import Spacer from "./../../components/Spacer";

export default function Register() {
  const handleSubmit = () => {
    console.log("Register form submitted");
  };
  return (
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemedText title={true} style={styles.title}>
        Register Your Account
      </ThemedText>
      <Spacer />
      <ThemedButton onPress={handleSubmit}>
        <Text style={{ color: "#f2f2f2" }}>Register</Text>
      </ThemedButton>
      <Spacer height={100} />
      <Link href="/login" replace>
        <ThemedText style={{ textAlign: "center" }}>Login instead</ThemedText>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  link: {
    borderBottomWidth: 1,
    paddingBottom: 2,
  },
});
