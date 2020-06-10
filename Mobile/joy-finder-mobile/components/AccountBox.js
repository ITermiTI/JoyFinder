import React from "react";
import { registerPageStyle } from "../styles/RegisterPageStyle";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput,
  Alert,
  AsyncStorage,
} from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import AuthService from "../services/AuthService";
import { accountStyle } from "../styles/AccountStyle";
import axios from "axios";
import * as Const from "../services/Const";

class AccountBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      email: "",
      phoneNumber: "",
      
    };
    this.showDetails = this.showDetails.bind(this);
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
     <View>
        <View style={accountStyle.textSection}>
          <MaterialIcon name="person" color="white" size={35} />
          <Text style={accountStyle.textStyle}>{this.state.name+" "+this.state.surname}</Text>
        </View>
        <View style={accountStyle.textSection}>
          <MaterialIcon name="mail" color="white" size={35} />
          <Text style={accountStyle.textStyle}>{this.state.email}</Text>
        </View>
        <View style={accountStyle.textSection}>
          <MaterialIcon name="local-phone" color="white" size={35} />
          <Text style={accountStyle.textStyle}>{this.state.phoneNumber}</Text>
        </View>
    
     </View>
    );
  }
}

export default AccountBox;
