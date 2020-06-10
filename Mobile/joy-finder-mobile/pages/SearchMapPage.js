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
import { Button, TextInput } from "react-native-paper";
import { Appbar } from "react-native-paper";
import { addEventStyle } from "../styles/AddEventStyle";
import SortService from "../services/SortService";
import FAIcons from "react-native-vector-icons/FontAwesome5";
import CityMap from "../components/CityMap";
import Geocoder from "react-native-geocoding";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
class SearchMapPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
      user: null,
      choice: "week",
      noEvents: false,
      city: "Wrocław",
      citySearched: "Wrocław",
      searched: false,
      coordinates: null,
    };
    this.updateState = this.updateState;

    this.search = this.search.bind(this);
  }

  componentDidMount() {
    Geocoder.init("AIzaSyDC7Yfj90DPkJOzisCKPkGGKvhEbjewenQ");
    Permissions.askAsync(Permissions.LOCATION);
    this.search();
  }

  async search() {
    let result = await Location.geocodeAsync(this.state.city);
    SortService.searchByCity(this.state.city, "ThisYear").then((res) => {
      if (res === null) {
        this.setState({
          events: [],
          noEvents: true,
          citySearched: this.state.city,
          coordinates: result,
        });
      } else {
        this.setState({
          events: res.data,
          noEvents: false,
          citySearched: this.state.city,
          coordinates: result,
        });
      }
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
          <Appbar.Content title={`Searched in: ${this.state.citySearched}`} />
        </Appbar>
        <View style={styles.searchBox}>
          <TextInput
            style={styles.searchInput}
            placeholder="City"
            onChangeText={(text) => this.setState({ city: text })}
          />
          <TouchableOpacity onPress={this.search}>
            <FAIcons name="search" color="white" size={25} />
          </TouchableOpacity>
        </View>
        {this.state.coordinates !== null && (
          <CityMap
            events={this.state.events}
            coordinates={this.state.coordinates}
            navigation={this.props.navigation}
          />
        )}
      </View>
    );
  }
}

export default SearchMapPage;

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: "center",
    flex: 1,
  },
  imageThumbnail: {
    justifyContent: "center",
    alignItems: "center",
    height: 100,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  timeButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    color: "white",
    fontSize: 22,
  },
  underline: {
    width: "100%",
    height: 2,
    backgroundColor: "yellow",
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
  searchBox: {
    justifyContent: "center",
    flexDirection: "row",
    padding: 20,
  },
  searchInput: {
    height: 32,
    width: "40%",
    fontSize: 21,
    marginRight: 10,
  },
  divider: {
    height: 2,
    width: "100%",
    backgroundColor: "white",
    margin: 5,
  },
});
