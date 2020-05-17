import React from 'react'
import AddEventStyle from '../styles/AddEventStyle.css'
import { MdTitle, MdToday, MdQueryBuilder, MdLocationOn, MdAccessibility } from "react-icons/md";

class AddEventBox extends React.Component{

    handleChange = (e) => {
        const {value, name} = e.target;
        this.props.updateState(name,value);
      }

    render(){
        return(
            <div>
                <form>
                    <input className="title-box" name="title" type="text" placeholder="Title" value={this.props.data.title} onChange={this.handleChange}/>
                    <input className="date-box" name="date" type="date" placeholder="Date" value={this.props.data.date} onChange={this.handleChange}/>
                    <input className="time-box" name="time" type="time" placeholder="Time" value={this.props.data.time} onChange={this.handleChange}/>
                    <input className="type-box" name="type" type="text" placeholder="Type of event" value={this.props.data.type} onChange={this.handleChange}/>
                    
                </form>

                <div className='title-icon'><MdTitle size='10rems'/></div>
                <div className='date-icon'><MdToday size='10rems'/></div>
                <div className='time-icon'><MdQueryBuilder size='10rems'/></div>
                <div className='type-icon'><MdAccessibility size='10rems'/></div>
            </div>
        )
    };

}

export default AddEventBox;