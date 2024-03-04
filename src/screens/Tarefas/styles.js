import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F9FE',
        gap: 30
    },
    containerTarefas: {
        gap: 30,
        marginHorizontal: 20,
        flex: 1
    },
    pesquisar: {
        paddingLeft: 10,
        paddingVertical: 5,
        borderWidth: 0.3,
        borderRadius: 5
    },
    filtroTarefas: {
        flexDirection: 'row',
        backgroundColor: '#d1dffe',
        borderRadius: 5,
        padding: 10,
        gap: 15
    },
    listaTarefas: {
        marginBottom: 10
    },
    tarefa: {
        borderWidth: 0.3,
        borderRadius: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    }
});
