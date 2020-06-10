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
class SearchByCityPage extends React.Component {
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
    };
    this.updateState = this.updateState;
    this.pastPressed = this.pastPressed.bind(this);
    this.weekPressed = this.weekPressed.bind(this);
    this.futurePressed = this.futurePressed.bind(this);
    this.search = this.search.bind(this);
  }
  componentDidMount() {
    this.weekPressed();
  }

  async search() {
    switch (this.state.choice) {
      case "past":
        SortService.searchByCity(this.state.city, "Past").then((res) => {
          if (res === null) {
            this.setState({
              events: [],
              noEvents: true,
              citySearched: this.state.city,
            });
          } else {
            this.setState({
              events: res.data,
              noEvents: false,
              citySearched: this.state.city,
            });
          }
        });
        break;
      case "week":
        SortService.searchByCity(this.state.city, "ThisWeek").then((res) => {
          if (res === null) {
            this.setState({
              events: [],
              noEvents: true,
              citySearched: this.state.city,
            });
          } else {
            this.setState({
              events: res.data,
              noEvents: false,
              citySearched: this.state.city,
            });
          }
        });
        break;
      case "future":
        SortService.searchByCity(this.state.city, "ThisYear").then((res) => {
          if (res === null) {
            this.setState({
              events: [],
              noEvents: true,
              citySearched: this.state.city,
            });
          } else {
            this.setState({
              events: res.data,
              noEvents: false,
              citySearched: this.state.city,
            });
          }
        });
        break;
    }
  }

  async pastPressed() {
    SortService.searchByCity(this.state.citySearched, "Past").then((res) => {
      if (res === null) {
        this.setState({
          events: [],
          choice: "past",
          noEvents: true,
        });
      } else {
        this.setState({
          events: res.data,
          choice: "past",
          noEvents: false,
        });
      }
    });
  }

  async weekPressed() {
    SortService.searchByCity(this.state.citySearched, "ThisWeek").then(
      (res) => {
        if (res === null) {
          this.setState({
            events: [],
            choice: "week",
            noEvents: true,
          });
        } else {
          this.setState({
            events: res.data,
            choice: "week",
            noEvents: false,
          });
        }
      }
    );
  }
  async futurePressed() {
    SortService.searchByCity(this.state.citySearched, "ThisYear").then(
      (res) => {
        if (res === null) {
          this.setState({
            events: [],
            choice: "future",
            noEvents: true,
          });
        } else {
          this.setState({
            events: res.data,
            choice: "future",
            noEvents: false,
          });
        }
      }
    );
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
        <View style={styles.divider} />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.pastPressed}>
            <Text style={styles.timeButton}>Past</Text>
            {this.state.choice == "past" && (
              <View style={styles.underline}></View>
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={this.weekPressed}>
            <Text style={styles.timeButton}>Week</Text>
            {this.state.choice == "week" && (
              <View style={styles.underline}></View>
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={this.futurePressed}>
            <Text style={styles.timeButton}>Future</Text>
            {this.state.choice == "future" && (
              <View style={styles.underline}></View>
            )}
          </TouchableOpacity>
        </View>
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

export default SearchByCityPage;

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
    top: "50%",
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
