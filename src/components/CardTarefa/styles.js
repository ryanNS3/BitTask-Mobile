import { StyleSheet } from "react-native";
import { Colors } from "../../../global/colors";

export const styles = StyleSheet.create({
    boxCard: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 16,
        marginBottom: 10,
        borderRadius: 5,
        backgroundColor: Colors.az1.cor,
        elevation: 3,
        shadowColor: "#031553"
    },
    checkbox: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 8,
        padding:4
    },
    prioridade: {
        marginRight:5,
        width: 10,
        borderRadius: 5,
        height: "100%",
    },
    textoData: {
      alignSelf: "flex-end"
    },
    seta: {
        justifyContent: 'flex-end',
        alignItems: "flex-end",
        gap: 10
    }
})