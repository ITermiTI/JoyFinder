import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from 'react-native';

 class ListGrid extends React.Component {
  constructor() {
    super();
    this.state = {
      dataSource: {},
    };
  }
  componentDidMount() {
    console.log(this.props.data.events)
    var that = this;
    let items = Array.apply(null, Array(60)).map((v, i) => {
      return { id: i, src: 'https://kom.krakow.pl/wp-content/uploads/2019/04/9140351-pilka-nozna-900-554.jpg' };
    });
    that.setState({
      dataSource: items,
    });
  }
  render() {
    return (
      <View style={styles.MainContainer}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => (
            <View style={{ flex: 1, flexDirection: 'column', margin: 5, backgroundColor: 'black' }}>
              <Image style={styles.imageThumbnail} source={{ uri: item.src }} />
              {/* <Text style={{color: 'white'}}>dupa</Text> */}
            </View>
          )}
          numColumns={1}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}
export default ListGrid;

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
});