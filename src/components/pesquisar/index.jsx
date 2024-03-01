import React, { useState } from 'react'
import { Modal, Pressable, TextInput,Text, View } from 'react-native'
import { BotaoPesquisar } from '../../../assets/icones/botaoPesquisar'

import { styles } from './styles'

export const Pesquisar = ({value, setValue}) => {
    const [modal,setModal] = useState(false)

    function handleModal(){
        setModal(!modal)
    }
  return (
    <View>
        <Modal
            visible={modal}
            transparent
            onRequestClose={handleModal}
        >
           <View  style={styles.modal}>
                <Pressable onPress={handleModal}>
                    <Text>Fechar</Text>
                </Pressable>
           </View>
          

        </Modal>

        <Pressable style={styles.botaoPesquisar} onPress={handleModal}>
            <BotaoPesquisar/>
            <Text>
                Pesquisar
            </Text>
        </Pressable>

    </View>
   
   

  )
}
