import { View, Text, StyleSheet, Image, Pressable} from 'react-native'
import {funcionais} from '../../../styles/tipografia'
import { useState } from 'react'
import { Modal } from 'react-native'
import ModalOutros from './modalOutros'
import IconOutros from '../../../assets/icones/outros'


export default function BtnVerTarefa(){
    // variavel de estado para a modal de opções
    const [modalVisible, setModalVisible] = useState(false)

    // função que seta a visibilidade da modal como true
    const abrirOpcoes = () => {
        setModalVisible(true)
    }

    return(
        <View style={styles.btnArea}>

                    <Pressable style={styles.btnOutros} onPress={abrirOpcoes}>
                        <Image source={IconOutros} />
                        <Text style={[funcionais.f3]}>Outros</Text>
                    </Pressable>

                    <Pressable style={styles.btnConcluir}>
                        <Text style={[funcionais.f3, {color:'#fff'}]}>Concluir tarefa</Text>
                    </Pressable>

                    <Modal 
                            visible={modalVisible} 
                            animationType='fade'
                            transparent={true}
                            // fecha a modal se o usuario apertar o botão de voltar do dispositivo
                            onRequestClose={() => {
                                setModalVisible(!modalVisible)
                            }}>
                            
                        <ModalOutros/>
                    </Modal>

                </View>
    )
}

const styles = StyleSheet.create({
    btnArea:{
        flexDirection:'row',
        width: '90%',
        justifyContent: 'space-around',
        marginHorizontal: 20,
    },

    btnOutros:{
        backgroundColor:'#D1DFFE',
        width:120,
        height: 46,
        flexDirection: 'row',
        justifyContent:'space-evenly',
        alignItems: 'center',
        borderRadius: 5
    },

    btnConcluir:{
        backgroundColor:'#195EFC',
        width: 200,
        height: 46,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    }
})