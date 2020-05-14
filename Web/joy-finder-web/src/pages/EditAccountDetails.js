import React from 'react'
import EditAccountDetailsBox from '../components/EditAccountDetailsBox.js'

class EditAccountDetails extends React.Component{
    render(){
        return (
            <div className="component-background">
                <div className="home-page-title-text">Edit your account</div>
                <EditAccountDetailsBox/>
            </div>   
            
        );
    }
}

export default EditAccountDetails;