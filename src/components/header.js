import { Text, StyleSheet, ImageBackground } from "react-native";
import React from "react";

export default function Header({headerText}) {
    return (
            <ImageBackground
                source={require('../../assets/fundo/header.png')}
                style={styles.image}>
        
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
        top: '20%',
        left: '5%',
    },
    image: {
        width:  '100%', 
        height: '43%',
        marginBottom: '-43%',

    }
  });