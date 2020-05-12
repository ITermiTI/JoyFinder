import React from 'react'
import LoginBox from '../components/LoginBox.js';


class Login extends React.Component{
    render(){
        return (
            <div className="login-page">
                <div className="background-blue-circle"></div>
                <div className="background-green-circle green-one"></div>
                <div className="background-green-circle green-two"></div>
                <div className="waiting-text">What are you waiting for?</div>
                <div className="get-in-text">
                    <p>Get <span className="in-text">in!</span></p>
                </div>
                <LoginBox/>
            </div>            
            )
    }
}

export default Login;