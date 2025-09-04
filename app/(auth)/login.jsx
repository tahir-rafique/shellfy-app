import { StyleSheet, Text, Keyboard, TouchableWithoutFeedback, } from 'react-native'

import { Link } from "expo-router";
import { useState } from 'react';
import { useUser } from '../../hooks/useUser';


// themed Components
import ThemedText from "./../../components/ThemeText";
import ThemedView from "./../../components/ThemeView";
import ThemedButton from "./../../components/ThemeButton";
import ThemedTextInput from '../../components/ThemedTextInput';
import Spacer from "./../../components/Spacer";


export default function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)


  const { login } = useUser();


  const handleSubmit = async () => {

    setError(null);


    try {
      await login(email, password);
    } catch (error) {
      setError(error.message)
    }

    // console.log("Login form submitted \nEmail:", email, "\nPassword:", password);
    setEmail("");
    setPassword("");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

      <ThemedView style={styles.container}>
        <Spacer />
        <ThemedText title={true} style={styles.title}>
          Login to Your Account
        </ThemedText>
        <Spacer />
        <ThemedTextInput
          style={{ marginBottom: 20, width: "80%", placeholderColor: 'red' }}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <ThemedTextInput
          style={{ marginBottom: 20, width: "80%" }}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />


        <ThemedButton onPress={handleSubmit}>
          <Text style={{ color: "#f2f2f2" }}>Login</Text>
        </ThemedButton>

        <Spacer />

        {error && <Text style={styles.error}>{error}</Text>}

        <Spacer height={100} />
        <Link href="/register" replace>
          <ThemedText style={{ textAlign: "center" }}>
            Register instead
          </ThemedText>
        </Link>
      </ThemedView>
    </TouchableWithoutFeedback >

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

  error: {
    color: '#000',
    fontWeight: 800,
    textAlign: 'center',
    width: '80%',
    backgroundColor: 'aqua',
    borderRadius: 6,
    padding: 5,
  }
});
