import React, { useEffect, useState } from 'react'
import { View,Text } from 'react-native'
// imporantando grafico
import { PieChart } from 'react-native-svg-charts'

import { styles } from './style'
import { Colors } from '../../../global/colors'

export const Grafico = ({porcentagem, tamanho}) => {
    const [changeColorByPorcen, setChangeColorByPorcen] = React.useState([])

    const azul = Colors.azCorEnfase.cor
    const amarelo = Colors.am3.cor
    const vermelho = Colors.ve4.cor
    const transparente =  "rgba(255, 0, 0, 0)"

    // mudança de cor de acordo com porcentegem
    React.useEffect(() =>{
        setChangeColorByPorcen(null)
        if (porcentagem >= 100) return setChangeColorByPorcen([azul, azul, azul, azul])
        if (porcentagem >= 80) return setChangeColorByPorcen([azul, azul, azul, transparente])
        else if (porcentagem >= 60) return setChangeColorByPorcen([transparente,transparente,amarelo, amarelo ])
        else return setChangeColorByPorcen([vermelho,transparente,transparente,transparente])
    },[porcentagem])
    
    // Divisão de 100 por 4
    const dadosGrafico = [25,25,25,25]

    // 
    const pieData = dadosGrafico.map((value, index) =>({
        value,
        key: `${index} + ${value}`,
        svg:{
            fill: changeColorByPorcen[index]
        }
    }))
    
  return (
    <View style={styles.container}>
      <PieChart
        padAngle={94}
        innerRadius={"75%"} 
        style={{height:55, width:85}} 
        data={pieData}/>
    </View>
  )
}
