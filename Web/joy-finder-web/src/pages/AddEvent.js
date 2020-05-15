import React from 'react'
import AddEventBox from '../components/AddEventBox.js'
import AddEventStyle from '../styles/AddEventStyle.css'
import axios from 'axios'
import * as Const from '../static/const';

class AddEvent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            title: '',
            date: '',
            time: '',
            city: '',
            type: ''
        }
        this.updateState = this.updateState
    }

    updateState = (name, value) => {
        this.setState({[name]: value})
    }

    handleClick(){
        let help;

        axios.post(`${Const.API_URL}api/events`, {
            name: this.state.title,
            date: this.state.date,
            time: this.state.time,
            city: this.state.city,
            creatorid: parseInt(sessionStorage.loggedID, 10),
            type: this.state.type,
            location: 0

        }).then(
            res => {
                axios.post(`${Const.API_URL}api/members`, {
                    userId: parseInt(sessionStorage.loggedID, 10),
                    eventId: parseInt(res.data, 10)
                }).then(
                    this.props.updateState('render', 'yourevents')
                )
            })


    }

    render(){
        return (
            <div className="component-background">
                <div className="home-page-title-text">Create your own event!</div>
                <button className="button" type="submit" onClick={this.handleClick.bind(this)}>Add</button>
                <AddEventBox data={this.state} updateState={this.updateState}/>
            </div>   
            
        );
    }
}

export default AddEvent;