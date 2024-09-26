import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Início',
                    tabBarActiveBackgroundColor: '#F25C5C',
                    tabBarInactiveBackgroundColor: '#F25C5C',
                    tabBarInactiveTintColor: '#ffffff',
                    tabBarActiveTintColor: '#898DD9',
                    tabBarIcon: ({ color }) => <FontAwesome size={24} name="home" color={color} />
                }}
            />
            <Tabs.Screen
                name="categories"
                options={{
                    title: 'Marcas',
                    tabBarActiveBackgroundColor: '#F25C5C',
                    tabBarInactiveBackgroundColor: '#F25C5C',
                    tabBarInactiveTintColor: '#ffffff',
                    tabBarActiveTintColor: '#898DD9',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <FontAwesome size={24} name="archive" color={color} />
                }}
            />
            <Tabs.Screen
                name="about"
                options={{
                    title: 'Sobre mim',
                    tabBarActiveBackgroundColor: '#F25C5C',
                    tabBarInactiveBackgroundColor: '#F25C5C',
                    tabBarInactiveTintColor: '#ffffff',
                    tabBarActiveTintColor: '#898DD9',
                    tabBarIcon: ({ color }) => <FontAwesome size={24} name="user" color={color} />
                }}
            />
        </Tabs>
    );
}