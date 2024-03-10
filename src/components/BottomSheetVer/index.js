import { useContext, useMemo, useRef, useState, useEffect } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import { Text, View, ImageBackground, ScrollView, Modal, Pressable, Image } from 'react-native';

import { corpoTexto } from '../../../global/tipografia';
import { BottomSheetContext } from "../../contexts/bottomSheetContext";
import { openDatabase, verTarefa } from "../../database";
import { funcionais } from '../../../global/tipografia';
import ModalOutros from "../sheetVerTarefa/modalOutros";
import { styles } from "./styles";

export function BottomSheetVer() {
    const { isBottomSheetVerOpen, setIsBottomSheetVerOpen, tarefaSelecionadaId } = useContext(BottomSheetContext);
    const bottomSheetRef = useRef(null);
    const snapPoints = useMemo(() => ["70%"], []);

    const [tarefa, setTarefa] = useState(null);

	const db = openDatabase();

    useEffect(() => {
        if (isBottomSheetVerOpen && tarefaSelecionadaId) {
            verTarefa(db, tarefaSelecionadaId, (task) => { 
                setTarefa(task);
            });
        }
    }, [isBottomSheetVerOpen, tarefaSelecionadaId]);

    const handleCloseSheet = () => {
        setIsBottomSheetVerOpen(false);
    };

    const [modalVisible, setModalVisible] = useState(false);

    const abrirOpcoes = () => {
        setModalVisible(true);
    };

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

      const getDataEntregaFormatada = (tarefa) => {
        if (tarefa && tarefa.data_entrega) {
            return new Date(tarefa.data_entrega).toLocaleDateString();
        }
    };
    
    const dataEntrega = getDataEntregaFormatada(tarefa);

    function getPrioridadeString(prioridade) {
        switch (prioridade) {
            case 1:
                return "baixa";
            case 2:
                return "média";
            case 3:
                return "alta";
        }
    }
    
    return (
        <>
            {isBottomSheetVerOpen && (
                <BottomSheet
                    snapPoints={snapPoints}
                    ref={bottomSheetRef}
                    index={0}
                    handleStyle={{ backgroundColor: '#D1DFFE' }}
                    handleIndicatorStyle={{ backgroundColor: '#000c36' }}
                    enablePanDownToClose={true}
                    onClose={handleCloseSheet}
                >
                    {tarefa && (
                        <>
                            <ImageBackground
                                source={require('../../../assets/fundo/header.png')}
                            >
                                <View style={styles.containerTags}>
                                    <View style={[styles.tagPrioridade, styles.tagGeral]}>
                                        <Text style={[funcionais.f1, styles.texto]}>Prioridade {getPrioridadeString(tarefa.prioridade)}</Text>
                                    </View>

                                    <View style={[styles.tagAzul, styles.tagGeral]}>
                                        <Text style={[funcionais.f1, styles.texto]}>{dataEntrega}</Text>
                                    </View>

                                    <View style={[styles.tagAzul, styles.tagGeral]}>
                                        <Text style={[funcionais.f1, styles.texto]}>{capitalizeFirstLetter(tarefa.categoria)}</Text>
                                    </View>
                                </View>

                                <Text style={styles.nomeTarefa}>{tarefa.nome}</Text>
                            </ImageBackground>

                            <View style={styles.container}>
                                <View style={styles.descricaoTarefa}>
                                    <Text style={styles.descricao}>Descrição: </Text>
                                    <ScrollView
                                        showsVerticalScrollIndicator={false}
                                        contentContainerStyle={{ marginVertical: 10, paddingRight: 50 }}
                                    >
                                        <Text style={[{ color: '#666666' }, corpoTexto.c]}>
                                            {tarefa.descricao}
                                        </Text>
                                    </ScrollView>
                                </View>

                                <View style={styles.btnArea}>
                                    <Pressable style={styles.btnOutros} onPress={abrirOpcoes}>
                                        <Text style={[funcionais.f3]}>Outros</Text>
                                    </Pressable>

                                    <Pressable style={styles.btnConcluir}>
                                        <Text style={[funcionais.f3, { color: '#fff' }]}>Concluir tarefa</Text>
                                    </Pressable>

                                    <Modal
                                        visible={modalVisible}
                                        animationType='fade'
                                        transparent={true}
                                        // fecha a modal se o usuario apertar o botão de voltar do dispositivo
                                        onRequestClose={() => {
                                            setModalVisible(!modalVisible);
                                        }}
                                    >
                                        <ModalOutros />
                                    </Modal>
                                </View>
                            </View>
                        </>
                    )}
                </BottomSheet>
            )}
        </>
    )
}
