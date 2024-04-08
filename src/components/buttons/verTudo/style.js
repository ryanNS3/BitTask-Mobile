import { StyleSheet } from "react-native"
import { Colors } from "../../../../global/colors"


export const styles = StyleSheet.create({
    botao:{
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "center",
        gap:2,
        paddingHorizontal: 9,
        paddingVertical: 7,
        marginLeft: 10,
        borderRadius: 5,
        backgroundColor: Colors.az2.cor,

    },

    textoBotao:{
        color: Colors.az4.cor
    }
})