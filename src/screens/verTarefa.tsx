import { Text, View, StyleSheet, ImageBackground,
ScrollView, Button} from 'react-native';
import React, { useCallback, useMemo, useRef } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import { corpoTexto, titulos} from '../../styles/tipografia'  
import TagsTarefa from '../components/tagsTarefa'
import BtnVerTarefa from '../components/botoesVerTarefa';




export default function VerTarefa(){
    // propriedade para definir o quanto da tela o bottomSheet pode tomar
    const snapPoints = useMemo(() => ['50%', '80%'], []);
    // ponto de referencia num sei pra que
    const sheetRef = useRef<BottomSheet>(null);


    return(


                <BottomSheet
                snapPoints={snapPoints}
                index={1}
                
                backgroundStyle={{backgroundColor: '#fff'}}
                handleStyle={{backgroundColor: '#D1DFFE'}}
                handleIndicatorStyle={styles.handleIndicator}
                enablePanDownToClose={true}
                
                
        >
            {/* container do bottomSheet */}
            <View>
                <ImageBackground 
                    style={{marginTop:-40}}
                    source={require('../../assets/fundo/header.svg')}
                />
                <View style={styles.header}>
                        <TagsTarefa/>
                        <Text style={[{color: '#000C36'}, titulos.h2]}>AAA</Text>
                </View>

                <View style={styles.descricaoTarefa}>
                    <Text style={[ {color: '#000C36'}, titulos.h4]}>Descrição: </Text>
                    <ScrollView 
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{marginVertical:10, paddingRight:50}}
                    >
                    <Text style={[ {color: '#666666'}, corpoTexto.c]}> 
                    No one shall be subjected to arbitrary arrest, detention or exile. Everyone is entitled in full equality to a fair and public hearing by an independent and impartial tribunal, in the determination of his rights and obligations and of any criminal charge against him. No one shall be subjected to arbitrary interference with his privacy, family, home 
                    </Text>
                    </ScrollView>
                </View>

                <BtnVerTarefa></BtnVerTarefa>
                
            </View>
        </BottomSheet>

        
    )

  
}
const styles = StyleSheet.create({
    header:{
        marginTop:50,
        marginBottom:40,
        marginHorizontal:20,
    },

    handleIndicator: {
        width:'20%',
        height:7,
        backgroundColor:'#000C36'
    },
    
    descricaoTarefa:{
        marginHorizontal:20,
        width:'90%',
        height: 270
    },

    
})


