import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View } from 'react-native';
import { CriarTarefa } from '../../components/CriarTarefa';

// biblioteca de grafico


// estilos
import { styles } from './styles';
import { Titulos, funcionais, subtitulos } from '../../../global/tipografia';
import { Grafico } from '../../components/Grafico';
import { Colors } from '../../../global/colors';
import { Pesquisar } from '../../components/pesquisar';
import React from 'react';

export function Home() {
  const [dadosPesquisa, setDadosPesquisa] = React.useState()

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        {/* titulo e */}
        <View style={styles.boasVindas}>
          <Text style={Titulos.h2}>
            Bem vindo
          </Text>
  
        </View>

        <Pesquisar/>

        <Text style={[funcionais.f3, {marginBottom: 10}]}>
            Overview
        </Text>
        <View  showsHorizontalScrollIndicator={true} horizontal style={styles.overview} >

          <View style={[styles.cardPorcen, {backgroundColor: Colors.az9.cor}]} >
            <Grafico porcentagem={100}/>
            <Text style={[funcionais.f2, {color:"white", maxWidth: 75}]}>
              Tarefas concluidas
            </Text>
          </View>

          <View style={[styles.cardPorcen, {backgroundColor: Colors.am8.cor}]}>
            <Grafico porcentagem={65}/>
            <Text style={[funcionais.f2, {color:"white", maxWidth: 59.8}]}>
              Tarefas pendentes
            </Text>

          </View>


        </View>
      
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}
