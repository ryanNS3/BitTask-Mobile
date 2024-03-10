import React, { useState, useEffect, useContext } from 'react';
import { TextInput, View, TouchableOpacity, Text, FlatList } from 'react-native';
import dayjs from "dayjs";

import { Header } from '../../components/Header';
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
        const dataEntrega = dayjs(item.data_entrega).format('DD/MM/YYYY')
    
        return (
            <TouchableOpacity
                style={styles.tarefa}
                onPress={() => handleOpenSheet(item.id)}
            >
                <Text>{item.nome}</Text>
                <Text>{dataEntrega}</Text>
            </TouchableOpacity>
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