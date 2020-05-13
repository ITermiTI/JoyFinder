import React from 'react'
import HomePageStyle from '../styles/HomePageStyle.css'
import HomePageBackground from '../components/HomePageBackground'
import HomePageLeftBar from '../components/HomePageLeftBar'
import HomePageTopBar from '../components/HomePageTopBar'

class HomePage extends React.Component{
    render(){
        return (
            <div>
                <HomePageBackground/>
                <HomePageLeftBar/>
                <HomePageTopBar/>
                
            </div>   
        );
    }
}

export default HomePage;