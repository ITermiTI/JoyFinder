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

        this.updateState = this.updateState
    }


    componentDidMount(){
        switch(this.props.data.searchOption){
            case 'city': SortEventsService.searchByCity(this.props.data.searchString,'ThisWeek').then( (res) =>{
                if(res === null) {
                  this.setState({showNotFound: true, events: null})
                }
                else{
                  this.setState({events: res.data, showNotFound: false});
                }
            });break;
            case 'type': SortEventsService.searchByType(this.props.data.searchString,'ThisWeek').then( (res) =>{
                if(res === null) {
                  this.setState({showNotFound: true, events: null})
                }
                else{
                  this.setState({events: res.data, showNotFound: false});
                }
            });break;
            case 'all': SortEventsService.searchAll().then((res) => {
                if(res === null) {
                    this.setState({showNotFound: true, events: null})
                  }
                  else{
                    this.setState({events: res.data, showNotFound: false});
                  }
            })
        }
    }
    updateState = (name, value) => {
        this.setState({[name]: value})
    }
    render(){
        return (
            <div className="component-background">
                <div className="home-page-title-text">Found events!</div>
                <div>
                        <EventGridList data={this.state}/>
                        <Buttons date={this.state} updateState={this.updateState} type="searched" searchOption={this.props.data.searchOption} searchString={this.props.data.searchString}/>
                </div>
            </div>   
            
        );
    }
}

export default SearchPage;