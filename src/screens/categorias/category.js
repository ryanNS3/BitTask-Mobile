import { StyleSheet, Text, View } from 'react-native';
import Header from '../../components/header';
import { SafeAreaView } from 'react-native-safe-area-context';
import TypeCategories from '../../components/typeCategories';

export default function Categorias() {

  return (
    <SafeAreaView style={styles.container}>
      {/* Adicionando o Header */}
      <Header headerText={'Categorias'} />

      {/* Adicionando as categorias */}
      <View>
        <Text style={styles.text}>Tudo</Text>
      </View>

    <TypeCategories />

    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F9FE',
  },

  text: {
    fontFamily: 'Roboto',
    fontSize: 20,
    letterSpacing: 0.2,
    lineHeight: 28,
    fontWeight: 'bold',
    left: '5%'
  }
});
