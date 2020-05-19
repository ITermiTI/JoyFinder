import React from 'react'
import axios from 'axios'
import ButtonsStyle from '../styles/ButtonsStyle.css'
import * as Const from '../static/const';

class Buttons extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            pastBG: 'transparent',
            weekBG: 'linear-gradient(180deg, rgba(140, 232, 162, 1.0) 99.99%, rgba(140, 232, 162, 1.0) 100%)',
            futureBG: 'transparent'
        };
    }

    handleButtonClick = (e) => {
        if(e.target.name == "past"){
           this.setState({
               pastBG: 'linear-gradient(180deg, rgba(140, 232, 162, 1.0) 99.99%, rgba(140, 232, 162, 1.0) 100%)',
               weekBG: 'transparent',
               futureBG: 'transparent'
           })

           if(this.props.type == "created")
           axios.get(`${Const.API_URL}api/events/sorted/created/Past/${sessionStorage.loggedID}`  
           )
         .then(res => {
             let events
            if(res.data.error == "No event found")
                events = '';
            else
                events = res.data
            this.props.updateState('events', events)
        })
            else if(this.props.type == "attended")
            axios.get(`${Const.API_URL}api/events/sorted/attended/Past/${sessionStorage.loggedID}`  
           )
         .then(res => {
            let events
            if(res.data.error == "No event found")
                events = '';
            else
                events = res.data
            this.props.updateState('events', events)
        })

        }

        if(e.target.name == "week"){
           this.setState({
               pastBG: 'transparent',
               weekBG: 'linear-gradient(180deg, rgba(140, 232, 162, 1.0) 99.99%, rgba(140, 232, 162, 1.0) 100%)',
               futureBG: 'transparent'
           })
           if(this.props.type == "created")
           axios.get(`${Const.API_URL}api/events/sorted/created/ThisWeek/${sessionStorage.loggedID}`  
           )
         .then(res => {
            let events
            if(res.data.error == "No event found")
                events = '';
            else
                events = res.data
            this.props.updateState('events', events)
        })
            else if(this.props.type == "attended")
            axios.get(`${Const.API_URL}api/events/sorted/attended/ThisWeek/${sessionStorage.loggedID}`  
           )
         .then(res => {
            let events
            if(res.data.error == "No event found")
                events = '';
            else
                events = res.data
            this.props.updateState('events', events)
        })

        }

        if(e.target.name == "future"){
           this.setState({
               pastBG: 'transparent',
               weekBG: 'transparent',
               futureBG: 'linear-gradient(180deg, rgba(140, 232, 162, 1.0) 99.99%, rgba(140, 232, 162, 1.0) 100%)'
           })

           if(this.props.type == "created")
           axios.get(`${Const.API_URL}api/events/sorted/created/ThisYear/${sessionStorage.loggedID}`  
           )
         .then(res => {
            let events
            if(res.data.error == "No event found")
                events = '';
            else
                events = res.data
            this.props.updateState('events', events)
        })
            else if(this.props.type == "attended")
            axios.get(`${Const.API_URL}api/events/sorted/attended/ThisYear/${sessionStorage.loggedID}`  
           )
         .then(res => {
            let events
            if(res.data.error == "No event found")
                events = '';
            else
                events = res.data
            this.props.updateState('events', events)
        })

        }
    }

    render(){
        return(
            <div>
            <button className="past-button" name="past" onClick={this.handleButtonClick.bind(this)} style={{background: this.state.pastBG}} >Past</button>
            <button className="week-button" name="week" onClick={this.handleButtonClick.bind(this)} style={{background: this.state.weekBG}}>Week</button>
            <button className="future-button" name="future" onClick={this.handleButtonClick.bind(this)} style={{background: this.state.futureBG}}>Future</button>
            </div>
        );
    }

}

export default Buttons