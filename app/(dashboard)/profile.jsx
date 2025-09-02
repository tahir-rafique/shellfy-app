import { StyleSheet } from "react-native";

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
