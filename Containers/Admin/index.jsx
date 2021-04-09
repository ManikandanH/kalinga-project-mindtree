import React, { Component } from 'react';
import { Tabs, Tab, AppBar } from '@material-ui/core/';
import Dashboard from './Dashboard'
import ViewUsers from './ViewUsers/index1'
import ViewAllProduct from '../Admin/AdminViewProduct/index1.jsx'
import FetchUsers from '../../NewActions/ViewUsersAdmin/ViewUsers.js'
import FetchProducts from '../../Actions/FetchProducts'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import requestToken from '../../Actions/AdminLogin.js';
import showSnackBar from '../../NewActions/SnackBar/showSnackBarAction.js'
import AdminLogOut from '../../Actions/adminlogout.js'
import Seller from './Seller'
import startprogressBar from '../../NewActions/ProgressBar/startProgressBarAction.js'
import stopprogressBar from '../../NewActions/ProgressBar/stopProgressBarAction.js'
class Admin extends Component {
    state = {
        value: 0,
        logout: false,
        footer:false
    };
    componentWillMount() {
        
        axios.defaults.headers.common['Authorization'] = 'bearer ' + this.props.AdminLogin.token;
        
    }
    changeTab=(newTab)=>{
        this.setState({value:newTab})
    }

    viewproducts = () => {
        this.props.FetchProducts()
    }

    handleChange = (event, value) => {
        this.setState({ value });
    };
    render() {
        if(this.state.footer)
            {
                return(<div style={{marginTop:"400px"}}>
                        <Redirect to='/'/>
                    </div>)
            }
        return (
            <div>
                <div>
                    {this.props.AdminLogin.isadmin === false ? <Redirect to="/"></Redirect> : null}
                    <AppBar position="static" color="inherit" style={{marginTop:"60px"}}>
                        <Tabs value={this.state.value} onChange={this.handleChange}>
                            <Tab label="Dashboard" />
                            <Tab label="Users" onClick={this.props.FetchUsers} />
                            <Tab label="Products" onClick={this.props.FetchProducts} />
                            <Tab label="Sellers" />
                       </Tabs>
                    </AppBar>
                    {this.state.value === 0 && <Dashboard changeTab={this.changeTab}/>}
                    {this.state.value === 1 && (<ViewUsers />)}
                    {this.state.value === 2 && <div><ViewAllProduct /></div>}
                    {this.state.value === 3 && <Seller />}
                </div>

            </div>
        )
    }
}
function mapstateToProps(state) {
    return {
        AdminLogin: state.AdminLogin,
        AllProducts: state.productAdminView
    }
}
function matchdispatchtoProps(dispatch) {

    return bindActionCreators({
        FetchUsers: FetchUsers, FetchProducts: FetchProducts,
        AdminLogins: requestToken, showSnackBar,
        AdminLogOut:AdminLogOut,
        startprogressBar,
        stopprogressBar
    }, dispatch)

}


export default connect(mapstateToProps, matchdispatchtoProps)(Admin)
