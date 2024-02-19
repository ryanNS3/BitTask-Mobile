import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { categories } from "../../src/constant";

export default function TypeCategories() {
    return (
        <View>
            <FlatList 
                data={categories}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <View>
                            
                        </View>

                        <Text style={styles.text}>{item.category}</Text>
                    </View>
                )}
                numColumns={2}
                columnWrapperStyle={{
                    justifyContent: 'space-between'
                }}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
  }

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#D1DFFE',
    borderRadius: 5,
    paddingHorizontal: 16,
	paddingVertical: 10,
    marginVertical: 16,
    marginHorizontal: 16,
    width: 170,
    height: 170,
    resizeMode: 'center'
  },
  text: {

  }
});



