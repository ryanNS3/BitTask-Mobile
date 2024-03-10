import React, { useState, useEffect, useContext } from 'react';
import { TextInput, View, TouchableOpacity, Text, FlatList } from 'react-native';

import { Header } from '../../components/Header';
import { CardTarefa } from '../../components/cardTarefa';
import { SafeAreaView } from 'react-native-safe-area-context';

import { openDatabase, verTodasTarefas } from '../../database';
import { styles } from './styles';
import { BottomSheetContext } from '../../contexts/bottomSheetContext';

export function Tarefas() {
    const { setIsBottomSheetVerOpen, setTarefaSelecionadaId } = useContext(BottomSheetContext);
    const handleOpenSheet = (taskId) => {
        setIsBottomSheetVerOpen(true);
        setTarefaSelecionadaId(taskId);
    };
    
    const [tarefas, setTarefas] = useState([]);

    useEffect(() => {
        carregarTarefas();
    }, []);

	const db = openDatabase();

    const carregarTarefas = () => {
        verTodasTarefas(db, (tarefas) => {
            setTarefas(tarefas);
        });
    };

    const renderizarItem = ({ item }) => {
        // Converte a data da string para o objeto Date
        const dataEntrega = new Date(item.data_entrega).toLocaleDateString();
    
        return (
            <CardTarefa
            nome={item.nome}
            onPress={()=> handleOpenSheet(item.id)}
            tarefas={tarefas}
            setTarefas={setTarefas}
            prioridade={item.prioridade}
            id={item.id}
            status={item.status}
            data={dataEntrega}
        />
        );
    };    

    return (
        <SafeAreaView style={styles.container}>
            <Header headerText={'Tarefas'} />

            <View
				style={styles.containerTarefas}
			>
                <TextInput
                    placeholder='Pesquisar'
					style={styles.pesquisar}
					placeholderTextColor={'#000'}
                />
                <View
					style={styles.filtroTarefas}
				>
                    <TouchableOpacity>
                        <Text>TUDO</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>PRIORIDADES</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>PARA HOJE</Text>
                    </TouchableOpacity>
                </View>
				
                <FlatList
                    data={tarefas}
                    keyExtractor={item => item.id.toString()}
                    renderItem={renderizarItem}
					style={styles.listaTarefas}
					contentContainerStyle={{ gap: 15 }}
                />
            </View>
        </SafeAreaView>
    );
}