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
  Alert
} from "react-native";
import { Appbar } from 'react-native-paper';
import { addEventStyle } from "../styles/AddEventStyle";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import DatePicker from 'react-native-datepicker'
import * as Const from '../services/Const';
import AuthService from "../services/AuthService";
import axios from 'axios';

class AddEventBox extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      date:"",
      currentDate: "",
      time: '',
      name: '',
      type: '',
      city: '',
      street: '',
      stNumber: '',
      location: {lat: '', lng: ''},
      user: null
    };
    this.submit = this.submit.bind(this);
    this.getUserDetails = this.getUserDetails.bind(this);
  }
  

  componentDidMount() {
    this.getUserDetails();
    var that = this;
    var date = new Date().getDate(); 
    var month = new Date().getMonth() + 1; 
    var year = new Date().getFullYear();
    that.setState({
      currentDate:
        year + '/' + month + '/' + date + ' ',
    });
  }
  async getUserDetails() {
    AuthService.getUserData().then((res) => {
      console.log(res.data);
      this.setState({ user: res.data });
    });
  }

  submit(){
    console.log(this.state.name)
    console.log(this.state.date)
    console.log(this.state.time)
    console.log(this.state.city)
    console.log(this.state.street)
    console.log(this.state.stNumber)
    console.log(this.state.type)
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
    axios.post(`${Const.API_URL}api/events`, {
      name: this.state.name,
      date: this.state.date,
      time: this.state.time,
      city: this.state.city,
      street: this.state.street,
      stnumber: parseInt(this.state.stNumber, 10),
      creatorid: this.state.user.userId,
      type: this.state.type,
      location: `51.413212, 21.565614`


  }).then(
      res => {
          axios.post(`${Const.API_URL}api/members`, {
              userId: this.state.user.userId,
              eventId: parseInt(res.data, 10)
          }).then(Alert.alert("Good job!", "Your new event has been successfully added!"));
      })
  }
  _onPressButton(){
    console.log(this.state.name)
  }

  render() {
    return (
        <View style={addEventStyle.loginBox}>
        <View style={addEventStyle.inputSection}>
          <MaterialIcon name="person" color="white" size={28} />
          <TextInput
            style={addEventStyle.input}
            placeholder="Title"
            onChangeText={(text) => this.setState({ name: text })}
          />
        </View>
        <View style={addEventStyle.inputSection}>
        <MaterialIcon name="today" color="white" size={28}  />
        <DatePicker
        style={{width: 350}}
        date={this.state.date}
        mode="date"
        placeholder="Date"
        format="YYYY-MM-DD"
        minDate={this.state.currentDate}
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        showIcon={false}
        customStyles={{
          dateInput:{
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderTopWidth: 0,
            borderBottomColor: 'white',
            borderBottomWidth:0,
          },
          dateText: {
            color: 'white',
            fontSize: 18,
            marginLeft: 7,
            alignSelf: 'flex-start'

          },
          placeholderText: {
            color: 'white',
            fontSize: 18,
            marginLeft: 7,
            alignSelf: 'flex-start'
          },
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
      </View>
      <View style={addEventStyle.inputSection}>
        <MaterialIcon name="today" color="white" size={28}  />
        <DatePicker
        style={{width: 350}}
        date={this.state.time}
        mode="time"
        placeholder="Time"
        format="HH:mm"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        showIcon={false}
        customStyles={{
          dateInput:{
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderTopWidth: 0,
            borderBottomColor: 'white',
            borderBottomWidth:0,
          },
          dateText: {
            color: 'white',
            fontSize: 18,
            marginLeft: 7,
            alignSelf: 'flex-start'

          },
          placeholderText: {
            color: 'white',
            fontSize: 18,
            marginLeft: 7,
            alignSelf: 'flex-start'
          },
        }}
        onDateChange={(time) => {this.setState({time: time})}}
      />
      </View>
      <View style={addEventStyle.inputSection}>
          <MaterialIcon name="accessibility" color="white" size={28} />
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
            keyboardType='number-pad'
            onChangeText={(stNumber) => this.setState({ stNumber: stNumber })}
          />
        </View>
        <TouchableOpacity 
        style={addEventStyle.searchButton}

        ><Text style={addEventStyle.signInText}>Search</Text>

        </TouchableOpacity>

        <TouchableOpacity
          style={addEventStyle.addButton}
          onPress={this.submit}
        >
          <Text style={addEventStyle.signInText}>Add</Text>
        </TouchableOpacity>
      </View>
    
    );
  }
}

export default AddEventBox;