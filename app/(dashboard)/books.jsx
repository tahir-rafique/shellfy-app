import { StyleSheet } from "react-native";
import ThemedText from "./../../components/ThemeText";
import ThemedView from "./../../components/ThemeView";
import Spacer from "./../../components/Spacer";

const Books = () => {
  return (
    <ThemedView style={styles.container} safe={true}>
      <ThemedText title={true} style={styles.heading}>
        Your Reading List ....
      </ThemedText>
      <Spacer height={10} />
      <ThemedText title={false} style={styles.heading}>
        You are in Safe Area View!
      </ThemedText>
    </ThemedView>
  );
};

export default Books;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "stretch",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});
