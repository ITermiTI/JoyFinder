import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Icon,
  Button,
  TouchableOpacity,
} from "react-native";
import { homePageStyle } from "../styles/HomePageStyle";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { Appbar } from 'react-native-paper';
class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      
      <View style={homePageStyle.background}>
        <Appbar style={{backgroundColor: '#262733'}}>
            <Appbar.Action icon='menu' onPress={() => {this.props.navigation.openDrawer();}}/>
            <Appbar.Content title="Your events"/>
        </Appbar>
        <Text style={homePageStyle.title}>HOMEPAgGE</Text>
        <TouchableOpacity style={homePageStyle.floatingButton} onPress={() => {this.props.navigation.navigate("AddEvent");}}>
          <MaterialIcon name="add" color="#2F303A" size={30}></MaterialIcon>
        </TouchableOpacity>
      </View>
    );
  }
}

export default HomePage;
