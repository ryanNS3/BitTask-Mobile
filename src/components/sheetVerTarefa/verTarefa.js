import { Text, View, StyleSheet, ImageBackground, ScrollView} from 'react-native';
import { corpoTexto, titulos } from '../../../styles/tipografia';
import TagsTarefa from './tagsTarefa';
import BtnVerTarefa from './botoesVerTarefa';


// componente da bottomSheet de ver tarefa
export default function VerTarefa() {

  return (
    <View>
      <ImageBackground
        source={require('../../../assets/fundo/header.png')}
      />
      <View style={styles.header}>
        <TagsTarefa />
        <Text style={[{ color: '#000C36' }, titulos.h2]}>AAA</Text>
      </View>

      <View style={styles.descricaoTarefa}>
        <Text style={[{ color: '#000C36' }, titulos.h4]}>Descrição: </Text>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ marginVertical: 10, paddingRight: 50 }}
        >
          <Text style={[{ color: '#666666' }, corpoTexto.c]}>
          No one shall be subjected to arbitrary arrest, detention, or exile. Everyone is entitled
            in full equality to a fair and public hearing by an independent and impartial tribunal, in
            the determination of their rights and obligations and of any criminal charge against them.
            No one shall be subjected to arbitrary interference with their privacy, family, home.
            
          </Text>
        </ScrollView>
      </View>

      <BtnVerTarefa />
    </View>
        
        
    )

  
}
const styles = StyleSheet.create({
    header:{
        marginTop:20,
        marginHorizontal:20,
    },
 
    descricaoTarefa:{
        marginHorizontal:20,
        width:'90%',
        height: 220,
        marginVertical: 40
    },

    
})