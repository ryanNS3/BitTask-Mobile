import React, { useState } from "react"


import { View, Text, Pressable } from "react-native"

import Seta from "../../../assets/icons/seta"
import { Checked } from "../../../assets/icons/Checked"
import { Incomplete } from "../../../assets/icons/Incomplete"

// estilos
import { styles } from "./styles"
import { Colors } from "../../../global/colors"
import { atualizarStatus } from "../../database"
import { openDatabase } from "../../database"


export const CardTarefa = ({nome, tarefas, setTarefas, prioridade, id, status, data, onPress }) => {
  const db = openDatabase()


  const [corPrioridade, setCorPrioridade] = useState(()=>{
    if (prioridade == "alta") return Colors.prioridadeAlta.cor
    else if (prioridade == "média") return Colors.prioridadeMedia.cor
    else return Colors.prioridadeBaixa.cor
  })

  
  function handleCheck(id){
    setTarefas(tarefas.map((tarefa)=>{ 
        if (id === tarefa.id){
         let statusAtual = tarefa.status === 0 ? 1 : 0
          atualizarStatus(db,tarefa.id, statusAtual)
          return{...tarefa, status: statusAtual}
        }
        return tarefa
    }))
  }

  const dataEntrega = new Date(data).toLocaleDateString();

  return (
   <Pressable onPress={onPress } style={styles.boxCard}>
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
