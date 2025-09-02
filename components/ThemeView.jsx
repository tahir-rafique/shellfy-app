import { View, useColorScheme } from 'react-native'
import { Colors } from '../constant/Colors';

export default function ThemeView({ style, children, ...prop }) {

    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light;


    return (
        <View style={[{ backgroundColor: theme.background }, style]}
            {...prop}
        >
            {children}
        </View>
    )
}