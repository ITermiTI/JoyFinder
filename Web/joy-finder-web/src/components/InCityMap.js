import React, { useState, useEffect } from "react";
import { compose, shouldUpdate } from "recompose";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import SortEventsService from "../services/SortEventsService";
import Geocode from "react-geocode";
import * as Const from '../static/const'
import MapStyles from '../styles/MapStyles.css'

class InCityMap extends React.Component{
  
    shouldComponentUpdate(nextProps,nextState){
      if(nextProps.update === false && this.props.update === true) return true;
      if(nextProps.markerClicked === false && this.props.markerClicked === true) return true;
      else return false;
    }
    render(){
      console.log(this.props)
      return (
        <GoogleMap defaultZoom={14} center={{ lat: this.props.coordinates[0], lng: this.props.coordinates[1] }}>
         {this.props.markers!=null && this.props.markers.map(marker => {
              const onClick = this.props.onClick.bind(this, marker)
              const onInfoClose = this.props.onInfoClose.bind(this,marker)
            return (
                <Marker
                key={marker.id}
                onClick={onClick}
                position={{ lat: parseFloat(marker.location.split(",")[0]),
                 lng: parseFloat(marker.location.split(",")[1]) }}
              >
                {this.props.selectedMarker === marker &&
                  <InfoWindow
                  onCloseClick= {onInfoClose}>
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

const MapWrap = withScriptjs(withGoogleMap(InCityMap));

export default class CityMapWrap extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          events: [],
          selectedMarker: false,
          city: "Pulawy",
          cityInput: "Pulawy",
          update: false,
          showNotFound: false,
          coordinates: [51.413361,21.985881],
          markerClicked: false
        }
        Geocode.setApiKey(`${Const.API_KEY}`)
        Geocode.setRegion("pl");
        Geocode.enableDebug();
        Geocode.setLanguage("en");
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
      }
      
      async getEvents(){
        await SortEventsService.getAllEventsInCity(this.state.city).then( (res) =>{
            if(res === null) {
              this.setState({showNotFound: true, events: null})
            }
            else{
              this.setState({events: res, showNotFound: false});
            }
        }
        )
      }
      handleClick = (marker, event) => {
        this.setState({ selectedMarker: marker,markerClicked: true})
      }
      handleChange = (e) => {
        this.setState({
            cityInput: e.target.value
        });
    }
      onInfoClose = (marker, event) => {
          this.setState({selectedMarker: null})
      }
      async componentDidUpdate(prevProps,prevState){
        if(this.state.update === true && prevState.update === false){
          await this.getEvents().then(() => {
            this.setState({update: false})
          })
        }
        if(this.state.markerClicked === true && prevState.markerClicked === false){
          this.setState({markerClicked:false})
        }
      }
      async componentDidMount(){
        await this.getEvents();
        this.setState({update: true})  
      }
      handleSubmit(){
        Geocode.fromAddress(this.state.cityInput).then( resp =>{
          const { lat, lng } = resp.results[0].geometry.location;          
          this.setState({city: this.state.cityInput,
            update: true, coordinates: [lat, lng]}) 
        },
          error => {
            console.error(error);
          }
        );            
      }

      
      render(){
        return (
            <div style={{ width: "100%", height: "100%" }}>
                <div className="text-city">City: </div>
                <input className="city-input" value={this.state.cityInput} onChange={this.handleChange} required></input>
                <button className="button-submit" onClick={this.handleSubmit}>Search</button>
              <MapWrap
                selectedMarker={this.state.selectedMarker}
                markers={this.state.events}
                onClick={this.handleClick}
                city={this.state.city}
                update={this.state.update}
                coordinates={this.state.coordinates}
                onInfoClose={this.onInfoClose}
                markerClicked={this.state.markerClicked}
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places
                }`}
                loadingElement={<div style={{ top: `25.87%`,left: `11.11%`, width: `82.5%`,height:`53.52%`  }} />}
                containerElement={<div style={{  width: `100%%`,height:`100%` }} />}
                mapElement={<div style={{ top: `25.87%`,left: `11.11%`, width: `82.5%`,height:`53.52%`  }} />}
                />
                {
                  this.state.showNotFound && <div className="no-found">No events found in this city</div>
                }
            </div>
          );
      }
    
  }