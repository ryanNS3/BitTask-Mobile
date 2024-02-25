import {View, Text, StyleSheet, Image} from 'react-native'
import {funcionais} from '../../../styles/tipografia'
import {Academico, Pessoal, Outros, Profissional} from '../../../assets/icones/categoriaIcons'
import IconCalendario from '../../../assets/icones/calendario'
import IconPrioridade from '../../../assets/icones/prioridade'

export default function Tags(){
    return(
        <View style={styles.containerTags}>

            <View style={[styles.tagPrioridade, styles.tagGeral]}>
                <Image 
                style={{width: 25, height:23}}
                source={IconPrioridade}/>
                <Text style={[funcionais.f1, styles.texto]}>Alta Prioridade</Text>
            </View>

            <View style={[styles.tagAzul, styles.tagGeral]}>
                <Image 
                style={{width: 25, height:23}}
                source={IconCalendario}/>
                <Text style={[funcionais.f1, styles.texto]}>30/03/02</Text>
            </View>

            <View style={[styles.tagAzul, styles.tagGeral]}>
                <Image 
                    style={{width: 25, height:23}}
                    source={Academico}/>
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
    tagAzul:{
        backgroundColor: '#000C36',   
    },

    tagPrioridade:{
        backgroundColor: '#180000'
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
        paddingHorizontal: 10,
        width: '100%'   
    }

})