import React from "react";
import { AppbarStyle } from "../styles/AppbarStyle";
import { View, Text } from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";

class Appbar extends React.Component {
  constructor(props) {
    super(props);
    this.openMenu = this.openMenu.bind(this);
  }
  openMenu() {
    this.props.navigation.openDrawer();
  }
  render() {
    return (
      <View style={AppbarStyle.appbarSize}>
        <MaterialIcon
          name="menu"
          color="white"
          size={32}
          style={AppbarStyle.menuIcon}
          onPress={this.openMenu}
        />
        <Text style={AppbarStyle.appbarText}>{this.props.title}</Text>
        <MaterialCommunityIcon
          name="dots-vertical"
          color="white"
          size={32}
          style={AppbarStyle.dotsIcon}
        />
      </View>
    );
  }
}

export default Appbar;
