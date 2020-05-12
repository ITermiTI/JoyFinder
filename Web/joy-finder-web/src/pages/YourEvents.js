import React from 'react'
import HomePageStyle from '../styles/HomePageStyle.css'
import HomePageBackground from '../components/HomePageBackground'
import HomePageLeftBar from '../components/HomePageLeftBar'
import HomePageTopBar from '../components/HomePageTopBar'

class YourEvents extends React.Component{
    render(){
        return (
            <div>
                <HomePageBackground/>
                <HomePageLeftBar/>
                <HomePageTopBar/>
                <h1 className="home-page-title-text">Your Events!</h1>
            </div>   
        );
    }
}

export default YourEvents;