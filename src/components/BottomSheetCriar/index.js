import React, { useContext, useMemo, useRef, useState } from "react";
import { View, Text, ImageBackground, TextInput, Button } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import DateTimePicker from '@react-native-community/datetimepicker';

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

    const onDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(currentDate);
    };

    const showMode = () => {
        setShow(true);
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
                            />
                        </View>

                        <View style={styles.form}>
                            <Text style={styles.label}>DESCRIÇÃO:</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Descreva detalhes sobre a tarefa"
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
                                <TouchableOpacity>
                                    <Text>baixa</Text>
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <Text>média</Text>
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <Text>alta</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.form}>
                            <Text style={styles.label}>CATEGORIA:</Text>
                            <View style={styles.categoria}>
                                <TouchableOpacity style={styles.categoriaBotao}>
                                    <Text>pessoal</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.categoriaBotao}>
                                    <Text>acadêmico</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.categoriaBotao}>
                                    <Text>profissional</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.categoriaBotao}>
                                    <Text>outros</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <TouchableOpacity style={styles.criarTarefa}>
                            <Text style={styles.criarTarefaText}>CRIAR TAREFA</Text>
                        </TouchableOpacity>
                    </View>
                </BottomSheet>
            )}
        </>
    );
}
