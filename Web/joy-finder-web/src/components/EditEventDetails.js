import React from 'react';
import axios from 'axios'
import * as Const from '../static/const';
import AddMap from '../pages/AddEvent'
import EventDetailsStyle from '../styles/EventDetailsStyle.css';
import InCityMap from './InCityMap'
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import MapWrap from '../components/InCityMap'
import SearchLocationBox from '../components/SearchLocationBox';
import { MdTitle, MdToday, MdQueryBuilder, MdLocationOn, MdAccessibility } from "react-icons/md";


class EditEventDetails extends React.Component{
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
              login: '',
              location: '',
              usersByCreatorid:'',
              creatorid: '',
            
              
    }
    this.handleChange = this.handleChange.bind(this)
}
componentDidMount() {
    axios.get(`${Const.API_URL}api/events/byId/${this.props.id}`  
        )
      .then(res => {
        let event = res.data;
        this.setState({id: event.id})
        this.setState({name: event.name})
        this.setState({date: event.date})
        this.setState({time: event.time})
        this.setState({street: event.street})
        this.setState({stnumber: event.stnumber})
        this.setState({city: event.city})
        this.setState({type: event.type})
        this.setState({location: event.location})
        this.setState({creatorid: event.usersByCreatorid.id})
        this.setState({usersByCreatorid: event.usersByCreatorid})
        console.log(event)
        
        
      })
      
      
  }
  // handleChange(){
  //   axios.put(`${Const.API_URL}api/events/updateEvent/`, {
  //     name: this.state.name,
  //     date: this.state.date,
  //     time: this.state.time,
  //     street: this.state.street,
  //     stnumber: this.state.stnumber,
  //     city: this.state.city,
  //     type: this.state.type,
  //     location: this.state.street,
  // }).then(
  //     res => {
  //         console.log(res.data)
  //     })
  // }
  handleChange = (e) => {
    this.setState({
            ...this.state, [e.target.name]: e.target.value
        
    });
}
  async edit(name, date, time, type, location, city, stnumber, street, creatorid, id){
    console.log(creatorid)
    await axios.put(`${Const.API_URL}api/events/updateEvent`,{
      id: parseInt(id),
      name: name,
      date: date,
      time: time,
      type: type,
      city: city,
      street: street,
      stnumber: parseInt(stnumber),
      location: location,
      creatorId: parseInt(creatorid)


  });
  }
  handleSubmit =  (e) => {
    e.preventDefault();
    console.log(this.state.id)
    console.log(this.state.name)
    console.log(this.state.date)
    console.log(this.state.type)
    console.log(this.state.time)
    console.log(this.state.location)
    console.log(this.state.city)
    console.log(this.state.stnumber)
    console.log(this.state.street)
    console.log(this.state.usersByCreatorid.id)
    console.log(this.state.creatorid)

    this.edit(this.state.name, this.state.date, this.state.time, this.state.type, this.state.location, this.state.city, this.state.stnumber, this.state.street, this.state.usersByCreatorid.id, this.state.id).then((res)=>
    {
        this.setState({
        })
    })
    .catch(() => {
        this.setState({
        })
    });

    

}
  render(){
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
          <input className="title-box-e" name="name" type="text"  value={this.state.name} onChange={this.handleChange}/>
          <input className="date-box-e" name="date" type="date"  value={this.state.date} onChange={this.handleChange}/>
          <input className="time-box-e" name="time" type="time"  value={this.state.time} onChange={this.handleChange}/>
          <input className="type-box-e" name="type" type="text" value={this.state.type} onChange={this.handleChange}/>
          <button className="button-r" type="submit">Submit</button>
      </form>

      <div className='title-icon'><MdTitle size='10rems'/></div>
      <div className='date-icon'><MdToday size='10rems'/></div>
      <div className='time-icon'><MdQueryBuilder size='10rems'/></div>
      <div className='type-icon'><MdAccessibility size='10rems'/></div>
    </div>

    );
  }
}

export default EditEventDetails;