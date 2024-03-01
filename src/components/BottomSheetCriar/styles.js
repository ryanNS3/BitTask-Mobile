import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    sheet: {
        flex: 1,
        backgroundColor: '#d1dffe'
    },
    headerText: {
        fontSize: 30,
        alignSelf: 'center',
        marginVertical: 10,
        color: '#000c36',
        fontWeight: 'bold'
    },
    mainContainer: {
        gap: 30,
        padding: 20
    },
    form: {
        gap: 10,
    },
    label: {
        color: '#000c36'
    },
    input: {
        borderWidth: 1,
        borderColor: '#d1dffe',
        fontSize: 10,
        paddingLeft: 10,
        borderRadius: 5
    },
    date: {
        alignSelf: 'flex-start',
        padding: 10
    },
    prioridade: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    prioridadeBotao: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5
    },
    prioridadeSelecionada: {
        backgroundColor: '#3c77ff'
    },
    categoria: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 20,
        justifyContent: 'space-between',
    },
    categoriaBotao: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#d1dffe',
        borderRadius: 5,
        width: 150,
    },
    categoriaSelecionada: {
        backgroundColor: '#3c77ff'
    },
    criarTarefa: {
        alignItems: 'center',
        backgroundColor: '#195efc',
        borderRadius: 5
    },
    criarTarefaText: {
        fontSize: 16,
        color: '#fff',
        paddingVertical: 16,
    }
})