import React from 'react';
import { View, FlatList, Dimensions, StyleSheet } from 'react-native';

const numCols = 2;
const BOX_SIZE = (Dimensions.get('window').width - 40) / numCols;

export default function GalleryScreen() {
  const data = Array.from({ length: 10 }, (_, i) => ({ id: String(i) }));

  const renderItem = () => (
    <View style={styles.box}></View>
  );

  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={data}
      keyExtractor={item => item.id}
      numColumns={numCols}
      renderItem={renderItem}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  box: {
    width: BOX_SIZE,
    height: BOX_SIZE,
    backgroundColor: '#eee',
    borderRadius: 8,
    margin: 5,
  },
});
