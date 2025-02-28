import { useRouter } from "expo-router";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Image, TouchableOpacity, View, Text, StyleSheet } from "react-native";

export default function WelcomeScreen() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Image
                source={require("../assets/images/movie_app_splash.jpg")}
                style={styles.backgroundImage}
                resizeMode="cover"
            />

            <StatusBar style="light" />

            <View style={styles.titleContainer}>
                <View style={styles.mcLogo}>
                    <Text style={styles.mcLogoText}>MC</Text>
                </View>
                <Text style={styles.title}>Movie Cinema</Text>
                <Text style={styles.subtitle}>
                    Watch and find movies that bring your mood back.
                </Text>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.exploreButton}
                    onPress={() => router.replace('/home')}
                >
                    <Text style={styles.exploreButtonText}>Explore</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',  // Align content to the bottom
        alignItems: 'center',       // Center horizontally
        paddingBottom: 40,            // Add some bottom padding
        position: 'relative'         // Needed for absolute positioning of Image
    },
    backgroundImage: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    titleContainer: {
        flex: 1,                  // Take up available space
        alignItems: 'center',       // Center horizontally
        justifyContent: 'center',  // Center vertically
        paddingTop: 80,         // Adjust as needed
        maxWidth: '80%',
    },
    mcLogo: {
        backgroundColor: 'red',
        padding: 16,
        borderRadius: 24,
    },
    mcLogoText: {
        color: 'white',
        fontSize: 32,
        fontWeight: 'bold',
        letterSpacing: 2,
    },
    title: {
        color: 'white',
        fontSize: 32,
        fontWeight: 'bold',
        letterSpacing: 2,
        marginTop: 16,
    },
    subtitle: {
        color: 'white',
        fontSize: 16,
        letterSpacing: 1,
        marginBottom: 8,
        textAlign: 'center',
        fontWeight: '500'
    },
    buttonContainer: {
        marginBottom: 80, // Adjust as needed
    },
    exploreButton: {
        paddingHorizontal: 48,
        paddingVertical: 12,
        borderRadius: 8,
        backgroundColor: 'red',
    },
    exploreButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
    },
});