import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import Constants from "expo-constants";

function Item({ title, date, time }) {
  return (
    // <TouchableOpacity onPress={nav.navigate("EventDetails")}>
    <View style={styles.item}>
      <Image
        style={styles.image}
        source={require("../assets/pilka-nozna.jpg")}
      />
      <View style={styles.titleBox}>
        <Text numberOfLines={2} style={styles.title}>
          {title}
        </Text>
      </View>
      <View style={styles.separator} />
      <View style={styles.details}>
        <Text style={styles.detailsText}>{date}</Text>
        <Text style={styles.detailsText}>{time}</Text>
      </View>
    </View>
    // </TouchableOpacity>
  );
}

class ListGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.props.data.events}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate("EventDetails", { event: item })
              }
            >
              <Item title={item.name} date={item.date} time={item.time} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
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
    marginVertical: 6,
    marginHorizontal: 12,
    backgroundColor: "transparent",
    borderColor: "#1D5E9F",
    borderWidth: 2,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    padding: 10,
    fontSize: 20,
    color: "white",
  },
  image: {
    margin: 12,
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  details: {
    position: "absolute",
    right: 10,
    padding: 2,
    flexDirection: "column",
  },
  detailsText: {
    fontSize: 13,
    color: "white",
  },
  titleBox: {
    width: "55%",
  },
  separator: {
    height: "100%",
    width: 2,
    backgroundColor: "#1D5E9F",
  },
});
