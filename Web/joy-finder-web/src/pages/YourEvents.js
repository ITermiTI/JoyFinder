import React from 'react'
import ListItem from '../components/ListItem';
import axios from 'axios'
import * as Const from '../static/const';
import Grid from '@material-ui/core/Grid';
import EventGridList from '../components/EventGridList';
class YourEvents extends React.Component{
   
    render(){
        return (
            <div className="component-background">
                <div className="home-page-title-text">Your Events!</div>
                <div>
                    
                        {/* <div >
                            <Grid container spacing={20} alignContent='center'>
                                <Grid container item xs={3} spacing={5}>
                                    <FormRow />
                                </Grid>
                                <Grid container item xs={3} spacing={5}>
                                    <FormRow />
                                </Grid>

       
                            </Grid>
                        </div> */}
                        <EventGridList/>
                      
                    {/* {this.state.events.map(event => <ListItem key={event.id} name={event.name} time={event.time} date={event.date}/>)}    */}
                    
                    
                </div>
                {/* <EventList/> */}
            </div>   
            
        );
    }
}

export default YourEvents;