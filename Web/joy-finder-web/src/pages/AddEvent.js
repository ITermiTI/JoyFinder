import React from 'react'
import AddEventBox from '../components/AddEventBox.js'

class AddEvent extends React.Component{
    render(){
        return (
            <div className="component-background">
                <div className="home-page-title-text">Create your own event!</div>
                <AddEventBox/>
            </div>   
            
        );
    }
}

export default AddEvent;