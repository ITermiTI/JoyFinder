import React from 'react'
import ChangePasswordStyle from '../styles/ChangePasswordStyle.css'
import axios from 'axios'
import * as Const from '../static/const';

class ChangePasswordBox extends React.Component{

    state={
        user: 'error'

    }

    componentDidMount() {
        axios.get(`${Const.API_URL}api/user/1`  
            )
          .then(res => {
            const user = res.data;
            this.setState( {user} );
          })
      }

    render(){
        return(
            <div>
                <input className="old-password-box" type="password" placeholder="Old password"/>
                <input className="new-password-box" type="password" placeholde="New password"/>

            </div>
        )
    };

}

export default ChangePasswordBox;