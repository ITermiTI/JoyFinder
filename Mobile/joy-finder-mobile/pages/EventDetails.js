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
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { Appbar } from 'react-native-paper';

class EventDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      event: null
    };
  }

  componentDidMount() {
    // const eventt = this.props.navigation.getParam('event')
    // this.setState({event: eventt})
    // console.log(eventt.id)
  }

  render() {
    const event = this.props.navigation.getParam('event')
    return (
      <View style={eventDetailsStyle.background}>
          <Appbar style={{ backgroundColor: "#262733" }}>
          <Appbar.BackAction
            onPress={() => {
              this.props.navigation.navigate("SearchAll");
            }}
          />
          <Appbar.Content title="Event info" />
        </Appbar>
          <Text style={eventDetailsStyle.title}>{event.name}</Text>
          <MaterialIcon style={eventDetailsStyle.dateIcon} name="today" color="white" size={36} />
          <Text style={eventDetailsStyle.dateText}>{event.date}</Text>

          <MaterialIcon style={eventDetailsStyle.timeIcon} name="query-builder" color="white" size={36} />
          <Text style={eventDetailsStyle.timeText}>{event.time}</Text>

          <MaterialIcon style={eventDetailsStyle.locationIcon} name="location-on" color="white" size={36} />
          <Text style={eventDetailsStyle.locationText}>{event.city}</Text>
          <Text style={eventDetailsStyle.streetText}>{event.street+" "+event.stnumber}</Text>

          <MaterialIcon style={eventDetailsStyle.typeIcon} name="accessibility" color="white" size={36} />
          <Text style={eventDetailsStyle.typeText}>{event.type}</Text>

          <MaterialIcon style={eventDetailsStyle.creatorIcon} name="person" color="white" size={36} />
          <Text style={eventDetailsStyle.creatorText}>{event.usersByCreatorid.name}</Text>

          <TouchableOpacity style={eventDetailsStyle.takePartBtn}>

          <Text style={eventDetailsStyle.takePartText}>Take a part!</Text>
          </TouchableOpacity>

      </View>
    );
  }
}

export default EventDetails;