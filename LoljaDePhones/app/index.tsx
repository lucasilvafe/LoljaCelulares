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
             <Text style={styles.h1}>Lolja De Phones</Text>
            <Image
                source={require('../assets/logo_size.jpg')}
                style={styles.logo}
                resizeMode="cover"
            />
           
            <Text style={styles.h2}>Só vendemos celulares e nada mais, não insista.</Text>
            <Button
                title="Comprar Phones"
                onPress={start}
            />
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#F29D35',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo:{
        width: 200,
        height: 200, 
        marginBottom: 20
    },
    h1:{
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10
    },
    h2:{
        fontSize: 16,
        marginBottom: 10
    }
})