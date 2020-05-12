import React from 'react';
import RegisterStyle from '../styles/RegisterStyle.css'
import { Link } from 'react-router-dom';

class RegisterBox extends React.Component{

    render() {
        return (
        
        <div>    
            <div className="backgroung-box-style-r">
                <form onSubmit={this.handleSubmit}>
                    <div className="text">Login:</div>
                    <div className="box"></div>
                    <div className="text">Email:</div>
                    <div className="box"></div>
                    <div className="text">Passsword:</div>
                    <div className="box"></div>
                    <div className="text">First name:</div>
                    <div className="box"></div>
                    <div className="text">Last name:</div>
                    <div className="box"></div>
                    <div className="text">Phone number:</div>
                    <div className="box"></div> 
                
                    <button className="button" type="submit">Sign up</button>
                </form>
                
        </div >
        <div className="account-text">Do you have an account? <Link to="/login">Sign in!</Link></div>
    </div>
        
        )
    };
}

export default RegisterBox;