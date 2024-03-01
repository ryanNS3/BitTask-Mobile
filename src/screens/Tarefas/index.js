import { Header } from '../../components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';

export function Tarefas() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Adicionando o Header */}
      <Header headerText={'Tarefas'} />

    </SafeAreaView>
  );
}

