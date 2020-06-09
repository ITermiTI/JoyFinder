import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableNativeFeedback,
  TextInput,
  Alert,
  TouchableOpacity,
} from "react-native";
import { DrawerStyle } from "../styles/DrawerStyle";
import AuthService from "../services/AuthService";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

class Drawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
    this.getUserDetails = this.getUserDetails.bind(this);
  }

  componentDidMount() {
    this.getUserDetails();
  }

  async getUserDetails() {
    AuthService.getUserData().then((res) => {
      console.log(res.data);
      this.setState({ user: res.data });
    });
  }

  render() {
    return (
      <View style={DrawerStyle.mainDrawer}>
        <View>
          <TouchableOpacity onPress={() => {
              this.props.navigation.navigate("Account");
            }}>
          <Image
            source={require("../assets/profile.png")}
            style={DrawerStyle.profileImage}
          ></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
              this.props.navigation.navigate("Account");
            }}>
          {this.state.user && (
            <Text style={DrawerStyle.credentialsText}>
              {this.state.user.name} {this.state.user.surname}
            </Text>
          )}
          </TouchableOpacity>
        </View>
        <View style={DrawerStyle.divider} />
        <View style={DrawerStyle.drawerTile}>
          <TouchableNativeFeedback
            onPress={() => {
              this.props.navigation.navigate("YourEvents");
            }}
          >
            <View style={DrawerStyle.drawerRow}>
              <MaterialIcon name="event-seat" color="white" size={30} />
              <Text style={DrawerStyle.tileText}>Your events</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
        <View style={DrawerStyle.divider} />
        <View style={DrawerStyle.drawerTile}>
          <TouchableNativeFeedback
            onPress={() => {
              this.props.navigation.navigate("Participation");
            }}
          >
            <View style={DrawerStyle.drawerRow}>
              <MaterialIcon name="event-note" color="white" size={30} />
              <Text style={DrawerStyle.tileText}>Taking part</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
        <View style={DrawerStyle.divider} />
        <View style={DrawerStyle.drawerTile}>
          <TouchableNativeFeedback
            onPress={() => {
              this.props.navigation.navigate("SearchMap");
            }}
          >
            <View style={DrawerStyle.drawerRow}>
              <FontAwesome5 name="search-location" color="white" size={30} />
              <Text style={DrawerStyle.tileText}>Find in city maps</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
        <View style={DrawerStyle.divider} />
        <View style={DrawerStyle.drawerTile}>
          <TouchableNativeFeedback
            onPress={() => {
              this.props.navigation.navigate("SearchByType");
            }}
          >
            <View style={DrawerStyle.drawerRow}>
              <FontAwesome5 name="searchengin" color="white" size={30} />
              <Text style={DrawerStyle.tileText}>Search by type</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
        <View style={DrawerStyle.divider} />
        <View style={DrawerStyle.drawerTile}>
          <TouchableNativeFeedback
            onPress={() => {
              this.props.navigation.navigate("SearchByCity");
            }}
          >
            <View style={DrawerStyle.drawerRow}>
              <MaterialIcon name="location-city" color="white" size={30} />
              <Text style={DrawerStyle.tileText}>Search by city</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
        <View style={DrawerStyle.divider} />
        <View style={DrawerStyle.drawerTile}>
          <TouchableNativeFeedback
            onPress={() => {
              this.props.navigation.navigate("SearchAll");
            }}
          >
            <View style={DrawerStyle.drawerRow}>
              <MaterialIcon name="done-all" color="white" size={30} />
              <Text style={DrawerStyle.tileText}>Find them all</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
        <View style={DrawerStyle.divider} />
      </View>
    );
  }
}

export default Drawer;
