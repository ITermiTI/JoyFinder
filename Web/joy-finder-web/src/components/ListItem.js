import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import HomePageStyle from '../styles/HomePageStyle.css'



/*const useStyles = makeStyles((theme) => ({
  root-item: {
    flexGrow: 1,
    alignItems: 'centre'
  },
 
  textTitle: {
     
      color: '#8CE8A0',
      fontSize: 25
      
  },
  textDate: {
    color: '#9E9E9E',
    fontSize: 18
    
  },
  image: {
    width: 250,
    height: 150,
  },
  img: {
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function ListItem(props) {
  const classes = useStyles();

  return (
    <div className={classes.root} >
        <Grid container spacing={15}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="https://kom.krakow.pl/wp-content/uploads/2019/04/9140351-pilka-nozna-900-554.jpg" />
            </ButtonBase>
                <Typography gutterBottom variant="subtitle1" className={classes.textTitle}>
                  {props.name}
                </Typography>
                <Typography variant="body2" className={classes.textDate}>
                {props.date}                 {props.time}
                </Typography>  
          </Grid>
        </Grid>
    </div>
  );
}
*/

class ListItem extends React.Component{
  render(){
    return (
      <div style={{flexGrow: 1, alignItems: 'centre'}} >
          <Grid container spacing={15}>
            <Grid item>
              <ButtonBase style={{width: 250, height: 150}}>
                <img style={{display: 'block', maxWidth: '100%', maxHeight: '100%'}} alt="complex" src="https://kom.krakow.pl/wp-content/uploads/2019/04/9140351-pilka-nozna-900-554.jpg" />
              </ButtonBase>
                  <Typography gutterBottom variant="subtitle1" style={{color: '#8CE8A0', fontSize: 25}}>
                    {this.props.name}
                  </Typography>
                  <Typography variant="body2" style={{color: '#9E9E9E', fontSize: 18}}>
                  {this.props.date}                 {this.props.time}
                  </Typography>  
            </Grid>
          </Grid>
      </div>
    );
  }
}

export default ListItem;