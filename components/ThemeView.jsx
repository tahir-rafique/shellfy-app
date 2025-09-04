import { SafeAreaView, useColorScheme, View } from "react-native";
import { Colors } from "../constant/Colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ThemeView({ style, safe = false, ...props }) {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  if (!safe)
    return (
      <View style={[{ backgroundColor: theme.background }, style]} {...props} />
    );

  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        {
          backgroundColor: theme.background,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingBottom: insets.bottom,
        },
        style,
      ]}
      {...props}
    />
  );
}
