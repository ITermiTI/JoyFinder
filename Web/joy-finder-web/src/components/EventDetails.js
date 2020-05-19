import React from 'react';
import { MdToday, MdQueryBuilder, MdLocationOn, MdAccessibility,  MdPerson} from "react-icons/md";
import axios from 'axios'
import * as Const from '../static/const';
import EventDetailsStyle from '../styles/EventDetailsStyle.css';
import InCityMap from './InCityMap'
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import SearchLocationBox from '../components/SearchLocationBox';

class EventDetailsMap extends React.Component{

  shouldComponentUpdate(nextProps,nextState){
    return false;
  }
  render(){
    console.log(this.props)
    return (
      <GoogleMap defaultZoom={this.props.zoom} center={{ lat: parseFloat(this.props.coordinates[0]), lng: parseFloat(this.props.coordinates[1])}}>
       {this.props.markers!=null && this.props.markers.map(marker => {
          return (
              <Marker
              key={marker.id}
              position={{ lat: parseFloat(marker.location.split(",")[0]),
               lng: parseFloat(marker.location.split(",")[1]) }}
            >
              {this.props.selectedMarker === marker &&
                <InfoWindow>
                  <div>
                    <h2>{marker.name}</h2>                     
                  <p><b>{marker.date} </b>          {marker.time}</p>
                  </div>
                </InfoWindow>}
              }
            </Marker>
            
          )
        })
        }
      </GoogleMap> 
    

  )
}}

const MapWrapAdd = withScriptjs(withGoogleMap(EventDetailsMap));

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
            showMap: false

    }
}
componentDidMount() {
    axios.get(`${Const.API_URL}api/events/byId/${this.props.id}`  
        )
      .then(res => {
        let event = res.data;
        this.setState({name: event.name,
        date: event.date,
        time: event.time,
        street: event.street,
        stnumber: event.stnumber,
        city: event.city,
        type: event.type,
        location: event.location,
      showMap: true})
          
      })
      
  }

  _renderSubComp(){
    axios.get(`${Const.API_URL}api/user/${this.state.creatorid}`).then(res => {
        let event = res.data;
        this.setState({login: event.login})
        console.log(event.name)
      })
}

updateState = (name, value) => {
  this.setState({[name]: value})
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
                
                <div className='event-name-e'>{this.state.name}</div>
                <div className='event-date-e'>{this.state.date}</div>
                <div className='event-time-e'>{this.state.time}</div>
                <div className='event-location-e'>{this.state.street} {this.state.stnumber} {this.state.city}</div>
                <div className='event-type-e'>{this.state.type}</div>
                <button className='cancel-button-e' onClick={this.handleDeleteEvent.bind(this)}>Cancel</button>
                <div className='map-e'>
                {
                  (this.state.showMap && this.state.location !== "0") && <MapWrapAdd
                    zoom={17}
                    markers={[{id: 999999, location: `${this.state.location}`,
                     name: this.state.name, date: this.state.date, time: this.state.time}]}
                    selectedMarker={[{id: 999999, location: `${this.state.location}`,
                    name: this.state.name, date: this.state.date, time: this.state.time}]}
                    coordinates={[this.state.location.split(",")[0], this.state.location.split(",")[1].split(" ")[1] ]}
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places
                    }`}
                    loadingElement={<div style={{ top: `0%`,left: `0%`, width: `100%`,height:`100%`  }} />}
                    containerElement={<div style={{  width: `100%`,height:`100%` }} />}
                    mapElement={<div style={{ top: `0%`,left: `0%`, width: `100%`,height:`100%`  }} />}
                    />
                }
            </div>   
                </div>

    );
  }
}

export default EventDetails;