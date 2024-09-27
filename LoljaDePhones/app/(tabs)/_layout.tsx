import { Tabs } from "expo-router";
import Feather from "@expo/vector-icons/Feather";

export default function TabLayout() {
    return (
        <Tabs >
            
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Início',
                    tabBarActiveBackgroundColor: '#F25C5C',
                    tabBarInactiveTintColor: '#ffffff',
                    tabBarActiveTintColor: '#000000',
                    tabBarStyle:{
                        height: 60,
                        backgroundColor: '#F25C5C'
                    },
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
                    tabBarActiveTintColor: '#000000',
                    tabBarStyle:{
                        height: 60,
                        backgroundColor: '#F25C5C'
                    },
                    headerShown: false,
                    tabBarIcon: ({ color }) => <Feather size={24} name="smartphone" color={color} />
                }}
            />
            <Tabs.Screen
                name="pedidos"
                options={{
                    title: 'Meus Pedidos',
                    tabBarActiveBackgroundColor: '#F25C5C',
                    tabBarInactiveBackgroundColor: '#F25C5C',
                    tabBarInactiveTintColor: '#ffffff',
                    tabBarActiveTintColor: '#000000',
                    tabBarStyle:{
                        height: 60,
                        backgroundColor: '#F25C5C'
                    },
                    tabBarIcon: ({ color }) => <Feather size={24} name="shopping-bag" color={color} />
                }}
            />
            
        </Tabs>
    );
}