import { StyleSheet } from "react-native"
import { Colors } from "../../../global/colors"

export const styles = StyleSheet.create({
    botaoPesquisar:{
        backgroundColor: Colors.az1.cor,
        borderRadius: 4,
        padding: 8,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 23,
        elevation: 6,
        shadowColor: "#031553"

    },
    modal:{
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 30,
        backgroundColor: Colors.az1.cor,
    },
    botaoVoltar:{
        flexDirection: "row",
        alignItems: "center"
    },
    resultado:{
        marginTop: 30
    }
})