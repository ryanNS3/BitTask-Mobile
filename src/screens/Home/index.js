import { StatusBar } from 'expo-status-bar';
import { FlatList, Pressable, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { CriarTarefa } from '../../components/CriarTarefa';

// biblioteca de grafico


// estilos
import { styles } from './styles';
import { Titulos, funcionais, subtitulos } from '../../../global/tipografia';
import { Grafico } from '../../components/Grafico';
import { Colors } from '../../../global/colors';
import React from 'react';
import { Pesquisar } from '../../components/pesquisar';
import { openDatabase, tarefasHoje, verTarefa, verTarefasStatus } from '../../database';
import { CardTarefa } from '../../components/cardTarefa';
import { BotaoVerTudo } from '../../components/buttons/verTudo';
import { CardCategoria } from '../../components/CardCategoria';
import { BottomSheetContext } from '../../contexts/bottomSheetContext';

export function Home() {
  const [dadosPesquisa, setDadosPesquisa] = React.useState()
  const [itemSelecionado, setItemSelecionado] = React.useState("pendentes")
  const [tarefasParaHoje, setTarefasParaHoje] = React.useState()
  const [tarefasPendentes, setTarefasPendentes] = React.useState()
  const [tarefasConcluidas,setTarefasConcluidas] = React.useState()



  const { setIsBottomSheetVerOpen, setTarefaSelecionadaId } = React.useContext(BottomSheetContext);
    const handleOpenSheet = (taskId) => {
      setIsBottomSheetVerOpen(true);
      setTarefaSelecionadaId(taskId);
    };



  const db = openDatabase()

  React.useEffect(() =>{
    
    if (itemSelecionado === "Para hoje"){
      setTimeout(function(){ 
        tarefasHoje(db, (tarefas) =>{
          setTarefasParaHoje(tarefas)
      })}, 1000)
    }

    if (itemSelecionado === "pendentes"){
    setTimeout(function(){ 
      verTarefasStatus(db, 0, (tarefas) =>{
      setTarefasPendentes(tarefas)
    })}, 1000)
   }
  
  
  else if (itemSelecionado === "concluidos"){
    setTimeout(function(){ 
      verTarefasStatus(db, 1, (tarefas) =>{
      setTarefasPendentes(tarefas)
    })}, 1000)
  }

  
  },[itemSelecionado])

  
    
  const renderizarIConcluidos = ({ item }) => {
      return (
        <CardTarefa
            nome={item.nome}
            onPress={()=> handleOpenSheet(item.id)}
            tarefas={tarefasConcluidas}
            setTarefas={setTarefasConcluidas}
            prioridade={item.prioridade}
            id={item.id}
            status={item.status}
            data={item.data_entrega}
        />
      );
    
};    
  const renderizarPendentes = ({ item }) => {
      return (
        <CardTarefa
            nome={item.nome}
            onPress={()=> handleOpenSheet(item.id)}
            tarefas={tarefasPendentes}
            setTarefas={setTarefasPendentes}
            prioridade={item.prioridade}
            id={item.id}
            status={item.status}
            data={item.data_entrega}
        />
      );
    
};    
  const renderizarParaHoje = ({ item }) => {
      return (
        <CardTarefa
            nome={item.nome}
            onPress={()=> handleOpenSheet(item.id)}
            tarefas={tarefasParaHoje}
            setTarefas={setTarefasParaHoje}
            prioridade={item.prioridade}
            id={item.id}
            status={item.status}
            data={item.data_entrega}
        />
      );
    
};    
    return (
      <View style={styles.container}>
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
  
        <ScrollView 
        contentContainerStyle={styles.navegacaoTarefa}
        horizontal
        >
          <View style={{flexDirection: "row",alignItems: "center"}}>
            <Pressable onPress={() => setItemSelecionado("Para hoje")} style={ itemSelecionado === "Para hoje" ? [styles.botaoTarefa,styles.selecionado] : [styles.botaoTarefa]} >
              <Text style={[funcionais.f2, itemSelecionado === "Para hoje" ? {color: "white"}: null]}>Para hoje</Text>
            </Pressable>
  
            <Pressable onPress={() => setItemSelecionado("pendentes")} style={itemSelecionado === "pendentes" ? [styles.botaoTarefa, styles.selecionado] : [styles.botaoTarefa]}>
              <Text style={[funcionais.f2, itemSelecionado === "pendentes" ? {color: "white" } : null]}>Pendentes</Text>
            </Pressable>
  
            <Pressable onPress={() => setItemSelecionado("concluidos")} style={itemSelecionado === "concluidos" ? [styles.botaoTarefa, styles.selecionado] : [styles.botaoTarefa]}>
              <Text style={[funcionais.f2, itemSelecionado == "concluidos"? {color: "white"} : null]}>Concluidos</Text>
            </Pressable>
          </View>
  
          <BotaoVerTudo pagina={"tarefas"}/>
        </ScrollView>

        {itemSelecionado === "pendentes" &&
          <FlatList
            style={styles.listaTarefa}
            data={tarefasPendentes}
            keyExtractor={item => item.id}
            renderItem={renderizarPendentes}
            />
          }
        {itemSelecionado === "concluidos" &&
          <FlatList
            style={styles.listaTarefa}
            data={tarefasConcluidas}
            keyExtractor={item => item.id}
            renderItem={renderizarIConcluidos}
          />}
        {itemSelecionado === "Para hoje" &&
          <FlatList
            style={styles.listaTarefa}
            data={tarefasParaHoje}
            keyExtractor={item => item.id}
            renderItem={renderizarParaHoje}
          />
        

        }


  
  
      </View>
  
  
      {/* categorias */}
  
      <View style={styles.categoria}>
        <View style={styles.verMaisCategoria}>
          <Text style={Titulos.h2}>Categorias</Text>
          <BotaoVerTudo pagina={"categoria"}/>
        </View>
        
        <ScrollView style={styles.scrollCategoria}  horizontal>
          <CardCategoria categoria={"Pessoal"}/>
          <CardCategoria categoria={"Acadêmico"} />
          <CardCategoria categoria={"Profissional"} />

        </ScrollView>
       
  
      </View>
  
      <StatusBar style="auto" />
    </View>
    );
  
}