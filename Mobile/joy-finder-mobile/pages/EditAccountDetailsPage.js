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
  Image,
  AsyncStorage,
  Alert,
} from "react-native";
import { Appbar } from 'react-native-paper';
import { accountStyle } from "../styles/AccountStyle";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import DatePicker from 'react-native-datepicker'
import * as Const from '../services/Const';
import axios from 'axios';
import AccountBox from "../components/AccountBox";

class EditAccountDetailsPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        name: '',
        surname: '',
        email: '',
        phoneNumber: '',
        login: '',
    };
    this.handleEditDetails = this.handleEditDetails.bind(this);
  }
  componentDidMount() {
    this.showDetails();
  }
  async showDetails(){
    var id = await AsyncStorage.getItem("logged_userid");
    var login = await AsyncStorage.getItem("logged_username");
    this.setState({login: login})
    axios.get(`${Const.API_URL}api/user/${id}`)
      .then(res => {
        let user = res.data;
        this.setState({name: user.name})
        this.setState({surname: user.surname})
        this.setState({email: user.email})
        this.setState({phoneNumber: user.phoneNumber})
      })
  }
  
  async handleEditDetails(){
    if (this.state.name == "") {
        Alert.alert("No name", "Enter your name");
        return;
    }
    if (this.state.surname == "") {
        Alert.alert("No surname", "Enter your surname");
        return;
    }
    if (this.state.email == "") {
        Alert.alert("No email", "Enter your email");
        return;
    }
    if (this.state.phoneNumber == "") {
        Alert.alert("No phone number", "Enter your phone number");
        return;
    }
    var id = await AsyncStorage.getItem("logged_userid");
    axios.put(`${Const.API_URL}api/user/${id}`, {
        name: this.state.name,
        surname: this.state.surname,
        email: this.state.email,
        phoneNumber: this.state.phoneNumber
    }).then(Alert.alert("Good job!", "You succesfully changed account details!"));
}
  

  render() {
    return (
      <View style={accountStyle.background}>
        <StatusBar backgroundColor={'#1F1F23'}></StatusBar>
        <Appbar style={{backgroundColor: '#262733'}}>
            <Appbar.BackAction onPress={() => {this.props.navigation.navigate("Account");}}/>
            <Appbar.Content title="Edit details"/>
        </Appbar>
        <View style={accountStyle.loginBox}>
        <View style={accountStyle.inputSection}>
          <MaterialIcon name="person" color="white" size={28} />
        <Text style={accountStyle.input}>{this.state.login}</Text>
        </View>
        <View style={accountStyle.inputSection}>
          <MaterialIcon name="mail" color="white" size={28} />
          <TextInput
            style={accountStyle.input}
            placeholder="E-mail"
            value={this.state.email}
            onChangeText={(text) => this.setState({ email: text })}
          />
        </View>
        <View style={accountStyle.inputSection}>
          <MaterialIcon name="person" color="white" size={28} />
          <TextInput
            style={accountStyle.input}
            placeholder="Name"
            value={this.state.name}
            onChangeText={(text) => this.setState({ name: text })}
          />
        </View>
        <View style={accountStyle.inputSection}>
          <MaterialIcon name="person" color="white" size={28} />
          <TextInput
            style={accountStyle.input}
            placeholder="Surname"
            value={this.state.surname}
            onChangeText={(text) => this.setState({ surname: text })}
          />
        </View>
        <View style={accountStyle.inputSection}>
          <MaterialIcon name="local-phone" color="white" size={28} />
          <TextInput
            style={accountStyle.input}
            placeholder="Phone number"
            autoCompleteType='tel'
            keyboardType='number-pad'
            value={this.state.phoneNumber}
            onChangeText={(text) => this.setState({ phoneNumber: text })}
          />
        </View>
        <TouchableOpacity
          style={accountStyle.editButtonDetails}
          onPress={this.handleEditDetails}>
          <Text style={accountStyle.buttonText}>Change details</Text>
        </TouchableOpacity>
      </View>
      </View>
    );
  }
}

export default EditAccountDetailsPage;