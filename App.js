import React, { useRef, useMemo } from 'react';
import { StatusBar, StyleSheet, Text, View, Pressable } from 'react-native';
import { titulos } from './styles/tipografia';
import VerTarefa from './src/components/sheetVerTarefa/verTarefa';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet from '@gorhom/bottom-sheet';

export default function App() {
  // array que define o quanto da tela o bottomSheet pode ocupar
  const snapPoints = useMemo(() => ['50%', '80%'], []);
  //ponto de referencia para abrir a bottomSheet quando o botão for acionado
  const sheetRef = useRef(null); 

  // função para ver detalhes da tarefa
  const funcVerTarefa = () => {
    sheetRef.current?.snapToIndex(1);
  };

  return (
    // o gestureHandler é importante pra reconhecer ações de toque 
    // e pro funcionamento de algumas bibliotecas usadas
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={titulos.h3}>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />

        {/* Botão que vai envolver uma tarefa permitindo que os detalhes da tarefa sejam visualizados */}
        <Pressable onPress= {funcVerTarefa}>
          <Text>Abrir sheet</Text>
        </Pressable>

        {/* BottomSheet que vai ser aberta */}
        <BottomSheet
          snapPoints={snapPoints}
          ref={sheetRef}
          index={1}
          backgroundStyle={{ backgroundColor: '#fff' }}
          handleStyle={{ backgroundColor: '#D1DFFE' }}
          handleIndicatorStyle={styles.handleIndicator}
          enablePanDownToClose={true}
        >
          {/* componente da bottomSheet */}
          <VerTarefa />
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  handleIndicator: {
    width: '20%',
    height: 7,
    backgroundColor: '#000C36',
  },
});
