import React from 'react';
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
import MapWrap from '../components/InCityMap'
import SearchLocationBox from '../components/SearchLocationBox';
import { MdTitle, MdToday, MdQueryBuilder, MdLocationOn, MdAccessibility } from "react-icons/md";
import AddEventBox from './AddEventBox';

/*

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
      creatorid: parseInt(creatorid)


  });
  }
  handleSubmit =  (e) => {
    e.preventDefault();

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
          <input className="title-box" name="name" type="text" placeholder="Title" value={this.state.name} onChange={this.handleChange}/>
          <input className="date-box" name="date" type="date" placeholder="Date"  value={this.state.date} onChange={this.handleChange}/>
          <input className="time-box" name="time" type="time" placeholder="Time"  value={this.state.time} onChange={this.handleChange}/>
          <input className="type-box" name="type" type="text" placeholder="Type" value={this.state.type} onChange={this.handleChange}/>
          <input className="location-box" name="city" type="text" placeholder="City" value={this.state.city} onChange={this.handleChange}/>
          <input className="st-box" name="st" type="text" placeholder="Street" value={this.state.street} onChange={this.handleChange}/>
          <input className="stnum-box" name="stNum" type="number" placeholder="St number" value={this.state.stnumber} onChange={this.handleChange}/>
          <input className="longtitude-box" value={this.state.location.lat} placeholder="X" disabled/>
          <input className="lengthitude-box" value={this.state.location.lng} placeholder="Y" disabled/>
          <button className="button-r" type="submit">Submit</button>
      </form>
          <div className='location-icon'><MdLocationOn size='10rems'/></div>
          <div className='title-icon'><MdTitle size='10rems'/></div>
          <div className='date-icon'><MdToday size='10rems'/></div>
          <div className='time-icon'><MdQueryBuilder size='10rems'/></div>
          <div className='type-icon'><MdAccessibility size='10rems'/></div>
    </div>

    );
  }
}

export default EditEventDetails;

*/

class AddMap extends React.Component{
  
  shouldComponentUpdate(nextProps,nextState){
    if(nextProps.update === false && this.props.update === true) return true;
    else return false;
  }
  render(){
    console.log(this.props)
    return (
      <GoogleMap defaultZoom={this.props.zoom} center={{ lat: this.props.coordinates[0], lng: this.props.coordinates[1] }}>
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


const MapWrapAdd = withScriptjs(withGoogleMap(AddMap));

class EditEventDetails extends React.Component{

  
  constructor(props){
    super(props);
    this.state = {
        id: '',
        title: '',
        date: '',
        time: '',
        city: '',
        st: '',
        stNum: '',
        type: '',
        creatorid: '',
        location: {lat: '', lng: ''},
        showMap: false,
        showNotFound: false,
        update: false
    }
    this.updateState = this.updateState
}
componentDidMount() {
  axios.get(`${Const.API_URL}api/events/byId/${this.props.id}`  
      )
    .then(res => {
      let event = res.data;
      this.setState({id: event.id})
      this.setState({title: event.name})
      this.setState({date: event.date})
      this.setState({time: event.time})
      this.setState({st: event.street})
      this.setState({stNum: event.stnumber})
      this.setState({city: event.city})
      this.setState({type: event.type})
      this.setState({location: event.location})
      this.setState({creatorid: event.usersByCreatorid.id})
      console.log(event)
      
      
    })
    
    
}

componentDidUpdate(prevProps,prevState){
    if(this.state.update === true && prevState.update === false){
        this.setState({update:false})
      }
}

updateState = (name, value) => {
    this.setState({[name]: value})
}

onInfoClose = (marker, event) => {
    this.setState({selectedMarker: null})
}

handleClick(){
    axios.put(`${Const.API_URL}api/events/updateEvent`, {
        id: this.state.id,
        name: this.state.title,
        date: this.state.date,
        time: this.state.time,
        city: this.state.city,
        street: this.state.st,
        stnumber: parseInt(this.state.stNum),
        creatorid: parseInt(this.state.creatorid),
        type: this.state.type,
        location: `${this.state.location.lat}, ${this.state.location.lng}`

    })

}

render(){
    return (
        <div >
            <div className="home-page-title-text">Edit your event!</div>
            <button className="button" type="submit" onClick={this.handleClick.bind(this)}>Submit</button>
            <AddEventBox data={this.state} updateState={this.updateState}/>
            <SearchLocationBox className="map-add" data={this.state} updateState={this.updateState}/>
            <div className="map-add">
            {
                this.state.showMap && <MapWrapAdd
                zoom={17}
                markers={[{id: 999999, location: `${this.state.location.lat}, ${this.state.location.lng}`,
                 name: this.state.name, date: this.state.date, time: this.state.time}]}
                selectedMarker={[{id: 999999, location: `${this.state.location.lat}, ${this.state.location.lng}`,
                name: this.state.name, date: this.state.date, time: this.state.time}]}
                onInfoClose={this.onInfoClose}
                update={this.state.update}
                coordinates={[this.state.location.lat, this.state.location.lng]}
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places}`}
                loadingElement={<div style={{ top: `0%`,left: `0%`, width: `100%`,height:`100%`  }} />}
                containerElement={<div style={{  width: `100%`,height:`100%` }} />}
                mapElement={<div style={{ top: `0%`,left: `0%`, width: `100%`,height:`100%`  }} />}
                />
            }
            {
                this.state.showNotFound && <div className="address-not-found">Sorry! Address not found</div>
            }
            </div>
        </div>   
        
    );
}
}

export default EditEventDetails;

