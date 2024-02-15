import {View, Text, StyleSheet, Pressable, Image} from 'react-native'

export default function ModalOutros(){
    return(
            <View style={styles.container}>
                <Pressable>
                    <Image source={require('../assets/icones/caneta.svg')} />
                    <Text>Editar</Text>
                </Pressable>

                <Pressable>
                    <Image source={require('../assets/icones/lixeira.svg')}/>
                    <Text>Excluir</Text>
                </Pressable>
            </View>
        
    )
}