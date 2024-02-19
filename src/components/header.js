import { Text, StyleSheet, ImageBackground, Pressable } from "react-native";
import React from "react";
import BotaoVoltar from "../../assets/icones/botaoVoltar";
import { useNavigation } from '@react-navigation/native';

export default function Header({headerText}) {
    const navigation = useNavigation();
    return (
            <ImageBackground
                source={require('../../assets/fundo/header.png')}
                style={styles.image}>
                    
                <Pressable
                    onPress={() => navigation.goBack()}
                    style={styles.voltar}
                >
                    <BotaoVoltar />
                    <Text style={styles.voltarText}>Voltar</Text>
                </Pressable>

                <Text style={styles.headerText}>
                    {headerText}
                </Text>
            </ImageBackground>
      
    );
  }


  const styles = StyleSheet.create({
    headerText: {
        fontFamily: "Roboto",
        fontSize: 30,
        lineHeight: 39,
        fontWeight: "bold",
        top: '10%',
        left: '5%',
    },
    image: {
        width:  '100%', 
        height: '43%',
        marginBottom: '-43%',

    },
    voltar: {
        display: 'flex',
        flexDirection: 'row',
        left: '5%',
        top: '5%',
    },
    voltarText: {
        fontFamily: "Roboto",
        fontSize: 15,
        letterSpacing: 0.2,
        lineHeight: 21,
        fontWeight: "bold",
        marginLeft: '3%',
        top: '1%'
    }
  });