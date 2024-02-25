import {View, Text, StyleSheet, Pressable, Image} from 'react-native'
import { useState } from 'react'
import { Modal } from 'react-native'
import ModalApagarTarefa from '../modalApagarTarefa/modalApagarTarefa'
import { funcionais } from '../../../styles/tipografia'
import IconCaneta from '../../../assets/icones/caneta'
import IconLixeira from '../../../assets/icones/lixeira'

export default function ModalOutros(){
    // variavel de estado para a modal de confirmação da exclusão
    const [modalVisible, setModalVisible] = useState(false)

    function abrirOpcaoApagar(){
        setModalVisible(true)
    }


    return(
            <View style={styles.container}>
                <Pressable  style={[styles.btnEditar, styles.btnGeral]}>
                    <Image source={IconCaneta} />
                    <Text style={[funcionais.f2, {color: '#D1DFFE'}]}>Editar</Text>
                </Pressable>

                <Pressable onPress={abrirOpcaoApagar} style={[styles.btnApagar, styles.btnGeral]} >
                    <Image source={IconLixeira}/>
                    <Text style={[funcionais.f2, {color: '#FFCFCF'} ]}>Excluir</Text>
                </Pressable>

                <Modal 
                    visible={modalVisible}  
                    animationType='fade'
                    transparent={true} //fundo transparente
                    // fecha a modal se o usuario apertar o botão de voltar do dispositivo
                    onRequestClose={() => {
                        setModalVisible(!modalVisible)
                    }}>
                        <ModalApagarTarefa/>
                    </Modal>

            </View>
        
    )
}

const styles =StyleSheet.create({
    container:{
        width: 120,
        height: 119,
        backgroundColor: '#000C36',
        marginLeft: 20,
        top: '65%',
        borderRadius: 5,
        justifyContent: 'space-evenly',
    },

    btnGeral:{
        padding: 3,
        margin: 7,
        height: 30,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        borderRadius: 5,
        
    },

    btnEditar:{
        backgroundColor:'#031553',
        
    },

    btnApagar:{
        backgroundColor: '#250000',
    }
})