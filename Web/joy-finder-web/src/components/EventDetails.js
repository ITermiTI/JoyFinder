import React from 'react';
import { MdToday, MdQueryBuilder, MdLocationOn, MdAccessibility,  MdPerson} from "react-icons/md";
import axios from 'axios'
import * as Const from '../static/const';
import EventDetailsStyle from '../styles/EventDetailsStyle.css';

class EventDetails extends React.Component{
    constructor(){
        super();
        this.state = {
            id: '',
            name:'',
            date: '',
            time: '',
            street: '',
            stnumber: '',
            city: '',
            type: '',
            creatorid: '',
            login: '',


            

    }
}
componentDidMount() {
    axios.get(`${Const.API_URL}api/events/byId/${this.props.id}`  
        )
      .then(res => {
        let event = res.data;
        this.setState({name: event.name})
        this.setState({date: event.date})
        this.setState({time: event.time})
        this.setState({street: event.street})
        this.setState({stnumber: event.stnumber})
        this.setState({city: event.city})
        this.setState({type: event.type})
        this.setState({creatorid: event.creatorid})
        
        
      })
      
  }

  _renderSubComp(){
    axios.get(`${Const.API_URL}api/user/${this.state.creatorid}`).then(res => {
        let event = res.data;
        this.setState({login: event.login})
        console.log(event.name)
      })
}


//   componentDidMount() {
//     axios.get(`${Const.API_URL}api/user/${this.state.creatorid}`  
//         )
//       .then(res => {
//         let event = res.data;
//         this.setState({login: event.login})
//         console.log(event.name)
//       })
//   }
handleDeleteEvent(){
    axios.delete(`${Const.API_URL}api/events/delete/${this.props.id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })

  }

  render(){
    return (
        <div>
                <div className='date-icon-e'><MdToday size='10rems'/></div>
                <div className='time-icon-e'><MdQueryBuilder size='10rems'/></div>
                <div className='location-icon-e'><MdLocationOn size='10rems'/></div>
                <div className='type-icon-e'><MdAccessibility size='10rems'/></div>
                <div className='creator-icon-e'><MdPerson size='10rems'/></div>
                

                <div className='event-name-e'>{this.state.name}</div>
                <div className='event-date-e'>{this.state.date}</div>
                <div className='event-time-e'>{this.state.time}</div>
                <div className='event-location-e'>{this.state.street} {this.state.stnumber} {this.state.city}</div>
                <div className='event-type-e'>{this.state.type}</div>
                <div className='event-creator-e'>{this.state.login}</div>
                <button className='cancel-button-e' onClick={this.handleDeleteEvent.bind(this)}>Cancel</button>
        </div>

    );
  }
}

export default EventDetails;