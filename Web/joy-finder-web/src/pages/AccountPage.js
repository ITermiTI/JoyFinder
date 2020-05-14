import React from 'react'
import AccountPageBox from '../components/AccountPageBox.js'

class AccountPage extends React.Component{

    constructor(){
        super();
        this.state = {
            render: 'view',
    }
    }

    render(){
        return (
            <div className="component-background">
                <div className="home-page-title-text">Your Account!</div>
                <AccountPageBox/>
            </div>   
            
        );
    }
}

export default AccountPage;