import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Icon,
  Button,
  TouchableOpacity,
  StatusBar,
  AsyncStorage,
} from "react-native";
import { homePageStyle } from "../styles/HomePageStyle";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { Appbar } from "react-native-paper";
import ListGrid from "../components/List";
import axios from "axios";
import * as Const from "../services/Const";
class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
      user: null,
      choice: "week",
      noEvents: false,
    };
    this.updateState = this.updateState;
    this.pastPressed = this.pastPressed.bind(this);
    this.weekPressed = this.weekPressed.bind(this);
    this.futurePressed = this.futurePressed.bind(this);
  }
  componentDidMount() {
    this.weekPressed();
  }

  componentDidUpdate() {
    if (
      this.props.navigation.getParam("refresh") !== null &&
      this.props.navigation.getParam("refresh") === "YourEvents"
    ) {
      this.props.navigation.setParams({ refresh: null });
      this.weekPressed();
    }
  }
  async pastPressed() {
    var id = await AsyncStorage.getItem("logged_userid");
    axios
      .get(`${Const.API_URL}api/events/sorted/created/Past/${id}`)
      .then((res) => {
        this.setState({
          events: res.data,
          choice: "past",
          noEvents: false,
        });
      })
      .catch((error) => {
        this.setState({
          events: [],
          choice: "past",
          noEvents: true,
        });
      });
  }

  async weekPressed() {
    var id = await AsyncStorage.getItem("logged_userid");
    axios
      .get(`${Const.API_URL}api/events/sorted/created/ThisWeek/${id}`)
      .then((res) => {
        this.setState({
          events: res.data,
          choice: "week",
          noEvents: false,
        });
      })
      .catch((error) => {
        this.setState({
          events: [],
          choice: "week",
          noEvents: true,
        });
      });
  }
  async futurePressed() {
    var id = await AsyncStorage.getItem("logged_userid");
    axios
      .get(`${Const.API_URL}api/events/sorted/created/ThisYear/${id}`)
      .then((res) => {
        this.setState({
          events: res.data,
          choice: "future",
          noEvents: false,
        });
      })
      .catch((error) => {
        this.setState({
          events: [],
          choice: "future",
          noEvents: true,
        });
      });
  }
  updateState = (name, value) => {
    this.setState({ [name]: value });
  };
  render() {
    console.log(this.state.noEvents);
    return (
      <View style={homePageStyle.background}>
        <StatusBar backgroundColor={"#1F1F23"}></StatusBar>
        <Appbar style={{ backgroundColor: "#262733" }}>
          <Appbar.Action
            icon="menu"
            onPress={() => {
              this.props.navigation.openDrawer();
            }}
          />
          <Appbar.Content title="Your events" />
        </Appbar>
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
        <TouchableOpacity
          style={homePageStyle.floatingButton}
          onPress={() => {
            this.props.navigation.navigate("AddEvent");
          }}
        >
          <MaterialIcon name="add" color="#2F303A" size={30}></MaterialIcon>
        </TouchableOpacity>
      </View>
    );
  }
}

export default HomePage;

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
});
