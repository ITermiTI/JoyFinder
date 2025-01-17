import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TouchableNativeFeedback,
  Keyboard,
  AsyncStorage,
} from "react-native";
import { eventDetailsStyle } from "../styles/EventDetailsStyle";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { Appbar } from "react-native-paper";
import axios from "axios";
import * as Const from "../services/Const";

class EventDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      event: null,
      userParticipate: 0,
      check: true,
    };
    this.takeAPart = this.takeAPart.bind(this);
    this.leave = this.leave.bind(this);
    this.checkParticipation = this.checkParticipation.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  componentDidMount() {
    this.checkParticipation();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.navigation.getParam("event") !==
      this.props.navigation.getParam("event")
    ) {
      this.checkParticipation();
    }
  }

  async checkParticipation() {
    const event = this.props.navigation.getParam("event");
    console.log(event);
    var id = await AsyncStorage.getItem("logged_userid");
    if (event.usersByCreatorid.id == id) {
      this.setState({ userParticipate: 0, event: event });
    } else
      axios
        .get(
          `${Const.API_URL}api/members/checkIfUserParticipate/${id}/${event.id}`
        )
        .then((res) => {
          if (res.data)
            this.setState({
              userParticipate: 1,
              event: event,
            });
          else
            this.setState({
              userParticipate: 2,
              event: event,
            });
        })
        .catch((error) => {
          console.log(error);
        });
  }

  async cancel() {
    console.log(this.state);
    axios
      .delete(`${Const.API_URL}api/events/delete/${this.state.event.id}`)
      .then((res) => {
        this.props.navigation.navigate("YourEvents", { refresh: "YourEvents" });
      });
  }
  async takeAPart() {
    var id = await AsyncStorage.getItem("logged_userid");
    axios
      .post(`${Const.API_URL}api/members`, {
        eventId: this.state.event.id,
        userId: id,
      })
      .then((res) => {
        this.setState({ userParticipate: 1 });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async leave() {
    var id = await AsyncStorage.getItem("logged_userid");
    axios
      .delete(
        `${Const.API_URL}api/members/byParticipation/${id}/${this.state.event.id}`
      )
      .then((res) => {
        this.setState({ userParticipate: 2 });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    console.log(this.props.navigation.getParam("event"));
    const event = this.props.navigation.getParam("event");
    return (
      <View style={eventDetailsStyle.background}>
        <Appbar style={{ backgroundColor: "#262733" }}>
          <Appbar.BackAction
            onPress={() => {
              this.props.navigation.navigate("Participation", {
                refresh: "Participation",
              });
            }}
          />
          <Appbar.Content title="Event info" />
        </Appbar>
        <Text style={eventDetailsStyle.title}>{event.name}</Text>
        <MaterialIcon
          style={eventDetailsStyle.dateIcon}
          name="today"
          color="white"
          size={36}
        />
        <Text style={eventDetailsStyle.dateText}>{event.date}</Text>

        <MaterialIcon
          style={eventDetailsStyle.timeIcon}
          name="query-builder"
          color="white"
          size={36}
        />
        <Text style={eventDetailsStyle.timeText}>{event.time}</Text>

        <MaterialIcon
          style={eventDetailsStyle.locationIcon}
          name="location-on"
          color="white"
          size={36}
        />
        <Text style={eventDetailsStyle.locationText}>{event.city}</Text>
        <Text style={eventDetailsStyle.streetText}>
          {event.street + " " + event.stnumber}
        </Text>

        <MaterialIcon
          style={eventDetailsStyle.typeIcon}
          name="accessibility"
          color="white"
          size={36}
        />
        <Text style={eventDetailsStyle.typeText}>{event.type}</Text>

        <MaterialIcon
          style={eventDetailsStyle.creatorIcon}
          name="person"
          color="white"
          size={36}
        />
        <Text style={eventDetailsStyle.creatorText}>
          {event.usersByCreatorid.name}
        </Text>

        {this.state.userParticipate === 2 && (
          <TouchableOpacity
            style={eventDetailsStyle.takePartBtn}
            onPress={this.takeAPart}
          >
            <Text style={eventDetailsStyle.takePartText}>Take a part!</Text>
          </TouchableOpacity>
        )}

        {this.state.userParticipate === 1 && (
          <TouchableOpacity
            style={eventDetailsStyle.leaveBtn}
            onPress={this.leave}
          >
            <Text style={eventDetailsStyle.takePartText}>Leave event</Text>
          </TouchableOpacity>
        )}
        {this.state.userParticipate === 0 && (
          <View style={eventDetailsStyle.buttonView}>
            <TouchableOpacity
              style={eventDetailsStyle.editBtn}
              onPress={() =>
                this.props.navigation.navigate("Edit", {
                  event: this.props.navigation.getParam("event"),
                })
              }
            >
              <Text style={eventDetailsStyle.takePartText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={eventDetailsStyle.cancelBtn}
              onPress={this.cancel}
            >
              <Text style={eventDetailsStyle.takePartText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}

export default EventDetails;
