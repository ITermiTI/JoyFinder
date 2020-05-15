import React from 'react'
import HomePageStyle from '../styles/HomePageStyle.css'
import HomePageBackground from '../components/HomePageBackground'
import Navigation from '../components/Navigation'

class HomePage extends React.Component{
    render(){
        return (
            <div>
                <HomePageBackground/>
                <Navigation/>
            </div>   
        );
    }
}

export default HomePage;