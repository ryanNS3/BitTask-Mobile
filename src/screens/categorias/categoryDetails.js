import { Pressable, StyleSheet, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/header';

export default function CategoryDetails({ navigation, route}) {

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


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F9FE',
  },
});