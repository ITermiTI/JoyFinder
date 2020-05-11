import React from 'react';
import MainPageStyle from '../styles/MainPageStyle.css'
import { Link } from 'react-router-dom';

class MainPage extends React.Component {

    render() {
        return(
            <div className="main-background">
                <div className="main-image"></div>
                <div className="background-cirle-blue"></div>
                <div className="background-cirle-green"></div>
                <div className="background-circle-pink"></div>
                <div className="main-title-text">Find the joy</div>
                <div className="main-description-text">Take part in events and find new friends</div>
                <button className="main-button-sign-up">Sign up!</button>
                <Link to="/login"><div className="main-button-sign-in">Sign in</div></Link>
            </div>
        );
    }
}
export default MainPage;