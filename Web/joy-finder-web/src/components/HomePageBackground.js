import React from 'react'
import HomePageStyle from '../styles/HomePageStyle.css'

class HomePageBackground extends React.Component{
    render(){
        return (
            <div>
                <div className="home-screen-background-circle-blue"></div>
                <div className="home-screen-background-circle-green"></div>
            </div>
        );
    }
}

export default HomePageBackground;