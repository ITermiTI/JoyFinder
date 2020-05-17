import React from 'react';
import AddEventStyle from '../styles/AddEventStyle.css';
import Geocode from "react-geocode";
import * as Const from '../static/const'

import { MdTitle, MdToday, MdQueryBuilder, MdLocationOn, MdAccessibility } from "react-icons/md";

class SearchLocationBox extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            st: '',
            stNum: 0,
            city: ''
        }
        Geocode.setApiKey(`${Const.API_KEY}`)
        Geocode.setRegion("pl");
        Geocode.enableDebug();
        Geocode.setLanguage("en");
        
        this.handleSearch = this.handleSearch.bind(this)
    }

    handleChange = (e) => {
        const {value, name} = e.target;
        this.props.updateState(name,value);
        this.setState({[e.target.name]: e.target.value})
      }
      handleSearch(){
        Geocode.fromAddress(`${this.state.st} ${this.state.stNum}, ${this.state.city}`).then( resp =>{
            const { lat, lng } = resp.results[0].geometry.location;          
            this.props.updateState("location",{lat,lng});
            this.props.updateState("showMap",true);
                this.props.updateState("showNotFound",false);
                this.props.updateState("update",true);
          },
            error => {
                this.props.updateState("showMap",false);
                this.props.updateState("showNotFound",true);
            }
          );   
      }

    render(){
        return(
            <div>
                <input className="location-box" name="city" type="text" placeholder="City" value={this.props.data.city} onChange={this.handleChange}/>
                <input className="st-box" name="st" type="text" placeholder="Street" value={this.props.data.st} onChange={this.handleChange}/>
                <input className="stnum-box" name="stNum" type="number" placeholder="St number" value={this.props.data.stNum} onChange={this.handleChange}/>
                <input className="longtitude-box" value={this.props.data.location.lat} placeholder="X" disabled/>
                <input className="lengthitude-box" value={this.props.data.location.lng} placeholder="Y" disabled/>
                <div className='location-icon'><MdLocationOn size='10rems'/></div>
                <button className="search-button" onClick={this.handleSearch}>Search</button>
            </div>
            
        )
    }
}

export default SearchLocationBox;