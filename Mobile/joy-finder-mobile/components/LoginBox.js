import React from "react";
import { LoginStyle } from "../styles/LoginStyle";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import AuthService from "../services/AuthService";

class LoginBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: "",
      badCredentials: false,
    };
    this.submitLogin = this.submitLogin.bind(this);
  }
  submitLogin() {
    if (this.state.login === "") {
      Alert.alert("No login", "Enter your login");
      return;
    }
    if (this.state.password === "") {
      Alert.alert("No password", "Enter your password");
      return;
    }

    AuthService.executeLogin(this.state.login, this.state.password)
      .then((res) => {
        console.log(res);
        AuthService.registerSuccessfulLogin(
          this.state.login,
          this.state.password
        ).then(this.props.navigation.navigate("HomePage"));
      })
      .catch(
        () => Alert.alert("Bad credentials", "Bad credentials"),
        this.setState({ badCredentials: true })
      );
  }
  render() {
    return (
      <View style={LoginStyle.loginBox}>
        <View style={LoginStyle.inputSection}>
          <MaterialIcon name="person" color="white" size={28} />
          <TextInput
            style={LoginStyle.input}
            placeholder="Login"
            onChangeText={(text) => this.setState({ login: text })}
          />
        </View>
        <View style={LoginStyle.inputSection}>
          <MaterialIcon name="lock-outline" color="white" size={28} />
          <TextInput
            style={LoginStyle.input}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(text) => this.setState({ password: text })}
          />
        </View>

        <TouchableOpacity
          style={LoginStyle.signInButton}
          onPress={this.submitLogin}
        >
          <Text style={LoginStyle.signInText}>Sign in</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default LoginBox;
