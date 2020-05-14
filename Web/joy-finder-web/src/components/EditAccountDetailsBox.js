import React from 'react'
import EditAccountDetailsStyle from '../styles/EditAccountDetailsStyle.css'
import { MdPerson, MdEmail, MdLocalPhone } from "react-icons/md";
import axios from 'axios'
import * as Const from '../static/const';

class EditAccountDetailsBox extends React.Component{

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
               Hello!
            </div>
        )
    };

}

export default EditAccountDetailsBox;