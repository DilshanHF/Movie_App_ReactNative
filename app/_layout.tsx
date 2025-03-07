import React from "react";
import {Stack} from "expo-router";

export default function RootLayout () {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index"  /> {/* This will render the WelcomeScreen */}
            <Stack.Screen name="home" /> {/* Dynamic route for Home Screen  */}

        </Stack>
    );
}

