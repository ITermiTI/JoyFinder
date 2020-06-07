import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';

const DATA = [
  {
    id: '1',
    name: 'dupa',
  },
  {
    id: '2',
    name: 'jasio',
  },
  {
    id: '3',
    name: 'peirdzi',
  },
  {
    id: '4',
    name: 'stasiu',
  },
];

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

class ListGrid extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    };
  }
  render(){
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={this.props.data.events}
        renderItem={({ item }) => <Item title={item.name} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
  }
}
export default ListGrid;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  item: {
    backgroundColor: '#1D5E9F',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    color: 'white'
  },
});
