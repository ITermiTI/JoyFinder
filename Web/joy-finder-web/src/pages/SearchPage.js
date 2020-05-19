import React from 'react'

import EventGridList from '../components/EventGridList';
import Buttons from '../components/Buttons'
import SortEventsService from '../services/SortEventsService'

class SearchPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            events: [],
            showNotFound: false
        }

    }


    componentDidMount(){
        switch(this.props.data.searchOption){
            case 'city': SortEventsService.searchByCity(this.props.data.searchString,'ThisWeek').then( (res) =>{
                if(res === null) {
                  this.setState({showNotFound: true, events: null})
                }
                else{
                  this.setState({events: res, showNotFound: false});
                }
            });break;
            case 'type': SortEventsService.searchByType(this.props.data.searchString,'ThisWeek').then( (res) =>{
                if(res === null) {
                  this.setState({showNotFound: true, events: null})
                }
                else{
                  this.setState({events: res, showNotFound: false});
                }
            });break;
        }
    }
    render(){
        return (
            <div className="component-background">
                <div className="home-page-title-text">Your Events!</div>
                <div>
                        <EventGridList data={this.state}/>
                        <Buttons date={this.state} updateState={this.updateState} type="searched"/>
                </div>
            </div>   
            
        );
    }
}

export default SearchPage;