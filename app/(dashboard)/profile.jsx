import { StyleSheet } from "react-native";
import { useUser } from './../../hooks/useUser';


import Spacer from "../../components/Spacer";
import ThemeView from "../../components/ThemeView";
import ThemedText from "../../components/ThemeText";
import ThemedButton from './../../components/ThemeButton';

const Profile = () => {

  const { logout, user } = useUser();

  return (
    <ThemeView style={styles.container}>

      <ThemedText title={true} style={styles.heading}>
        {user?.email ?? "No email"}
      </ThemedText>

      <Spacer />

      <ThemedText>Time to start reading some books...</ThemedText>
      <Spacer />


      {/* Log out button */}
      <ThemedButton onPress={logout}>
        <ThemedText title={true} style={{ color: '#fff' }}>
          LogOut
        </ThemedText>
      </ThemedButton>

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
