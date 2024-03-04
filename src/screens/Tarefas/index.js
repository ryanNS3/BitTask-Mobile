import React, { useState, useEffect } from 'react';
import { Header } from '../../components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput, View, TouchableOpacity, Text, FlatList } from 'react-native';
import { openDatabase, verTodasTarefas } from '../../database';
import { styles } from './styles';

export function Tarefas() {
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

    const renderizarItem = ({ item }) => (
        <TouchableOpacity style={styles.tarefa}>
            <Text>{item.nome}</Text>
			<Text>{item.data_entrega}</Text>
        </TouchableOpacity>
    );

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