import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import BotaoVoltar from '../../../assets/icones/botaoVoltar';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function CategoryDetails({ navigation, route}) {

  const { item } = route.params;
  console.log(item);


  return (
    <View>
      <SafeAreaView>
        <Pressable
          onPress={() => navigation.goBack()}
        >
          <BotaoVoltar />
        </Pressable>
        <Text>CategoryDetails</Text>
      </SafeAreaView>
    </View>
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