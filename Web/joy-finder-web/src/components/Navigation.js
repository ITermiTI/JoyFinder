import React from 'react'
import HomePageStyle from '../styles/HomePageStyle.css'
import { MdLocalActivity } from "react-icons/md";
import { MdEvent } from "react-icons/md";
import { MdSearch } from "react-icons/md";
import { MdArrowDropDown } from "react-icons/md";
import { MdPowerSettingsNew } from "react-icons/md";
import { MdNoteAdd } from "react-icons/md";
import YourEvents from '../pages/YourEvents';
import OthersEvents from '../pages/OthersEvents';
import AddEvent from '../pages/AddEvent';
import SearchPage from "../pages/SearchPage";
import AccountPage from '../pages/AccountPage';

class Navigation extends React.Component{
    constructor(){
        super();
        this.state = {
            render:'',
            color1: '',
            color2: '',
            color3: '',
            color4: '',
            color5: '',

    }
    }
    handleClick(compName){
        if(compName=="yourevents"){
            this.setState({render:compName, color1:"#8CE8A0", color2:"#9E9E9E", color3:"#9E9E9E", color4:"#9E9E9E", color5:"#9E9E9E"});
        }
        else if(compName=="othersevents"){
            this.setState({render:compName, color2:"#8CE8A0", color1:"#9E9E9E", color3:"#9E9E9E", color4:"#9E9E9E", color5:"#9E9E9E"});
        }
        else if(compName=="addevent"){
            this.setState({render:compName, color3:"#8CE8A0", color1:"#9E9E9E", color2:"#9E9E9E", color4:"#9E9E9E", color5:"#9E9E9E"});
        }
        else if(compName=="searchevent"){
            this.setState({render:compName, color4:"#8CE8A0", color1:"#9E9E9E", color2:"#9E9E9E", color3:"#9E9E9E", color5:"#9E9E9E"});
        }
        else if(compName=="searchby"){
            this.setState({render:compName, color5:"#8CE8A0", color1:"#9E9E9E", color2:"#9E9E9E", color3:"#9E9E9E", color4:"#9E9E9E"});
        }
        else if(compName=="account"){
            this.setState({render:compName, color5:"#9E9E9E", color1:"#9E9E9E", color2:"#9E9E9E", color3:"#9E9E9E", color4:"#9E9E9E"});
        }



    }
    _renderSubComp(){
        switch(this.state.render){
            case 'yourevents': return <YourEvents/>
            case 'othersevents' : return <OthersEvents/>
            case 'addevent': return <AddEvent/>
            case 'searchevent': return <SearchPage/>
            case 'account': return <AccountPage/>
        }
    }
    _renderMarkerComp(){
        switch(this.state.render){
            case 'yourevents': return <div className="your-events-icon-marker"></div>
            case 'othersevents' : return <div className="others-events-icon-marker"></div>
            case 'addevent': return <div className="add-event-icon-marker"></div>
        }
    }
    
    
    render(){
        return (
            <div>
                <div className="home-screen-left-bar"></div>
                <button className="your-events-icon" onClick={this.handleClick.bind(this, 'yourevents')}><MdLocalActivity size='10rems' color={this.state.color1}/></button>
                <button className="others-events-icon" onClick={this.handleClick.bind(this, 'othersevents')}><MdEvent size='10rems'color={this.state.color2}/></button>
                <button className="add-event-icon" onClick={this.handleClick.bind(this, 'addevent')}><MdNoteAdd size='10rems' color={this.state.color3}/></button>
                <div className="home-screen-top-bar"></div>
                <button className="search-icon" onClick={this.handleClick.bind(this, 'searchevent')}><MdSearch size='10rems' color={this.state.color4} /></button>
                <input className="search-input" type="search" placeholder="Search"/>
                <button className="search-method-icon" onClick={this.handleClick.bind(this, 'searchby')}><MdArrowDropDown size='10rems' color={this.state.color5}/></button>
                <button className="sign-out-icon"><MdPowerSettingsNew size='10rems'/></button>
                <button className="account-button" onClick={this.handleClick.bind(this, 'account')}>Stanislaw Talerzyk </button>
                
                {this._renderSubComp()}
                {this._renderMarkerComp()}
                
            </div>
            
        );
    }
}

export default Navigation;