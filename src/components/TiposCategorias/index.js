import { FlatList, StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

// Importando dados mocados para testagem
import { categories } from "../../../src/constant";

// Import dos icones
import {Academico, Pessoal, Profissional, Outros} from '../../../assets/icones/categoriaIcons';
import Seta from "../../../assets/icones/seta";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";

export function TiposCategorias() {
    const navigation = useNavigation();

    return (
        <View>
            <FlatList 
                data={categories}
                renderItem={({ item }) => (
                    <Pressable
                    onPress={()=> navigation.navigate('CategoryDetails', { item: item})}
                    style={styles.card}>
                        <View style={styles.chart}>
                            {item.category === 'Pessoal' ? <Pessoal />: 
                            item.category === 'Acadêmico' ? <Academico />: 
                            item.category === 'Profissional' ? <Profissional />: 
                            <Outros />}
                        </View>

                        <View style={styles.textContent}>
                            <Text style={styles.text}>{item.category}</Text>
                            <Seta />
                        </View>
                    </Pressable>
                )}
                numColumns={2}
                columnWrapperStyle={{
                    justifyContent: 'space-between'
                }}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}
