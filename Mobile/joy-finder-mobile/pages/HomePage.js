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
import Appbar from "../components/Appbar";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={homePageStyle.background}>
        <Appbar title="Your events" navigation={this.props.navigation} />
        <Text style={homePageStyle.title}>HOMEPAGE</Text>
      </View>
    );
  }
}

export default HomePage;
