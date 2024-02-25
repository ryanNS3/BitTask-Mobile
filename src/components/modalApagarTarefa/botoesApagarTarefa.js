import { View, Text, StyleSheet, Pressable} from 'react-native'
import {funcionais} from '../../../styles/tipografia'

const BotoesModal = () => {
    return(
        <View style={styles.btnArea}>
                    
                    <Pressable style={[styles.btnCancelar, styles.btnGeral]}>
                        <Text style={[funcionais.f3, {color: '#fff'}]}>CANCELAR</Text>
                    </Pressable>

                    <Pressable style={[styles.btnConfirmar, styles.btnGeral]}>
                        <Text style={[funcionais.f3, {color: '#fff'}]}>APAGAR</Text>
                    </Pressable>

                </View>
    )
}

const styles = StyleSheet.create({
    btnArea:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    btnGeral: {
        width: 130,
        height: 45,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#BE3636',
    },

    btnCancelar:{
        borderStyle: 'solid',
        borderWidth: 2
    },

    btnConfirmar:{
        backgroundColor: '#BE3636'
    }
})

export default BotoesModal
