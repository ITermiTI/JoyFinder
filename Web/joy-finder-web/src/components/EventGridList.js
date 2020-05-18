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

import ButtonBase from '@material-ui/core/ButtonBase';

class EventGridList extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            events: [],
            id: null,
            render: 'list',
            pastBG: 'transparent',
            weekBG: 'linear-gradient(180deg, rgba(140, 232, 162, 1.0) 99.99%, rgba(140, 232, 162, 1.0) 100%)',
            futureBG: 'transparent'
        };
    }

       componentDidMount() {
         axios.get(`${Const.API_URL}api/events/sorted/created/ThisWeek/${sessionStorage.loggedID}`  
             )
           .then(res => {
              const events = res.data
              console.log(res.data)
              this.setState({
                events: events
            })
          })
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

     handleButtonClick = (e) => {
         if(e.target.name == "past"){
            this.setState({
                pastBG: 'linear-gradient(180deg, rgba(140, 232, 162, 1.0) 99.99%, rgba(140, 232, 162, 1.0) 100%)',
                weekBG: 'transparent',
                futureBG: 'transparent'
            })

            axios.get(`${Const.API_URL}api/events/sorted/created/Past/${sessionStorage.loggedID}`  
            )
          .then(res => {
             const events = res.data
             console.log(res.data)
             this.setState({
               events: events
           })
         })
         }
         if(e.target.name == "week"){
            this.setState({
                pastBG: 'transparent',
                weekBG: 'linear-gradient(180deg, rgba(140, 232, 162, 1.0) 99.99%, rgba(140, 232, 162, 1.0) 100%)',
                futureBG: 'transparent'
            })

            axios.get(`${Const.API_URL}api/events/sorted/created/ThisWeek/${sessionStorage.loggedID}`  
            )
          .then(res => {
             const events = res.data
             console.log(res.data)
             this.setState({
               events: events
           })
         })
         }
         if(e.target.name == "future"){
            this.setState({
                pastBG: 'transparent',
                weekBG: 'transparent',
                futureBG: 'linear-gradient(180deg, rgba(140, 232, 162, 1.0) 99.99%, rgba(140, 232, 162, 1.0) 100%)'
            })

            axios.get(`${Const.API_URL}api/events/sorted/created/ThisYear/${sessionStorage.loggedID}`  
            )
          .then(res => {
             const events = res.data
             console.log(res.data)
             this.setState({
               events: events
           })
         })

         }
     }

    render(){
        if(this.state.render=='list') return (
            <div>
            <div className="home-page-title-text">Your Events!</div>
            <div className="component-background-events">
                <div className="root" style={{width: 'auto', height: 'auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', overFlow: 'hidden'}}>
                    <GridList cellHeight={200} cols={4}  style={{width: 1000, height: 450}}>
                    {this.state.events.map(tile => (
                        <GridListTile key={tile.id}>
                            <ButtonBase onClick={this.handleClick.bind(this, tile.id, 'details')}>
                                <img style={{display: 'block', maxWidth: '100%', maxHeight: '100%'}} alt="complex" src="https://kom.krakow.pl/wp-content/uploads/2019/04/9140351-pilka-nozna-900-554.jpg" />
                            </ButtonBase>
                            <GridListTileBar
                                title={tile.name}
                                subtitle={tile.date +"   "+ tile.time} 
                                titlePosition='bottom'/>
                        </GridListTile>))}
                    {/* {this.state.events.map(event => <ListItem key={event.id} cols={1} name={event.name} time={event.time} date={event.date}/>)}  */}
                    </GridList>
                    
                </div> 
            </div>  
            <button className="past-button" name="past" onClick={this.handleButtonClick.bind(this)} style={{background: this.state.pastBG}} >Past</button>
            <button className="week-button" name="week" onClick={this.handleButtonClick.bind(this)} style={{background: this.state.weekBG}}>Week</button>
            <button className="future-button" name="future" onClick={this.handleButtonClick.bind(this)} style={{background: this.state.futureBG}}>Future</button>
            </div>
        );
        if(this.state.render=='details') return(
            <div>
                <button className='back-button-e' onClick={this.handleClickBack.bind(this, 'list')}>Back</button>
                <EventDetails id={this.state.id}/>
            </div>
            
        );
    }
    
}
export default EventGridList;