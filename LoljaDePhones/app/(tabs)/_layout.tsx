import { Tabs } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";

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
                    tabBarIcon: ({ color }) => <Feather size={24} name="home" color={color} />
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
                    tabBarIcon: ({ color }) => <Feather size={24} name="smartphone" color={color} />
                }}
            />
            <Tabs.Screen
                name="about"
                options={{
                    title: 'Meus Pedidos',
                    tabBarActiveBackgroundColor: '#F25C5C',
                    tabBarInactiveBackgroundColor: '#F25C5C',
                    tabBarInactiveTintColor: '#ffffff',
                    tabBarActiveTintColor: '#898DD9',
                    tabBarIcon: ({ color }) => <Feather size={24} name="shopping-cart" color={color} />
                }}
            />
        </Tabs>
    );
}