import { Stack } from "expo-router";

export default function CategoryLayout(){
    return(
        <Stack>
            <Stack.Screen name="list" options={{title: 'Marcas'}}/>
            <Stack.Screen name="[id]"/>
        </Stack>
    );
}