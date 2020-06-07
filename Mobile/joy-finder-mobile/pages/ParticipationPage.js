import React from "react";
import { View, Text, Image, StyleSheet, FlatList, StatusBar } from "react-native";
import AuthService from "../services/AuthService";
import ListGrid from "../components/List";
import axios from 'axios';
import * as Const from '../services/Const';
import { Button } from "react-native-paper";
import { Appbar } from 'react-native-paper';
import { addEventStyle } from "../styles/AddEventStyle";

class ParticipationPage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
        events: [],
        user: null,
    };
    this.updateState = this.updateState
}

// componentDidMount() {
//   AuthService.getUserData().then((res) => {
//     console.log(res.data);
//     this.setState({ user: res.data });
    
//   }).then(
    
//     axios.get(`${Const.API_URL}api/events/sorted/attended/ThisWeek/${this.state.user.userId}`  
//       )
//     .then(res => {
//        const events = res.data
//        console.log(res.data)
//        this.setState({
//          events: events
//      })
//    })
//   )
// }

componentDidMount(){
  axios.get(`${Const.API_URL}api/events`  
            )
          .then(res => {
             const events = res.data
             this.setState({
               events: events
           })
         })
}

updateState = (name, value) => {
  this.setState({[name]: value})
}
  render() {
    return (
      <View style={addEventStyle.background}>
      <StatusBar backgroundColor={'#1F1F23'}></StatusBar>
        <Appbar style={{backgroundColor: '#262733'}}>
            <Appbar.BackAction onPress={() => {this.props.navigation.navigate("YourEvents");}}/>
            <Appbar.Content title="Create new event"/>
        </Appbar>
      <View style={styles.MainContainer}>
         <ListGrid data={this.state} updateState={this.updateState}/>
      </View>
      </View>
    );
  }
}

export default ParticipationPage;

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
});
