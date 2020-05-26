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
} from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import AuthService from "../services/AuthService";

class RegisterBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: "",
      email: "",
      firstName: "",
      lastName: "",
      phone: ""
    };
    this.submitRegister = this.submitRegister.bind(this);
  }
  submitRegister() {

  }
  render() {
    return (
      <View style={registerPageStyle.registerBox}>
        <View style={registerPageStyle.inputSection}>
          <MaterialIcon name="person" color="white" size={28} />
          <TextInput
            style={registerPageStyle.input}
            placeholder="Login"
            onChangeText={(text) => this.setState({ login: text })}
          />
        </View>
        <View style={registerPageStyle.inputSection}>
          <MaterialIcon name="mail" color="white" size={28} />
          <TextInput
            style={registerPageStyle.input}
            placeholder="E-mail"
            onChangeText={(text) => this.setState({ email: text })}
          />
        </View>
        <View style={registerPageStyle.inputSection}>
          <MaterialIcon name="lock" color="white" size={28} />
          <TextInput
            style={registerPageStyle.input}
            placeholder="Password"
            onChangeText={(text) => this.setState({ password: text })}
          />
        </View>
        <View style={registerPageStyle.inputSection}>
          <MaterialIcon name="person" color="white" size={28} />
          <TextInput
            style={registerPageStyle.input}
            placeholder="First name"
            onChangeText={(text) => this.setState({ firstName: text })}
          />
        </View>
        <View style={registerPageStyle.inputSection}>
          <MaterialIcon name="person" color="white" size={28} />
          <TextInput
            style={registerPageStyle.input}
            placeholder="Last name"
            onChangeText={(text) => this.setState({ lastName: text })}
          />
        </View>
        <View style={registerPageStyle.inputSection}>
          <MaterialIcon name="local-phone" color="white" size={28} />
          <TextInput
            style={registerPageStyle.input}
            placeholder="Phone number"
            onChangeText={(text) => this.setState({ phone: text })}
          />
        </View>
      </View>
    );
  }
}

export default RegisterBox;
