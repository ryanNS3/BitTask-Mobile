import { View, Text, StyleSheet} from 'react-native'
import { funcionais, titulos, corpoTexto } from '../../../global/tipografia'
import BotoesModal from './botoesApagarTarefa'

const ModalApagarTarefa = () => {
    return(
        <View style={styles.container}>
            <View style={[styles.tag, funcionais.f1]}><Text>atencao</Text></View>

            <View style={styles.txtArea}>
                <Text style={styles.text}>Deseja apagar a tarefa?</Text>
                <Text style={[corpoTexto, styles.text]}>Se aceito a tarefa será excluida permanentemente e não poderá ser acessada posteriormente.</Text>
            </View>

                <BotoesModal></BotoesModal>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '90%',
        height: 450,
        backgroundColor: '#141414',
        borderRadius: 15,
        marginVertical: '50%',
        padding: 20,
        alignSelf: 'center'
    },
    
    txtArea:{
        height: '75%',
        width: '100%',
        alignItems:'center',
        textAlign: 'center',
        marginTop: 10
    },

    text: {
        color: '#FFFFFF',
    },

    tag: {
        backgroundColor: '#5C0202',
        width: 120,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#FFFFFF',
        borderRadius: 5
    }
})


export default ModalApagarTarefa