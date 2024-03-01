import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { View, Text, ImageBackground, TextInput } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import DateTimePicker from '@react-native-community/datetimepicker';
import { openDatabase, criarTabela, criarTarefa } from "../../database";

import { styles } from "./styles";
import { BottomSheetContext } from "../../contexts/bottomSheetContext";
import { TouchableOpacity } from "react-native-gesture-handler";

export function BottomSheetCriar() {
    const { isBottomSheetOpen, setIsBottomSheetOpen } = useContext(BottomSheetContext);
    const bottomSheetRef = useRef(null);
    const snapPoints = useMemo(() => ["80%"], []);
    
    const handleCloseSheet = () => {
        setIsBottomSheetOpen(false);
    };

    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [categoria, setCategoria] = useState('');
    const [prioridade, setPrioridade] = useState('');

    const db = openDatabase();

    useEffect(() => {
        criarTabela(db);
    }, []);

    const onDateChange = (event, selectedDate) => {
        setShow(false);
        setDate(selectedDate || date);
        console.log(selectedDate || date);
    };    

    const showMode = () => {
        setShow(true);
    };

    const handleCriarTarefa = () => {
        // Verifique se todos os campos necessários estão preenchidos antes de criar a tarefa
        if (nome && categoria && prioridade && date) {
            criarTarefa(db, nome, descricao, categoria, prioridade, date);
            // Limpe os campos após a criação da tarefa
            setNome('');
            setDescricao('');
            setCategoria('');
            setPrioridade('');
            setDate(new Date());
        } else {
            alert('Por favor, preencha todos os campos obrigatórios para criar uma tarefa.');
        }
    };

    const handleSelecionarPrioridade = (prioridadeSelecionada) => {
        setPrioridade(prioridadeSelecionada);
    };    

    const handleSelecionarCategoria = (categoriaSelecionada) => {
        setCategoria(categoriaSelecionada);
    };

    return (
        <>
            {isBottomSheetOpen && (
                <BottomSheet
                    ref={bottomSheetRef}
                    index={0}
                    snapPoints={snapPoints}
                    enablePanDownToClose={true}
                    style={styles.sheet}
                    onClose={handleCloseSheet}
                    handleStyle={{backgroundColor: '#d1dffe'}}
                    handleIndicatorStyle={{backgroundColor: '#000c36'}}
                >
                    <ImageBackground
                        source={require('../../../assets/fundo/header.png')}
                        style={styles.image}
                    >
                        <Text style={styles.headerText}>Criar Tarefa</Text>
                    </ImageBackground>

                    <View style={styles.mainContainer}>
                        <View style={styles.form}>
                            <Text style={styles.label}>NOME:</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Digite o nome da tarefa"
                                value={nome}
                                onChangeText={setNome}
                            />
                        </View>

                        <View style={styles.form}>
                            <Text style={styles.label}>DESCRIÇÃO:</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Descreva detalhes sobre a tarefa"
                                value={descricao}
                                onChangeText={setDescricao}
                            />
                        </View>

                        <View style={styles.form}>
                            <Text style={styles.label}>DATA:</Text>
                            <TouchableOpacity
                                onPress={showMode}
                            >
                                <Text style={[styles.input, styles.date]}>
                                    {date.toLocaleDateString()}
                                </Text>
                            </TouchableOpacity>
                            {show && (
                                <DateTimePicker
                                    value={date}
                                    mode="date"
                                    is24Hour={true}
                                    display="default"
                                    minimumDate={new Date()}
                                    onChange={onDateChange}
                                />
                            )}
                        </View>
                    
                        <View style={styles.form}>
                            <Text style={styles.label}>PRIORIDADE:</Text>
                            <View style={styles.prioridade}>
                                <TouchableOpacity
                                    style={[styles.prioridadeBotao, 
                                    prioridade === 'baixa' ? styles.prioridadeSelecionada : null]} 
                                    onPress={() => handleSelecionarPrioridade('baixa')}
                                >
                                    <Text>baixa</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={[styles.prioridadeBotao, 
                                        prioridade === 'média' ? styles.prioridadeSelecionada : null]} 
                                        onPress={() => handleSelecionarPrioridade('média')}
                                >
                                    <Text>média</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={[styles.prioridadeBotao, 
                                        prioridade === 'alta' ? styles.prioridadeSelecionada : null]} 
                                        onPress={() => handleSelecionarPrioridade('alta')}
                                >
                                    <Text>alta</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.form}>
                            <Text style={styles.label}>CATEGORIA:</Text>
                            <View style={styles.categoria}>
                                <TouchableOpacity
                                    style={[styles.categoriaBotao, 
                                    categoria === 'pessoal' ? styles.categoriaSelecionada : null]} 
                                    onPress={() => handleSelecionarCategoria('pessoal')}
                                >
                                    <Text>pessoal</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={[styles.categoriaBotao, 
                                        categoria === 'acadêmico' ? styles.categoriaSelecionada : null]} 
                                        onPress={() => handleSelecionarCategoria('acadêmico')}
                                >
                                    <Text>acadêmico</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={[styles.categoriaBotao, 
                                        categoria === 'profissional' ? styles.categoriaSelecionada : null]} 
                                        onPress={() => handleSelecionarCategoria('profissional')}
                                >
                                    <Text>profissional</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={[styles.categoriaBotao, 
                                        categoria === 'outros' ? styles.categoriaSelecionada : null]} 
                                        onPress={() => handleSelecionarCategoria('outros')}
                                >
                                    <Text>outros</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <TouchableOpacity
                            style={styles.criarTarefa}
                            onPress={handleCriarTarefa}
                        >
                            <Text style={styles.criarTarefaText}>CRIAR TAREFA</Text>
                        </TouchableOpacity>
                    </View>
                </BottomSheet>
            )}
        </>
    );
}
