import { Text, View } from 'react-native';
import { Header } from '../../components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TiposCategorias } from '../../components/TiposCategorias';

import { styles } from './styles';

export function Categorias() {

  return (
    <SafeAreaView style={styles.container}>
      {/* Adicionando o Header */}
      <Header headerText={'Categorias'} />

      {/* Adicionando as categorias */}
      <View>
        <Text style={styles.text}>Tudo</Text>
      </View>

      <TiposCategorias />

    </SafeAreaView>
  );
}
