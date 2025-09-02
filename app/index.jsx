import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

import { Link } from 'expo-router';
// import logo from '../assets/favicon.png'

import ThemeView from '../components/ThemeView';

export default function App() {
  return (
    <ThemeView style={styles.container}>
      <StatusBar style="auto" />
      {/*  multiple-styles in single element */}
      <Image style={[styles.img, { marginVertical: 20 }]} source={require('../assets/images/logo_light.png')} />
      <Text style={styles.title}>The Number 1</Text>
      <Text style={styles.subTitle}>Reading List app!</Text>
      {/* <Image source={logo} /> */}
      {/* <Image source={{ uri:'https://freepick/myLogoImage'}} /> */}
      <View style={styles.card}>
        <Text>Hello</Text>
      </View>

      <Link href="/about" style={styles.link}>About Page</Link>
      <Link href="/contact" style={styles.link}>Contact Page</Link>
    </ThemeView>

  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    marginVertical: 20
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1
  }
})