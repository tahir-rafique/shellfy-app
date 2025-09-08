import {
  ActivityIndicator,
  StyleSheet,
  useColorScheme,
  View,
} from "react-native";
import { Colors } from "../constant/Colors";
import React from "react";
import ThemeView from "./ThemeView";

export default function ThemeLoader() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <ThemeView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator size={30} color={theme.text} />
    </ThemeView>
  );
}

const styles = StyleSheet.create({});
