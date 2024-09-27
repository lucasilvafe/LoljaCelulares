import { Pressable, Text, StyleSheet, Image,View } from "react-native";
import { Category } from "../types/category"
import { router } from "expo-router";

type Props ={
    data: Category;
}

export const CategoryItem = ({data}: Props) =>{
    const click =() =>{

        router.navigate(`/categories/${data.id}`)
    }
    return(

        <Pressable onPress={click} style={styles.container}>
            <Image
                source={{uri: data.cover}}
                resizeMode="cover"
                style={styles.image}
            />
            <View style={styles.bg}></View>
            <View style={styles.box}>
                <Text style={styles.title}>{data.title}</Text>
            </View>
        </Pressable>

    );
}
const styles = StyleSheet.create({
    container:{
        margin:5,
        backgroundColor: "#ffffff",
        borderRadius: 5
    },
    image:{
        width: '100%',
        height: 250,
        borderRadius: 5
    },
    bg:{
        height: 250,
        backgroundColor: "#F25C5C",
        opacity: 0.2,
        borderRadius: 5,
        marginTop: -250
    },
    box:{
        height: 150,
        marginTop: -150,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: '500'
    }
})