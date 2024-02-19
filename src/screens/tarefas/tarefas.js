import { StyleSheet, Text, View } from 'react-native';
import Header from '../../components/header';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Tarefas() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Adicionando o Header */}
      <Header headerText={'Tarefas'} />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F9FE',
  },
});
