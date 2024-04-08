import React from 'react'
import { Pressable,View,Text } from 'react-native'
import Seta from '../../../assets/icons/seta'
import { Pessoal } from '../../../assets/icones/categoriaIcons'
import { Academico } from '../../../assets/icones/categoriaIcons'
import { Profissional } from '../../../assets/icones/categoriaIcons'
import { Outros } from '../../../assets/icones/categoriaIcons'
import { useNavigation } from "@react-navigation/native";
import { styles } from './style'
import { Titulos } from '../../../global/tipografia'

export const CardCategoria = ({categoria}) => {
    const navigation = useNavigation();
  return (
    <Pressable
        onPress={()=> navigation.navigate('CategoryDetails', {id: 1, category : categoria, finished_percentage: 95 })}
        style={styles.card}>
            <View style={styles.chart}>
                {categoria === 'Pessoal' ? <Pessoal size={48} />: 
                categoria === 'Acadêmico' ? <Academico size={48} />: 
                categoria === 'Profissional' ? <Profissional size={48} />: 
                <Outros />}
            </View>

            <View style={styles.textContent}>
                <Text style={Titulos.h4}>{categoria}</Text>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sit exercitationem consequatur praesentium, qui quae facilis corrupti reprehenderit? Error at delectus necessitatibus unde rem ipsam voluptas quis, quos consequuntur magnam.</Text> 
            </View>
        </Pressable>
  )
}
