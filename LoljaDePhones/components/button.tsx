import { Pressable,Text,StyleSheet } from "react-native";

type Props = {
    title: string;
    onPress: () => void;
}

export const Button = ({title, onPress}: Props) =>{
    return(
        <Pressable onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>{title}</Text>
        </Pressable>
    );
}
const styles = StyleSheet.create({
    button:{
        backgroundColor: '#F25C5C',
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 25
    },
    buttonText:{
        fontSize: 20,
        fontWeight: '700',
        color: '#000000',
        textAlign: 'center'
    }
})