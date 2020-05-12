import React from 'react'
import HomePageStyle from '../styles/HomePageStyle.css'
import { MdLocalActivity } from "react-icons/md";
import { MdEvent } from "react-icons/md";
import { MdNoteAdd } from "react-icons/md";

class HomePageLeftBar extends React.Component{
    render(){
        return (
            <div>
                <div className="home-screen-left-bar"></div>
                <button className="your-events-icon"><MdLocalActivity size='10rems' /></button>
                <button className="others-events-icon"><MdEvent size='10rems' /></button>
                <button className="add-event-icon"><MdNoteAdd size='10rems' /></button>
                <div className="your-events-icon-marker"></div>
            </div>
            
        );
    }
}

export default HomePageLeftBar;