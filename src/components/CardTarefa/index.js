import React, { useState } from 'react'
import { Pressable, Text, View} from 'react-native'
import { Checked } from '../../../assets/icons/Checked'
import { Incomplete } from '../../../assets/icons/Incomplete'
import { styles } from './styles'
import { Colors } from '../../../global/colors'
import { Seta } from '../../../assets/icons/seta'

export const CardTarefa = ({nome, tarefas, setTarefas, prioridade, id, status, data }) => {

  const [corPrioridade, setCorPrioridade] = useState(()=>{
    if (prioridade == "alta") return Colors.prioridadeAlta.cor
    else if (prioridade == "média") return Colors.prioridadeMedia.cor
    else return Colors.prioridadeBaixa.cor
  })

  function handleCheck(id){
    setTarefas(tarefas.map((tarefa)=>{ 
        if (id == tarefa.id){
          console.log({...tarefa, status: tarefa.status === 0 ? 1 : 0})
          return{...tarefa, status: tarefa.status === 0 ? 1 : 0 }
        }
        return tarefa
    }))
  }

  const dataEntrega = new Date(data).toLocaleDateString();

  return (
   <Pressable style={styles.boxCard}>
      <Pressable  style={[styles.checkbox]} onPress={(() => handleCheck(id))}>
        <View style={[styles.prioridade,{backgroundColor: corPrioridade}]}></View>
        {status == true &&
          <Checked/>
        }
        {status == false &&
          <Incomplete/>
        }
        <Text style={{marginLeft:8}}>{nome}</Text>
      </Pressable>

      <View style={styles.seta}>
        <Seta/>
        <Text style={styles.textoData}> 
          {dataEntrega}
        </Text>
      </View>
   </Pressable>
  )
}
