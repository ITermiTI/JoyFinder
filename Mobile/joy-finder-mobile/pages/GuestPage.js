import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  StatusBar
} from "react-native";
import { guestPageStyle } from "../styles/GuestPageStyle";
class GuestPage extends React.Component {
  constructor(props) {
    super(props);
  }
  goToLoginPage = () => {
    this.props.navigation.navigate("Login");
  };
  goToRegisterPage = () => {
    this.props.navigation.navigate("Register");
  };
  render() {
    return (
      <View style={guestPageStyle.background}>

         <StatusBar backgroundColor={"#1F1F23"}></StatusBar>
        <ImageBackground
          source={require("../assets/landing-page-image.png")}
          style={guestPageStyle.guestImage}
        ></ImageBackground>
        <View style={guestPageStyle.greenCircle}></View>
        <View style={guestPageStyle.blueCircle}></View>
        <View style={guestPageStyle.redCircle}></View>
        <Text style={guestPageStyle.titleStyle}>Find The Joy</Text>
        <Text style={guestPageStyle.subTitleStyle}>
          Take part in events and find new friends
        </Text>
        <TouchableOpacity
          style={guestPageStyle.signInButtonPos}
          onPress={this.goToLoginPage}
        >
          <Text style={guestPageStyle.signInButtonStyle}>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity style={guestPageStyle.signUpButtonPos} 
            onPress={this.goToRegisterPage}>
          <Text style={guestPageStyle.signUpButtonStyle}>Join Now</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default GuestPage;
