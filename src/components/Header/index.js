import { Text, View, ImageBackground, Pressable } from "react-native";
import React from "react";
import BotaoVoltar from "../../../assets/icones/botaoVoltar";
import { useNavigation, useRoute } from '@react-navigation/native';
import { CriarTarefa } from "../CriarTarefa";

import { styles } from './styles';

export function Header({headerText}) {
    const navigation = useNavigation();

    const route = useRoute();

    const isTarefasScreen = route.name === 'TarefasStack';
    
    return (
        <ImageBackground
            source={require('../../../assets/fundo/header.png')}
            style={styles.image}>
                
            <Pressable
                onPress={() => navigation.goBack()}
                style={styles.voltar}
            >
                <BotaoVoltar />
                <Text style={styles.voltarText}>Voltar</Text>
            </Pressable>

            <View style={styles.row}>
                <Text style={styles.headerText}>
                    {headerText}
                </Text>

                {isTarefasScreen && <CriarTarefa />}
            </View>
        </ImageBackground>
    );
}