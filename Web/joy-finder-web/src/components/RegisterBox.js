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
                    <input className="box" type="login"/>
                    <div className="text">Email:</div>
                    <input className="box" type="email"/>
                    <div className="text">Passsword:</div>
                    <input className="box" type="password"/>
                    <div className="text">First name:</div>
                    <input className="box" type="text"/>
                    <div className="text">Last name:</div>
                    <input className="box" type="text"/>
                    <div className="text">Phone number:</div>
                    <input className="box"/>
                
                    <Link to="/yourevents"><button className="button" type="submit">Sign up</button></Link>
                </form>
                
        </div >
        <div className="account-text">Do you have an account? <Link to="/login">Sign in!</Link></div>
    </div>
        
        )
    };
}

export default RegisterBox;