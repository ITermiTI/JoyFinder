import React from 'react'
import HomePageStyle from '../styles/HomePageStyle.css'
import { MdSearch } from "react-icons/md";
import { MdArrowDropDown } from "react-icons/md";
import { MdPowerSettingsNew } from "react-icons/md";

class HomePageTopBar extends React.Component{
    render(){
        return (
            <div>
                <div className="home-screen-top-bar"></div>
                <button className="search-icon"><MdSearch size='10rems' /></button>
                <input className="search-input" type="search" placeholder="Search"/>
                <button className="search-method-icon"><MdArrowDropDown size='10rems'/></button>
                <button className="sign-out-icon"><MdPowerSettingsNew size='10rems'/></button>
                <button className="account-button">Stanislaw talerzyk</button>
            </div>
            
        );
    }
}

export default HomePageTopBar;