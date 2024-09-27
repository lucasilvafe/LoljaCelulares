import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, StyleSheet, View, Image, Text } from "react-native";
import { Stack, router, useLocalSearchParams } from "expo-router";
import { Button } from "../../components/button";
import { getProductById } from "../../services/product";


export default function Screen() {
    const { id } = useLocalSearchParams();
    const idProduct = parseInt(id as string)

    const product = getProductById(idProduct);
    if (!product) return router.back;


    const comprar = () => {
        alert("você clicou no item " + product.title);

    }

    return (
        <SafeAreaView style={styles.container} >
            <Stack.Screen options={{ title: '' }} />
            <ScrollView style={styles.area}>
            <Text style={styles.title}> {product.title}</Text>
                <Image
                    style={styles.img}
                    source={{ uri: product.image }}
                    resizeMode="cover"
                />
                <Text style={styles.price}>R${product.price.toFixed(2)}</Text>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, quasi, perferendis fugit distinctio obcaecati omnis aliquid dolorum corporis architecto culpa quaerat veritatis ad impedit beatae rerum similique eos qui reiciendis.</Text>
                
            <View style={styles.ButtonArea}>
                <Button
                    title="Comprar agora"
                    onPress={comprar}
                />
               
            </View>
            </ScrollView>
            

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },

    area: {
        flex: 1,
        padding: 20,

    },
    ButtonArea: {
        padding: 10,
    },
    img: {
        width: "100%",
        height: 380,
        borderRadius: 10,
        marginBottom: 20
    },
    title: {
        fontSize: 29,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 10
    },
    description: {
        fontSize: 15,
        marginBottom: 20,
        color: '#555555'
    },

    price: {
        fontSize: 24,
        color: '#F25C5C',
        textAlign: 'left',
        fontWeight: '700'
    },
    press:{

    }
});

