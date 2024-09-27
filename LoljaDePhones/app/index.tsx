import { SafeAreaView } from "react-native-safe-area-context";
import { Image, StyleSheet,Text } from "react-native";
import { Button } from "../components/button";
import { router } from "expo-router";

export default function Screen (){
    const start = () =>{
        router.replace('/home')
    }

    return(
        <SafeAreaView style={styles.container}>
            <Image
                source={require('../assets/logo-loljaphone.png')}
                style={styles.logo}
                resizeMode="cover"
            />
            <Button
                title="Comprar Phones"
                onPress={start}
            />

            <Text style={styles.textrodape}>©2024 LoljaPhone</Text>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo:{
        marginTop: 250,
        width: 450,
        height: 150, 
        marginBottom: 20
    },
    
    textrodape:{
        flex: 1,
        fontWeight: '300',
        marginTop: 200
    }
})