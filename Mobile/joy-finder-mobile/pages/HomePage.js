import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
} from "react-native";
import { homePageStyle } from "../styles/HomePageStyle";

class HomePage extends React.Component {
  render() {
    return (
      <View style={homePageStyle.background}>
        <Text style={homePageStyle.title}>HOMEPAGE</Text>
      </View>
    );
  }
}

export default HomePage;
