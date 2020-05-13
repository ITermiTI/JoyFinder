import React from 'react'
import HomePageStyle from '../styles/HomePageStyle.css'
import { MdSearch } from "react-icons/md";
import { MdArrowDropDown } from "react-icons/md";
import { MdPowerSettingsNew } from "react-icons/md";
import SearchPage from "../pages/SearchPage";

class HomePageTopBar extends React.Component{
    constructor(){
        super();
        this.state = {
            render:'',
            color1: '',
            color2: '',
            color3: ''

    }
    }
    handleClick(compName){
        if(compName=="searchevent"){
            this.setState({render:compName, color1:"#8CE8A0", color2:"#9E9E9E", color3:"#9E9E9E"});
        }
        else if(compName=="searchby"){
            this.setState({render:compName, color2:"#8CE8A0", color1:"#9E9E9E", color3:"#9E9E9E"});
        }


    }
    _renderSubComp(){
        switch(this.state.render){
              case 'searchevent': return <SearchPage/>
       //     case 'othersevents' : return <OthersEvents/>
       //     case 'addevent': return <AddEvent/>
        }
    }
    
    render(){
        return (
            <div>
                <div className="home-screen-top-bar"></div>
                <button className="search-icon" onClick={this.handleClick.bind(this, 'searchevent')}><MdSearch size='10rems' color={this.state.color1} /></button>
                <input className="search-input" type="search" placeholder="Search"/>
                <button className="search-method-icon" onClick={this.handleClick.bind(this, 'searchby')}><MdArrowDropDown size='10rems' color={this.state.color2}/></button>
                <button className="sign-out-icon"><MdPowerSettingsNew size='10rems'/></button>
                <button className="account-button" onClick={this.handleClick.bind(this, 'account')}>Stanislaw Talerzyk </button>
            </div>
            
        );
    }
}

export default HomePageTopBar;