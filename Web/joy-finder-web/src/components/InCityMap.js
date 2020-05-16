import React, { useState, useEffect } from "react";
import { compose } from "recompose";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import SortEventsService from "../services/SortEventsService";
import MapStyles from '../styles/MapStyles.css'

const InCityMap = compose(withScriptjs, withGoogleMap)( props => {
    console.log(props.city)
    return (
        <GoogleMap defaultZoom={14} defaultCenter={{ lat: 51.413361, lng: 21.985881 }}>
          {props.markers!=null && props.markers.map(marker => {
              const onClick = props.onClick.bind(this, marker)
              const onInfoClose = props.onInfoClose.bind(this,marker)
            return (
                <Marker
                key={marker.id}
                onClick={onClick}
                position={{ lat: parseFloat(marker.location.split(",")[0]),
                 lng: parseFloat(marker.location.split(",")[1]) }}
              >
                {props.selectedMarker === marker &&
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
})

export default class CityMapWrap extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          events: [],
          selectedMarker: false,
          city: "Pulawy",
          cityInput: "Pulawy"
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
      }
      
      getEvents(){
        SortEventsService.getAllEventsInCity(this.state.city).then( (res) =>{
            this.setState({events: res});
        }
        ).catch(error => console.log(error))
      }
      componentDidMount(){
        this.getEvents();
      }
      handleClick = (marker, event) => {
        this.setState({ selectedMarker: marker })
      }
      handleChange = (e) => {
        this.setState({
            cityInput: e.target.value
        });
    }
      onInfoClose = (marker, event) => {
          this.setState({selectedMarker: null})
      }
      handleSubmit = (e) => {
        this.setState({city: this.state.cityInput})
        this.getEvents();
      }
      render(){
        return (
            <div style={{ width: "100%", height: "100%" }}>
                <form onSubmit={this.handleSubmit}>
                    <div className="text-city">City: </div>
                    <input className="city-input" type="cityInput" name="cityInput" id="cityInput" value={this.state.cityInput} onChange={this.handleChange} required></input>
                    <button className="button-submit" type="submit">Search</button>
                </form>
              <InCityMap
                selectedMarker={this.state.selectedMarker}
                markers={this.state.events}
                onClick={this.handleClick}
                city={this.state.city}
                onInfoClose={this.onInfoClose}
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places
                }`}
                loadingElement={<div style={{ top: `25.87%`,left: `11.11%`, width: `82.5%`,height:`53.52%`  }} />}
                containerElement={<div style={{  width: `100%%`,height:`100%` }} />}
                mapElement={<div style={{ top: `25.87%`,left: `11.11%`, width: `82.5%`,height:`53.52%`  }} />}
                />
            </div>
          );
      }
    
  }