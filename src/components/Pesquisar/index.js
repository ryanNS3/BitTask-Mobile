import React, { useState } from 'react'
import { Modal, Pressable, TextInput,Text, View } from 'react-native'
import { BotaoPesquisar } from '../../../assets/icons/botaoPesquisar'

import { styles } from './styles'
import BotaoVoltar from '../../../assets/icones/botaoVoltar'
import { CardTarefa } from '../CardTarefa'
import { FlatList } from 'react-native-gesture-handler'

export const Pesquisar = ({value, setValue}) => {
    const [modal,setModal] = useState(false)

    const [tarefas, setTarefas] = useState([
        
        {
            id: "0",
            nome: "cafe",
            prioridade: "alta",
            check: true,
            data: '15/04'
            
        },
        {
            id: 1,
            nome: "cafe",
            prioridade: "alta",
            check: true,
            data: '15/04'
            
        },
        {
            id: 2,
            nome: "cafe",
            prioridade: "média",
            check: true,
            data: '15/04'
            
        },
        {
            id: 3,
            nome: "cafe",
            prioridade: "alta",
            check: true,
            data: '15/04'
            
        },
        {
            id: 4,
            nome: "cafe",
            prioridade: "baixa",
            check: true,
            data: '15/04'
            
        },
        {
            id: 5,
            nome: "cafe",
            prioridade: "baixa",
            check: true,
            data: '15/04'
            
        },
        {
            id: 6,
            nome: "cafe",
            prioridade: "baixa",
            check: true,
            data: '15/04'
            
        },
        {
            id: 7,
            nome: "cafe",
            prioridade: "baixa",
            check: true,
            data: '15/04'
            
        },
        {
            id: 8,
            nome: "cafe",
            prioridade: "baixa",
            check: true,
            data: '15/04'

        },
    
    ])

    function handleModal(){
        setModal(!modal)
    }

    
  return (
    <View>
        <Modal
            visible={modal}
            animationType='slide'
            transparent
            onRequestClose={handleModal}
        >
           <View  style={styles.modal}>
                <Pressable style={styles.botaoVoltar} onPress={handleModal}>
                    <BotaoVoltar/>
                    <Text>Fechar</Text>
                </Pressable>
        
                <TextInput value={value} onChangeText={setValue} style={{fontSize:40}} placeholder='Pesquisar'/>

                <View style={styles.resultado}>
                    <Text>
                        Resultados
                    </Text>
                    <FlatList
                        data={tarefas}
                        keyExtractor={item => item.id}
                        renderItem={({item}) => (
                            <CardTarefa key={item.id} check={item.check}  nome={item.nome} tarefas={tarefas} prioridade={item.prioridade} setTarefas={setTarefas} id={item.id} />
                        )}
                    />

                </View>
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
