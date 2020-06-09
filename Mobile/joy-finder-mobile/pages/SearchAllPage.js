import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  StatusBar,
  TouchableOpacity,
  AsyncStorage,
} from "react-native";
import AuthService from "../services/AuthService";
import ListGrid from "../components/List";
import axios from "axios";
import * as Const from "../services/Const";
import { Button } from "react-native-paper";
import { Appbar } from "react-native-paper";
import { addEventStyle } from "../styles/AddEventStyle";
class SearchByAllPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
      user: null,
      noEvents: false,
    };
    this.updateState = this.updateState;
    this.getAll = this.getAll.bind(this);
  }

  componentDidMount() {
    this.getAll();
  }

  async getAll() {
    var id = await AsyncStorage.getItem("logged_userid");
    axios
      .get(`${Const.API_URL}api/events`)
      .then((res) => {
        console.log(res);
        this.setState({
          events: res.data,
          noEvents: false,
        });
      })
      .catch((error) => {
        this.setState({
          events: [],
          noEvents: true,
        });
      });
  }
  updateState = (name, value) => {
    this.setState({ [name]: value });
  };
  render() {
    return (
      <View style={addEventStyle.background}>
        <StatusBar backgroundColor={"#1F1F23"}></StatusBar>
        <Appbar style={{ backgroundColor: "#262733" }}>
          <Appbar.BackAction
            onPress={() => {
              this.props.navigation.navigate("YourEvents");
            }}
          />
          <Appbar.Content title="All events" />
        </Appbar>
        {!this.state.noEvents && (
          <View style={styles.MainContainer}>
            <ListGrid
              data={this.state}
              updateState={this.updateState}
              navigation={this.props.navigation}
            />
          </View>
        )}
        {this.state.noEvents && (
          <View style={styles.noEventsBox}>
            <Text style={styles.noEventsText}>No events found!</Text>
          </View>
        )}
      </View>
    );
  }
}

export default SearchByAllPage;

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: "center",
    flex: 1,
  },
  noEventsBox: {
    position: "absolute",
    alignSelf: "center",
    top: "40%",
  },
  noEventsText: {
    flex: 1,
    color: "white",
    fontSize: 30,
  },
});
