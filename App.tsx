import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable} from 'react-native';
import { titulos } from './styles/tipografia';
import VerTarefa from './src/screens/verTarefa';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet from '@gorhom/bottom-sheet';
import { useRef } from 'react';
// import { handlePress } from './src/screens/verTarefa';

export default function App() {

  // teste pra abrir a bottomSheet (não funciona ainda)
  const sheetRef = useRef<BottomSheet>(null)
  const handlePress = () => {
    sheetRef.current?.snapToIndex(2)
}


  return (
    // o gestureHandler é importante pra reconhecer ações de toque 
    // e pro funcionamento de algumas bibliotecas usadas
    <GestureHandlerRootView style={{ flex:1 }}>
      <View style={styles.container}>
      <Text style={titulos.h3}>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />

      <Pressable onPress={handlePress}>
        <Text>Abrir sheet</Text>
      </Pressable>

      <VerTarefa></VerTarefa>
      
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
});
