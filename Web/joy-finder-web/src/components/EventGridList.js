import React from 'react';
import ListItem from './ListItem';
import axios from 'axios'
import * as Const from '../static/const';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import EventDetails from './EventDetails';
import ButtonsStyle from '../styles/ButtonsStyle.css'
import EventDetailsStyle from '../styles/EventDetailsStyle.css'
import EditEventDetails from './EditEventDetails'

import ButtonBase from '@material-ui/core/ButtonBase';

class EventGridList extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            id: null,
            render: 'list'
        };
    }

    handleClick(id, compName){
       this.setState({
           id:id,
           render:compName
    });
    console.log(this.state.id)
    console.log(this.state.render)
    }

     _renderSubComp(){
         if(this.state.id != null){
             return <EventDetails id={this.state.id}/>
         }
     }
     handleClickBack(compName){
        this.setState({render: compName});
     }
     

   
    render(){
        if(this.state.render=='list') return (
            <div className="component-background-events">
                <div className="root" style={{width: 'auto', height: 'auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', overFlow: 'hidden'}}>
                    <GridList cellHeight={200} cols={4}  style={{width: 1000, height: 450}}>
                    {this.props.data.events.map(tile => (
                        <GridListTile key={tile.id}>
                            <ButtonBase onClick={this.handleClick.bind(this, tile.id, 'details')}>
                                <img style={{display: 'block', maxWidth: '100%', maxHeight: '100%'}} alt="complex" src="https://kom.krakow.pl/wp-content/uploads/2019/04/9140351-pilka-nozna-900-554.jpg" />
                            </ButtonBase>
                            <GridListTileBar
                                title={tile.name}
                                subtitle={tile.date +"   "+ tile.time} 
                                titlePosition='bottom'/>
                        </GridListTile>))}
                    </GridList>
                    
                </div> 
            </div>  
        );
        if(this.state.render=='details') return(
            <div>
                <button className='back-button-e' onClick={this.handleClickBack.bind(this, 'list')}>Back</button>
                <button className='edit-details-button-e' onClick={this.handleClickBack.bind(this, 'editDetails')}>Edit</button>
                <EventDetails id={this.state.id}/>
            </div>
            
        );
        if(this.state.render=='editDetails') return(
            <div>
                <button className='back-button-e' onClick={this.handleClickBack.bind(this, 'details')}>Back</button>
                <EditEventDetails id={this.state.id}/>
            </div>
            
        );
    }
    
}
export default EventGridList;