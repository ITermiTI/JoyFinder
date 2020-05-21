import React from 'react'
import axios from 'axios'
import * as Const from '../static/const';
import EventGridList from '../components/EventGridList';
import Buttons from '../components/Buttons'

class OthersEvents extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            events: [],
            showButtons: true
        };
        this.updateState = this.updateState
    }

    componentDidMount() {
        axios.get(`${Const.API_URL}api/events/sorted/attended/ThisWeek/${sessionStorage.loggedID}`  
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
        if(this.state.showButtons == true)
        return (
            <div className="component-background">
                
                <div>
                        <EventGridList data={this.state} updateState={this.updateState}/>
                        <Buttons date={this.state} updateState={this.updateState} type="attended"/>
                </div>
            </div>   
            
        );
        if(this.state.showButtons == false)
        return (
            <div className="component-background">
                
                <div>
                        <EventGridList data={this.state} updateState={this.updateState}/>
                </div>
            </div>   
            
        );
    }
}

export default OthersEvents;