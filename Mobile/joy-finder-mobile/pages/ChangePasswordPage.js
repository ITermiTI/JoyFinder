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

class ChangePasswordPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        name: '',
        surname: '',
        email: '',
        phoneNumber: '',
        password: '',
        login: '',
        oldpassword: '',
    };
    this.submitChange = this.submitChange.bind(this);
    this.showDetails = this.showDetails.bind(this);
  }

 async submitChange(){
    if (this.state.oldpassword == "") {
        Alert.alert("No old password", "Enter your old password");
        return;
    }
    if (this.state.password == "") {
        Alert.alert("No new password", "Enter your new password");
        return;
    }
    var id = await AsyncStorage.getItem("logged_userid");
    var login = await AsyncStorage.getItem("logged_username");
    axios.put(`${Const.API_URL}api/user/${id}`, {
        login: login,
        phoneNumber: this.state.phoneNumber,
        name: this.state.name,
        surname: this.state.surname,
        password: this.state.password
    }).then(Alert.alert("Good job!", "You succesfully changed password!"));
  }
  componentDidMount() {
    this.showDetails();
  }
  async showDetails(){
    var id = await AsyncStorage.getItem("logged_userid");
    axios.get(`${Const.API_URL}api/user/${id}`)
      .then(res => {
        let user = res.data;
        this.setState({name: user.name})
        this.setState({surname: user.surname})
        this.setState({email: user.email})
        this.setState({phoneNumber: user.phoneNumber})
      })
  }
  

  render() {
    return (
      <View style={accountStyle.background}>
        <StatusBar backgroundColor={'#1F1F23'}></StatusBar>
        <Appbar style={{backgroundColor: '#262733'}}>
            <Appbar.BackAction onPress={() => {this.props.navigation.navigate("Account");}}/>
            <Appbar.Content title="Change password"/>
        </Appbar>
        <View style={accountStyle.loginBox}>
        <View style={accountStyle.inputSection}>
          <MaterialIcon name="lock-open" color="white" size={28} />
          <TextInput
            style={accountStyle.input}
            placeholder="Old password"
            secureTextEntry={true}
            onChangeText={(text) => this.setState({ oldpassword: text })}
          />
        </View>
        <View style={accountStyle.inputSection}>
          <MaterialIcon name="lock-outline" color="white" size={28} />
          <TextInput
            style={accountStyle.input}
            placeholder="New password"
            secureTextEntry={true}
            onChangeText={(text) => this.setState({ password: text })}
          />
        </View>
        <TouchableOpacity
          style={accountStyle.editButton}
          onPress={this.submitChange}>
          <Text style={accountStyle.buttonText}>Change password</Text>
        </TouchableOpacity>
      </View>
      </View>
    );
  }
}

export default ChangePasswordPage;