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
  AsyncStorage
} from "react-native";
import { eventDetailsStyle } from "../styles/EventDetailsStyle";

class EventDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventId: null,
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('selected-event-id').then((value) => {
      this.setState({
        eventId: value
      });
    });
  }

  render() {
    return (
      <View style={eventDetailsStyle.background}>
          <Text>{this.state.eventId}</Text>
      </View>
    );
  }
}

export default EventDetails;