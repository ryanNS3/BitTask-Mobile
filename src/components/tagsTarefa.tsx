import {View, Text, StyleSheet, Image} from 'react-native'
import {funcionais} from '../../styles/tipografia'


export default function Tags(){
    return(
        <View style={styles.containerTags}>

            <View style={[styles.tagCategoria, styles.tagGeral]}>
                <Image 
                style={{width: 25, height:23}}
                source={require('../../assets/icones/categoriaPessoal.svg')}/>
                <Text style={[funcionais.f1, styles.texto]}>Alta Prioridade</Text>
            </View>

            <View style={[styles.tagCategoria, styles.tagGeral]}>
                <Image
                style={{width: 25, height:23}}
                source={require('../../assets/icones/categoriaPessoal.svg')}/>  
                <Text style={[funcionais.f1, styles.texto]}>30/03/02</Text>
            </View>

            <View style={[styles.tagCategoria, styles.tagGeral]}>
                <Image 
                    style={{width: 25, height:23}}
                    source={require('../../assets/icones/categoriaPessoal.svg')}/>
                <Text style={[funcionais.f1, styles.texto]}>Pessoal</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerTags:{
        flexDirection: 'row',
        marginBottom: 20,
        justifyContent:'space-evenly'
    },
    tagCategoria:{
        backgroundColor: '#000C36',
        
    },
    tagGeral:{
        width: 100,
        height: 40,
        borderRadius:5,
        flexDirection:"row",
        alignItems:'center',
        paddingHorizontal: 5
    },

    texto:{
        color: '#fff', 
        paddingHorizontal: 10
    }

})