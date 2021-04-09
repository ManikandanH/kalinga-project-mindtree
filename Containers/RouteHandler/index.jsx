import React, { Component } from 'react';
import { Switch,Route } from 'react-router-dom';
import User from '../User/';
import Admin from '../Admin/';
import Seller from '../Seller/index'

class UserAdminRouteHandler extends Component {

    render() {
        return (
            <Switch>
                <Route path='/seller' component={Seller}/>
                <Route  path='/admin'  component={Admin}/>
                <Route  path='/' component={User} />
            </Switch>
        )
    }
}
export default UserAdminRouteHandler;

