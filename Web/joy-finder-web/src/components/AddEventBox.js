import React from 'react'
import AddEventStyle from '../styles/AddEventStyle.css'
import { MdTitle, MdToday, MdQueryBuilder, MdLocationOn, MdAccessibility } from "react-icons/md";

class AddEventBox extends React.Component{

    render(){
        return(
            <div>
                <form>
                    <input className="title-box" type="text" placeholder="Title"/>
                    <input className="date-box" type="date" placeholder="Date"/>
                    <input className="time-box" type="time" placeholder="Time"/>
                    <input className="location-box" type="text" placeholder="Location"/>
                    <input className="type-box" type="text" placeholder="Type of event"/>

                    <button className="button" type="submit">Add</button>
                </form>

                <div className='title-icon'><MdTitle size='10rems'/></div>
                <div className='date-icon'><MdToday size='10rems'/></div>
                <div className='time-icon'><MdQueryBuilder size='10rems'/></div>
                <div className='location-icon'><MdLocationOn size='10rems'/></div>
                <div className='type-icon'><MdAccessibility size='10rems'/></div>
            </div>
        )
    };

}

export default AddEventBox;