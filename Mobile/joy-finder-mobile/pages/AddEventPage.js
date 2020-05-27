import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Icon,
  Button,
  TouchableOpacity,
} from "react-native";
import { Appbar } from 'react-native-paper';
import { addEventStyle } from "../styles/AddEventStyle";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

class AddEventPage extends React.Component {
  render() {
    return (
      <View style={addEventStyle.background}>
        <StatusBar backgroundColor={'#1F1F23'}></StatusBar>
        <Appbar style={{backgroundColor: '#262733'}}>
            <Appbar.BackAction onPress={() => {this.props.navigation.navigate("YourEvents");}}/>
            <Appbar.Content title="Create new event"/>
        </Appbar>

        
      </View>  
    
    );
  }
}

export default AddEventPage;