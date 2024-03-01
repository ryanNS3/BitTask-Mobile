import { Pressable, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../../components/Header';

import { styles } from './styles';

export function DetalhesCategorias({ navigation, route}) {

  const { item } = route.params;
  console.log(item);


  return (
    <SafeAreaView style={styles.container}>
      <Header headerText={item.category} />
      <Pressable
        onPress={() => navigation.goBack()}
      >
      </Pressable>
      <Text>CategoryDetails</Text>
    </SafeAreaView>
  );
}