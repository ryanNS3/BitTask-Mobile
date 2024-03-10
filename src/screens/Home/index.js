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
    
    // if (itemSelecionado === "Para hoje"){
    //   tarefasHoje(db, (tarefas) =>{
    //     setTarefasParaHoje(tarefas)
    //   })
    // }

    if (itemSelecionado === "pendentes"){
        verTarefasStatus(db, 0, (tarefas) =>{
          setTarefasPendentes(tarefas)
        })

   }
  
  
  else if (itemSelecionado === "concluidos"){
    verTarefasStatus(db, 1, (tarefas) =>{
      setTarefasConcluidas(tarefas)
    })
  }

  
  },[itemSelecionado])

  

  const renderizarIConcluidos = ({ item }) => {
    // Converte a data da string para o objeto Date
    const dataEntrega = new Date(item.data_entrega).toLocaleDateString();
  
        <CardTarefa
            nome={item.nome}
            onPress={()=> handleOpenSheet(item.id)}
            tarefas={tarefasConcluidas}
            setTarefas={setTarefasConcluidas}
            prioridade={item.prioridade}
            id={item.id}
            status={item.status}
            data={dataEntrega}
        />
      };    
  const renderizarPendentes = ({ item }) => {
    // Converte a data da string para o objeto Date
    const dataEntrega = new Date(item.data_entrega).toLocaleDateString();
      return (
        <CardTarefa
            nome={item.nome}
            onPress={()=> handleOpenSheet(item.id)}
            tarefas={tarefasPendentes}
            setTarefas={setTarefasPendentes}
            prioridade={item.prioridade}
            id={item.id}
            status={item.status}
            data={dataEntrega}
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