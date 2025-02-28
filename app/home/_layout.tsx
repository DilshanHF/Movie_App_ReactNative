// app/home/_layout.tsx (Tab Navigator Layout)
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';

// Define Ionicons names type for type safety
type IoniconsName =
    | 'home'
    | 'home-outline'
    | 'search'
    | 'search-outline'
    | 'heart'
    | 'question-circle'
    | 'heart-outline'; // Add all the Ionicons you are using

export default function HomeLayout() {
    return (
        <Tabs
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused }) => {
                    const customizeSize = 30;

                    // Type-safe icon name retrieval
                    const getIconName = (routeName: string): IoniconsName => {
                        switch (routeName) {
                            case 'index':
                                return focused ? 'home' : 'home-outline';
                            case 'search':
                                return focused ? 'search' : 'search-outline';
                            case 'saved':
                                return focused ? 'heart' : 'heart-outline';
                            default:
                                return 'question-circle'; // Default icon (for safety)
                        }
                    };

                    return (
                        <Ionicons
                            name={getIconName(route.name)} // Use type-safe function
                            size={customizeSize}
                            color={focused ? 'white' : 'gray'}
                        />
                    );
                },
                tabBarActiveTintColor: 'white',
                tabBarStyle: {
                    backgroundColor: '#1F1D2B',
                    borderTopWidth: 0,
                    paddingBottom: 10,
                },
            })}
        >
            <Tabs.Screen name="index"  />
            <Tabs.Screen name="search" />
            <Tabs.Screen name="saved" />
        </Tabs>
    );
}