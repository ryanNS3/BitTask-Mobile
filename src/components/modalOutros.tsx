import {View, Text, StyleSheet, Pressable, Image} from 'react-native'
import { funcionais } from '../../styles/tipografia'

export default function ModalOutros(){
    return(
            <View style={styles.container}>
                <Pressable style={[styles.btnEditar, styles.btnGeral]}>
                    <Image source={require('../../assets/icones/caneta.svg')} style={{width: 13, height: 13}} />
                    <Text style={[{color:'#D1DFFE', marginRight: 20, marginLeft: 10}, funcionais.f1]}>Editar</Text>
                </Pressable>

                <Pressable  style={[styles.btnApagar, styles.btnGeral]}>
                    <Image source={require('../../assets/icones/lixeira.svg')}/>
                    <Text style={[{color: '#FFCFCF', marginRight: 20, marginLeft: 10}, funcionais.f1]}>Excluir</Text>
                </Pressable>
            </View>
        
    )
}

const styles =StyleSheet.create({
    container:{
        width: 120,
        height: 119,
        backgroundColor: '#000C36',
        marginLeft: 20,
        top: 400,
        borderRadius: 5,
        justifyContent: 'space-evenly'
    },

    btnGeral:{
        padding: 3,
        margin: 7,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
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