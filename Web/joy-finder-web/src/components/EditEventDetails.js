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
            values: {
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
            
              

          },
          registerSuccessful: false,
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
        values: {
            ...this.state.values, [e.target.name]: e.target.value
        }
    });
}
  async edit(name, date, time, type){
    await axios.put(`${Const.API_URL}api/events/updateEvent/${this.props.id}`,{
      name: name,
      date: date,
      time: time,
      type: type,
  });
  }
  handleSubmit =  (e) => {
    e.preventDefault();
    this.edit(this.state.values.name, this.state.values.date, this.state.values.time, this.state.values.type).then((res)=>
    {
        this.setState({
            registerSuccessful: true,
        })
    })
    .catch(() => {
        this.setState({
          registerSuccessful: false,
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