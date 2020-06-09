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
} from "react-native";
import { Appbar } from 'react-native-paper';
import { accountStyle } from "../styles/AccountStyle";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import DatePicker from 'react-native-datepicker'
import * as Const from '../services/Const';
import axios from 'axios';
import AccountBox from "../components/AccountBox";
import ChangePasswordPage from "../pages/ChangePasswordPage";
import EditAccountDetailsPage from "../pages/EditAccountDetailsPage";

class AccountPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      
    };
  }
  _onPressButton(){
    console.log(this.state.name)
  }
  

  render() {
    return (
      <View style={accountStyle.background}>
        <StatusBar backgroundColor={'#1F1F23'}></StatusBar>
        <Appbar style={{backgroundColor: '#262733'}}>
            <Appbar.BackAction onPress={() => {this.props.navigation.navigate("YourEvents");}}/>
            <Appbar.Content title="Your Account"/>
        </Appbar>
        <Image
            source={require("../assets/profile.png")}
            style={{
            marginTop: 21,
            marginLeft: 130,
            marginBottom: 30,
            width: 150,
            height: 150,
            borderRadius: 75,
        }}
        />
        <AccountBox/>
        <TouchableOpacity style={accountStyle.changePas} onPress={() => {
              this.props.navigation.navigate("ChangePassword");
            }}>
            <Text style={accountStyle.buttonText}>Change password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={accountStyle.editDetails} onPress={this.submit} onPress={() => {
              this.props.navigation.navigate("EditAccountDetails");
            }}>
            <Text style={accountStyle.buttonText}>Edit details</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default AccountPage;