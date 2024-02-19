import { FlatList, StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

// Importando dados mocados para testagem
import { categories } from "../../src/constant";

// Import dos icones
import {Academico, Pessoal, Profissional, Outros} from '../../assets/icones/categoriaIcons'
import Seta from "../../assets/icones/seta";
import { useNavigation } from "@react-navigation/native";


export default function TypeCategories() {
    const navigation = useNavigation();

    return (
        <View>
            <FlatList 
                data={categories}
                renderItem={({ item }) => (
                    <Pressable
                    onPress={()=> navigation.navigate('categoryDetails')}
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

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#D1DFFE',
    borderRadius: 5,
    paddingHorizontal: 16,
	paddingVertical: 10,
    marginVertical: 20,
    marginHorizontal: 16,
    width: 170,
    height: 170,
    resizeMode: 'center'
  },

  chart: {
    marginVertical: 5,
    justifyContent: 'space-between',
  },

  textContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginVertical: 55,
    paddingHorizontal: 5,
  },
});



