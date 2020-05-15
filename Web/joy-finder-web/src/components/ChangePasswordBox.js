import React from 'react'
import ChangePasswordStyle from '../styles/ChangePasswordStyle.css'
import axios from 'axios'
import * as Const from '../static/const';

class ChangePasswordBox extends React.Component{

    handleChange = (e) => {
        const {value, name} = e.target;
        this.props.updateState(name,value);
      }

    render(){
        return(
            <div>
                <input className="old-password-box" type="password" placeholder="Old password"/>
                <input className="new-password-box" name="password" type="password" placeholde="New password" onChange={this.handleChange}/>

            </div>
        )
    };

}

export default ChangePasswordBox;