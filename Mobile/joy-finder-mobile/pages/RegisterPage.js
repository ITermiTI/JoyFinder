import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TouchableNativeFeedback,
  Keyboard
} from "react-native";
import { registerPageStyle } from "../styles/RegisterPageStyle";
import RegisterBox from "../components/RegisterBox";

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyboardShown: false,
    };
    this._keyboardDidHide = this._keyboardDidHide.bind(this);
    this._keyboardDidShow = this._keyboardDidShow.bind(this);
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
  logIn(){
      console.log("Log in clicked")
  }

  render() {
    return (
      <View style={registerPageStyle.background}>
        <Text style={registerPageStyle.joinText}>Join the </Text>
        <Text style={registerPageStyle.funText}>fun</Text>
        <RegisterBox navigation={this.props.navigation}/>
        {!this.state.keyboardShown && (
          <View style={registerPageStyle.logInSection}>
            <Text style={registerPageStyle.haveAccountText}>
              Already have an account?{" "}
            </Text>
            <TouchableNativeFeedback onPress={this.logIn}>
              <Text style={registerPageStyle.logInText}>
                Log in!
              </Text>
            </TouchableNativeFeedback>
          </View>
        )}
      </View>
    );
  }
}

export default RegisterPage;