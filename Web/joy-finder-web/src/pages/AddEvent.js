import React from 'react'
import AddEventBox from '../components/AddEventBox.js'
import AddEventStyle from '../styles/AddEventStyle.css'
import axios from 'axios'
import * as Const from '../static/const';
import SortEventService from '../services/SortEventsService';
import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
    Marker,
    InfoWindow
  } from "react-google-maps";
import MapWrap from '../components/InCityMap'

import SearchLocationBox from '../components/SearchLocationBox';


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

class AddEvent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            title: '',
            date: '',
            time: '',
            city: '',
            st: '',
            stNum: '',
            type: '',
            location: {lat: '', lng: ''},
            showMap: false,
            showNotFound: false,
            update: false
        }
        this.updateState = this.updateState
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
        axios.post(`${Const.API_URL}api/events`, {
            name: this.state.title,
            date: this.state.date,
            time: this.state.time,
            city: this.state.city,
            street: this.state.st,
            stnumber: parseInt(this.state.stNum, 10),
            creatorid: parseInt(sessionStorage.loggedID, 10),
            type: this.state.type,
            location: `${this.state.location.lat}, ${this.state.location.lng}`

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



export default AddEvent;