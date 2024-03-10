import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    containerTags:{
        flexDirection: 'row',
        marginVertical: 15,
        marginHorizontal: 15,
        justifyContent: 'space-between'
    },
    tagPrioridade:{
        backgroundColor: '#180000',
    },
    tagGeral:{
        width: 100,
        height: 40,
        borderRadius:5,
        flexDirection:"row",
        alignItems:'center',
        paddingHorizontal: 5
    },
    tagAzul:{
        backgroundColor: '#000C36',   
    },
    nomeTarefa: {
        color: '#000c36',
        fontSize: 40,
        marginLeft: 15,
        marginBottom: 15
    },
    descricaoTarefa:{
        marginHorizontal:20,
        width:'90%',
        height: 220,
        marginTop: 20
    },
    descricao: {
        color: '#000C36',
        fontSize: 20
    },
    texto:{
        color: '#fff', 
        paddingHorizontal: 10,
        width: '100%'   
    },
    container: {
        flex: 1,
        justifyContent: 'space-between'
    },
    btnArea:{
        flexDirection:'row',
        marginHorizontal: 20,
        gap: 20
    },

    btnOutros:{
        backgroundColor:'#D1DFFE',
        width:120,
        height: 46,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },

    btnConcluir:{
        backgroundColor:'#195EFC',
        width: 200,
        height: 46,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 10
    }
})