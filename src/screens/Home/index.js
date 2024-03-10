import { StatusBar } from 'expo-status-bar';
import { Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { CriarTarefa } from '../../components/CriarTarefa';

// estilos
import { styles } from './styles';
import { Titulos, funcionais, subtitulos } from '../../../global/tipografia';
import { Grafico } from '../../components/Grafico';
import { Colors } from '../../../global/colors';
import { Pesquisar } from '../../components/Pesquisar';
import React from 'react';

export function Home() {
  const [dadosPesquisa, setDadosPesquisa] = React.useState()
  const [itemSelecionado, setItemSelecionado] = React.useState()

  console.log(itemSelecionado)
  


  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        {/* titulo e */}
        <View style={styles.boasVindas}>
          <Text style={Titulos.h2}>
            Bem vindo
          </Text>
  
        </View>

        <Pesquisar value={dadosPesquisa} setValue={setDadosPesquisa}/>

        <Text style={[funcionais.f3, {marginBottom: 10}]}>
            Overview
        </Text>

        <View style={styles.overview} >

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



      {/* Tarefas */}

      <View style={styles.tarefas}>
        <View style={{flexDirection: "row", justifyContent: "space-between"}}>
          <Text style={Titulos.h2}>Tarefas</Text>
          <CriarTarefa/>
        </View>

        <View style={styles.navegacaoTarefa}>

          <Pressable onPress={() => setItemSelecionado("Para hoje")} style={ itemSelecionado === "Para hoje" ? [styles.botaoTarefa,styles.selecionado] : [styles.botaoTarefa]} >
            <Text>Para hoje</Text>
          </Pressable>

          <Pressable onPress={() => setItemSelecionado("pendentes")} style={itemSelecionado === "pendentes" ? [styles.botaoTarefa, styles.selecionado] : [styles.botaoTarefa]}>
            <Text>Pendentes</Text>
          </Pressable>

          <Pressable onPress={() => setItemSelecionado("concluido")} style={itemSelecionado === "concluido" ? [styles.botaoTarefa, styles.selecionado] : [styles.botaoTarefa]}>
            <Text>Concluido</Text>
          </Pressable>

        </View>

        <TouchableOpacity style={styles.botaoVer}>
          <Text>Ver tudo</Text>

        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}
