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

class EditAccountDetailsPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      
    };
  }
  
  

  render() {
    return (
      <View style={accountStyle.background}>
        <StatusBar backgroundColor={'#1F1F23'}></StatusBar>
        <Appbar style={{backgroundColor: '#262733'}}>
            <Appbar.BackAction onPress={() => {this.props.navigation.navigate("Account");}}/>
            <Appbar.Content title="Edit details"/>
        </Appbar>
      </View>
    );
  }
}

export default EditAccountDetailsPage;