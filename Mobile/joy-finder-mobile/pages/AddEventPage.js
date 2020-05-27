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
} from "react-native";
import { Appbar } from 'react-native-paper';
import { addEventStyle } from "../styles/AddEventStyle";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import DatePicker from 'react-native-datepicker'
import * as Const from '../services/Const';
import axios from 'axios';

class AddEventPage extends React.Component {
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
    };
    //this.submitLogin = this.submitLogin.bind(this);
  }
  componentDidMount() {
    var that = this;
    var date = new Date().getDate(); 
    var month = new Date().getMonth() + 1; 
    var year = new Date().getFullYear();
    that.setState({
      currentDate:
        year + '/' + month + '/' + date + ' ',
    });
  }
  handleAddClick(){
    console.log(this.state.name)
    axios.post(`${Const.API_URL}api/events`, {
      name: this.state.name,
      date: this.state.date,
      time: this.state.time,
      city: this.state.city,
      street: this.state.street,
      stnumber: parseInt(this.state.stNumber, 10),
      creatorid: parseInt(sessionStorage.loggedID, 10),
      type: this.state.type,

  }).then(
      res => {
          axios.post(`${Const.API_URL}api/members`, {
              userId: parseInt(sessionStorage.loggedID, 10),
              eventId: parseInt(res.data, 10)
          }).then(
            this.props.navigation.navigate("YourEvents")
          )
      })
  }

  render() {
    return (
      <View style={addEventStyle.background}>
        <StatusBar backgroundColor={'#1F1F23'}></StatusBar>
        <Appbar style={{backgroundColor: '#262733'}}>
            <Appbar.BackAction onPress={() => {this.props.navigation.navigate("YourEvents");}}/>
            <Appbar.Content title="Create new event"/>
        </Appbar>
        <View style={addEventStyle.loginBox}>
        <View style={addEventStyle.inputSection}>
          <MaterialIcon name="person" color="white" size={28} />
          <TextInput
            style={addEventStyle.input}
            placeholder="Title"
            onChangeText={(name) => this.setState({ name: name })}
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
        minDate={this.state.currentDate}
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        is24Hour={true}
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
        onPress={console.log(this.state.date)}
        ><Text style={addEventStyle.signInText}>Add</Text>
        </TouchableOpacity>
      </View>

        
      </View>  
    
    );
  }
}

export default AddEventPage;