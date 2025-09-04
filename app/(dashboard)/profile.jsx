import { StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Spacer from "../../components/Spacer";

import ThemeView from "../../components/ThemeView";
import ThemedText from "../../components/ThemeText";
const Profile = () => {
  return (
    <ThemeView style={styles.container}>
      <ThemedText title={true} style={styles.heading}>
        Your Email
      </ThemedText>
      <Spacer />
      <ThemedText>Time to start reading some books...</ThemedText>
      <Spacer />
      <Ionicons name="checkmark-circle" size={32} color="green" />
    </ThemeView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});
