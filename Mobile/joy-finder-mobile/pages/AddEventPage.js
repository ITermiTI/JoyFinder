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
} from "react-native";
import { Appbar } from "react-native-paper";
import { addEventStyle } from "../styles/AddEventStyle";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import DatePicker from "react-native-datepicker";
import * as Const from "../services/Const";
import axios from "axios";
import AddEventBox from "../components/AddEventBox";

class AddEventPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  _onPressButton() {
    console.log(this.state.name);
  }

  render() {
    return (
      <View style={addEventStyle.background}>
        <StatusBar backgroundColor={"#1F1F23"}></StatusBar>
        <Appbar style={{ backgroundColor: "#262733" }}>
          <Appbar.BackAction
            onPress={() => {
              this.props.navigation.navigate("YourEvents", {
                refresh: "YourEvents",
              });
            }}
          />
          <Appbar.Content title="Create new event" />
        </Appbar>
        <AddEventBox />
      </View>
    );
  }
}

export default AddEventPage;
