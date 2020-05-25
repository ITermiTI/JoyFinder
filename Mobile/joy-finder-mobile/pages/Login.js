import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableNativeFeedback,
  Keyboard,
} from "react-native";
import { LoginStyle } from "../styles/LoginStyle";
import LoginBox from "../components/LoginBox";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyboardShown: false,
    };
    this._keyboardDidHide = this._keyboardDidHide.bind(this);
    this._keyboardDidShow = this._keyboardDidShow.bind(this);
    this.createNewAccount = this.createNewAccount.bind(this);
  }
  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      this._keyboardDidShow
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      this._keyboardDidHide
    );
  }
  _keyboardDidShow() {
    this.setState({ keyboardShown: true });
  }

  _keyboardDidHide() {
    this.setState({ keyboardShown: false });
  }
  createNewAccount() {
    this.props.navigation.navigate("GuestPage");
  }
  render() {
    return (
      <View style={LoginStyle.background}>
        <View style={LoginStyle.greenCircle} />
        <View style={LoginStyle.blueCircle} />
        <Text style={LoginStyle.waitingForText}>What are you waiting for?</Text>
        <View style={LoginStyle.getInSection}>
          <Text style={LoginStyle.getText}>
            Get
            <Text style={LoginStyle.inText}> in!</Text>
          </Text>
        </View>
        <LoginBox navigation={this.props.navigation} />
        {!this.state.keyboardShown && (
          <View style={LoginStyle.noAccountSection}>
            <Text style={LoginStyle.noAccountText}>
              Don't have an account?{" "}
            </Text>
            <TouchableNativeFeedback onPress={this.createNewAccount}>
              <Text style={LoginStyle.createAccountText}>
                Create a new one!
              </Text>
            </TouchableNativeFeedback>
          </View>
        )}
      </View>
    );
  }
}

export default Login;
