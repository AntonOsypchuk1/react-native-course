import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';

const dummyNews = Array.from({length: 8}, (_, i) => ({
  id: String(i),
  title: 'Заголовок новини',
  date: 'Дата новини',
  snippet: 'Короткий текст новини',
}));

export default function HomeScreen() {
  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Image
        //         source={require('../assets/news-placeholder.png')}
        style={styles.image}
      />
      <View style={styles.text}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.date}>{item.date}</Text>
        <Text style={styles.snippet}>{item.snippet}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={dummyNews}
      keyExtractor={i => i.id}
      renderItem={renderItem}
    />
  );
}

const styles = StyleSheet.create({
  container: {padding: 10},
  item: {flexDirection: 'row', marginBottom: 15},
  image: {width: 60, height: 60, backgroundColor: '#ccc', borderRadius: 4},
  text: {flex: 1, marginLeft: 10},
  title: {fontWeight: 'bold'},
  date: {color: '#666', fontSize: 12},
  snippet: {marginTop: 4},
});
