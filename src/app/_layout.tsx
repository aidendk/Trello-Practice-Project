import { Link, Slot, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import {ThemeProvider, DarkTheme} from '@react-navigation/native';
import RealmCustomProvider from "../providers/realm";
import { FontAwesome } from '@expo/vector-icons';

export default function RootLayout () {
    return (
        <>
            <ThemeProvider value={DarkTheme}>
                <RealmCustomProvider>
                    <Stack screenOptions={{
                        headerRight: () => (
                            <View style={{gap: 10, flexDirection: "row"}}>
                                <Link href="/login">
                                    <FontAwesome name="sign-in" size={24} color="lightgray" />
                                </Link>
                                <Link href="/profile">
                                    <FontAwesome name="user-circle-o" size={24} color="lightgray" />
                                </Link>
                            </View>
                        )
                    }}>
                    </Stack>
                </RealmCustomProvider>
            </ThemeProvider>
            <StatusBar style="light"/>   
        </>

    )
}