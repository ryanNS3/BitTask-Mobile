import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { styles } from './style'
import { SetaPreenchida } from '../../../../assets/icons/setaPreenchida'
import { funcionais } from '../../../../global/tipografia'
import { useNavigation } from '@react-navigation/native'


export const BotaoVerTudo = ({pagina}) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={() => pagina === "tarefas" ? navigation.navigate('TarefasStack') : navigation.navigate('CategoriaStack')}  style={styles.botao}> 
        <Text style={[funcionais.f2,styles.textoBotao]}>Ver tudo</Text>
        <SetaPreenchida/>
    </TouchableOpacity>
  )
}
