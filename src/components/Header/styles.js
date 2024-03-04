import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    image: {
        width: '100%', 
        height: 150,
    },
    voltar: {
        display: 'flex',
        flexDirection: 'row',
        left: '5%',
        top: '5%',
    },
    voltarText: {
        fontFamily: "Roboto",
        fontSize: 15,
        letterSpacing: 0.2,
        lineHeight: 21,
        fontWeight: "bold",
        marginLeft: '3%',
        top: '1%'
    },
    row: {
        top: '10%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerText: {
        fontFamily: "Roboto",
        fontSize: 30,
        lineHeight: 39,
        fontWeight: "bold",
        marginLeft: 20,
        marginRight: '30%'
    },
});