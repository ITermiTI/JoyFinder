import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Icon,
  Button,
  TextInput,
  TouchableOpacity,
  Modal,
  Alert,
} from "react-native";
import { Appbar } from "react-native-paper";
import { addEventStyle } from "../styles/AddEventStyle";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import DatePicker from "react-native-datepicker";
import * as Const from "../services/Const";
import AuthService from "../services/AuthService";
import axios from "axios";

import Geocoder from "react-native-geocoding";
import * as Location from "expo-location";
import CityMap from "./CityMap";
class EditEventBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.event.id,
      date: this.props.event.date,
      currentDate: "",
      time: this.props.event.time,
      name: this.props.event.name,
      type: this.props.event.type,
      city: this.props.event.city,
      street: this.props.event.street,
      stNumber: this.props.event.stNumber,
      user: null,
      latitude: this.props.event.latitude,
      longtitude: this.props.event.longtitude,
      searched: false,
      notFound: false,
    };
    this.submit = this.submit.bind(this);
    this.getUserDetails = this.getUserDetails.bind(this);
    this.search = this.search.bind(this);
  }

  async search() {
    let result = await Location.geocodeAsync(
      this.state.city + " " + this.state.street + " " + this.state.stNumber
    );
    if (result !== null)
      this.setState({
        searched: true,
        latitude: result[0].latitude,
        longtitude: result[0].longitude,
        notFound: false,
      });
    else
      this.setState({
        notFound: true,
      });
  }

  componentDidMount() {
    Geocoder.init("AIzaSyDC7Yfj90DPkJOzisCKPkGGKvhEbjewenQ");
    this.getUserDetails();
    var that = this;
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    that.setState({
      currentDate: year + "/" + month + "/" + date + " ",
    });
  }
  async getUserDetails() {
    AuthService.getUserData().then((res) => {
      this.setState({ user: res.data });
    });
  }

  submit() {
    if (this.state.name === "") {
      Alert.alert("No title", "Enter event title");
      return;
    }
    if (this.state.date === "") {
      Alert.alert("No date", "Enter event date");
      return;
    }
    if (this.state.time === "") {
      Alert.alert("No time", "Enter event time");
      return;
    }
    if (this.state.type === "") {
      Alert.alert("No type", "Enter event type");
      return;
    }
    if (this.state.city === "") {
      Alert.alert("No city", "Enter event city");
      return;
    }
    if (this.state.street === "") {
      Alert.alert("No street", "Enter event street");
      return;
    }
    if (this.state.stnumber === "") {
      Alert.alert("No street number", "Enter event street number");
      return;
    }
    axios
      .put(`${Const.API_URL}api/events/updateEvent`, {
        id: this.state.id,
        name: this.state.name,
        date: this.state.date,
        time: this.state.time,
        city: this.state.city,
        street: this.state.street,
        stnumber: parseInt(this.state.stNumber, 10),
        creatorid: this.state.user.userId,
        type: this.state.type,
        location: `${this.state.latitude}, ${this.state.longtitude}`,
      })
      .then(
        Alert.alert(
          "Good job!",
          "Your new event has been successfully modified!"
        )
      );
  }
  hideMap = () => {
    this.setState({ searched: false });
  };
  render() {
    return (
      <View style={addEventStyle.loginBox}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.searched}
        >
          <Appbar style={{ backgroundColor: "#262733" }}>
            <Appbar.Action icon="close" onPress={this.hideMap} />
            <Appbar.Content title="Click to close map" />
          </Appbar>
          <CityMap
            style={addEventStyle.maps}
            events={[
              {
                name: this.state.name,
                time: this.state.time,
                date: this.state.date,
                location: `${this.state.latitude}, ${this.state.longtitude}`,
              },
            ]}
            coordinates={[
              {
                latitude: this.state.latitude,
                longitude: this.state.longtitude,
              },
            ]}
          />
        </Modal>
        <View style={addEventStyle.inputSection}>
          <MaterialIcon name="person" color="white" size={28} />
          <TextInput
            style={addEventStyle.input}
            placeholder="Title"
            onChangeText={(text) => this.setState({ name: text })}
          />
        </View>
        <View style={addEventStyle.inputSection}>
          <MaterialIcon name="today" color="white" size={28} />
          <DatePicker
            style={{ width: 350 }}
            date={this.state.date}
            mode="date"
            placeholder="Date"
            format="YYYY-MM-DD"
            minDate={this.state.currentDate}
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            showIcon={false}
            customStyles={{
              dateInput: {
                borderLeftWidth: 0,
                borderRightWidth: 0,
                borderTopWidth: 0,
                borderBottomColor: "white",
                borderBottomWidth: 0,
              },
              dateText: {
                color: "white",
                fontSize: 18,
                marginLeft: 7,
                alignSelf: "flex-start",
              },
              placeholderText: {
                color: "white",
                fontSize: 18,
                marginLeft: 7,
                alignSelf: "flex-start",
              },
            }}
            onDateChange={(date) => {
              this.setState({ date: date });
            }}
          />
        </View>
        <View style={addEventStyle.inputSection}>
          <MaterialIcon name="today" color="white" size={26} />
          <DatePicker
            style={{ width: 350 }}
            date={this.state.time}
            mode="time"
            placeholder="Time"
            format="HH:mm"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            showIcon={false}
            customStyles={{
              dateInput: {
                borderLeftWidth: 0,
                borderRightWidth: 0,
                borderTopWidth: 0,
                borderBottomColor: "white",
                borderBottomWidth: 0,
              },
              dateText: {
                color: "white",
                fontSize: 18,
                marginLeft: 7,
                alignSelf: "flex-start",
              },
              placeholderText: {
                color: "white",
                fontSize: 18,
                marginLeft: 7,
                alignSelf: "flex-start",
              },
            }}
            onDateChange={(time) => {
              this.setState({ time: time });
            }}
          />
        </View>
        <View style={addEventStyle.inputSection}>
          <MaterialIcon name="accessibility" color="white" size={26} />
          <TextInput
            style={addEventStyle.input}
            placeholder="Type of event"
            onChangeText={(type) => this.setState({ type: type })}
          />
        </View>
        <View style={addEventStyle.inputSection}>
          <MaterialIcon name="location-city" color="white" size={28} />
          <TextInput
            style={addEventStyle.input}
            placeholder="City"
            onChangeText={(city) => this.setState({ city: city })}
          />
        </View>
        <View style={addEventStyle.inputSection}>
          <MaterialIcon name="map" color="white" size={28} />
          <TextInput
            style={addEventStyle.input}
            placeholder="Street"
            onChangeText={(street) => this.setState({ street: street })}
          />
        </View>
        <View style={addEventStyle.inputSection}>
          <MaterialIcon name="location-on" color="white" size={28} />
          <TextInput
            style={addEventStyle.input}
            placeholder="Street number"
            keyboardType="number-pad"
            onChangeText={(stNumber) => this.setState({ stNumber: stNumber })}
          />
        </View>
        <View style={addEventStyle.inputSectionCoordinates}>
          <TextInput
            style={addEventStyle.inputCoordinates}
            editable={false}
            value={this.state.latitude.toFixed(8).toString()}
          />
          <TextInput
            style={addEventStyle.inputCoordinates}
            value={this.state.longtitude.toFixed(8).toString()}
            editable={false}
          />
        </View>
        <TouchableOpacity
          onPress={this.search}
          style={addEventStyle.searchButton}
        >
          <Text style={addEventStyle.signInText}>Search</Text>
        </TouchableOpacity>

        <TouchableOpacity style={addEventStyle.addButton} onPress={this.submit}>
          <Text style={addEventStyle.signInText}>Add</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default EditEventBox;
