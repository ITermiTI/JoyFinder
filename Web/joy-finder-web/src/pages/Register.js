import React from 'react'
import RegisterStyle from '../styles/RegisterStyle.css'
import RegisterBox from '../components/RegisterBox'

class Register extends React.Component{
    render(){
        return (
            <div className="main-background-r">
                <div className="background-cirle-blue-r"></div>
                <div className="background-cirle-green-r"></div>
                <div className="main-title-text-r">Join the
                <div className="main-title-text-colored-r">fun</div>
                </div>
                <div className="background-cirle-violet-r"></div>
                <RegisterBox/>
                
                
                
            </div>
        );
    }
}

export default Register;