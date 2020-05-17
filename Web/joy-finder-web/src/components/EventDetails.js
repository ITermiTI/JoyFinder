import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import HomePageStyle from '../styles/HomePageStyle.css'


class EventDetails extends React.Component{
    constructor(){
        super();
        this.state = {
            id: ''
            

    }
}
    

  render(){
    return (
        <div className="event-id">{this.props.id}</div>

    );
  }
}

export default EventDetails;