import { Slot, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";
import {ThemeProvider, DarkTheme} from '@react-navigation/native';
import RealmCustomProvider from "../providers/realm";

export default function RootLayout () {
    return (
        <ThemeProvider value={DarkTheme}>
            <RealmCustomProvider>
                <Stack screenOptions={{}}>
                </Stack>
            </RealmCustomProvider>
            <StatusBar style="light"/>
        </ThemeProvider>
    )
}