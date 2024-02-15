import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { titulos } from './styles/tipografia';
import VerTarefa from './screens/verTarefa';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex:1 }}>
      <View style={styles.container}>
      <Text style={titulos.h3}>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />

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
