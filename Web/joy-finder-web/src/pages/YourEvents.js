import React from 'react'
import axios from 'axios'
import * as Const from '../static/const';
import EventGridList from '../components/EventGridList';
import Buttons from '../components/Buttons'

class YourEvents extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            events: []
        };
        this.updateState = this.updateState
    }

    componentDidMount() {
        axios.get(`${Const.API_URL}api/events/sorted/created/ThisWeek/${sessionStorage.loggedID}`  
            )
          .then(res => {
             const events = res.data
             console.log(res.data)
             this.setState({
               events: events
           })
         })
     }

    updateState = (name, value) => {
        this.setState({[name]: value})
    }
   
    render(){
        return (
            <div className="component-background">
                
                <div>
                        <EventGridList data={this.state}/>
                        <Buttons date={this.state} updateState={this.updateState} type="created"/>
                </div>
            </div>   
            
        );
    }
}

export default YourEvents;