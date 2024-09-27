import { Link } from "expo-router";
import { Product } from "../types/product"
import { Pressable, Text, StyleSheet, Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {
    data: Product;
}

export const ProductItem = ({ data }: Props) => {
    return (
        // rota dinamica

        <SafeAreaView style={styles.container}>
            <View style={styles.textoProduto}>
                <Image
                    style={styles.img}
                    source={{ uri: data.image }}
                    resizeMode="cover"
                />
                <View style={styles.info}>
                    <Text style={styles.title}>{data.title}</Text>
                    <Text style={styles.description}>{data.description}</Text>
                </View>

            </View>


            <View>
                <Text style={styles.price}>R$ {data.price.toFixed(2)}</Text>
                <Link href={`/product/${data.id}`} asChild>
                    <Pressable style={styles.compbtn}>
                        <Text style={styles.textoComprar}>Comprar</Text>
                        <Image
                            style={styles.imgcart}
                            source={require('../assets/shoppingCart.png')}
                        />
                    </Pressable>
                </Link>
            </View>
        </SafeAreaView>





    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        marginBottom: 20,
        backgroundColor: '#ffffff'
    },
    img: {
        width: 100,
        height: 100,
        backgroundColor: "#ffffff",
        marginTop: 4,
        marginRight: 10
    },
    info: {
        flex: 1
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10
    },
    description: {
        fontSize: 13,
        color: "#555555",
        marginBottom: 10
    },
    price: {
        fontSize: 24,
        fontWeight: "900",
        textAlign: 'center',
        color: '#F25C5C',
        marginBottom: 5
    },
    compbtn: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#F25C5C',
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    textoProduto: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    textoComprar:{
        fontWeight: '700'
    },
    imgcart:{
        width: 24,
        height: 24,
        marginLeft: 10
    }
})