import React from 'react';
import { Button,AppBar,Typography,Toolbar,Grid} from '@material-ui/core';
import {NavLink,Redirect} from "react-router-dom"
import {connect} from 'react-redux'
import signoutSeller from '../../NewActions/Seller/signoutSeller.js'
import AdminLogOut from '../../Actions/adminlogout.js' 
import {bindActionCreators} from 'redux'
import axios from 'axios'
import {url} from '../../config.js'
import startprogressBar from '../../NewActions/ProgressBar/startProgressBarAction.js'
import stopprogressBar from '../../NewActions/ProgressBar/stopProgressBarAction.js'
import showSnackBar from '../../NewActions/SnackBar/showSnackBarAction.js'


class header extends React.Component{

    constructor(props)
    {
        super();
        this.state={
            sellerlogout:false
        }
    }

    sellerlogout = () => {
        this.props.signoutSeller();
        this.setState({
            sellerlogout:true

        })
    }
    adminlogout = () => {
        this.props.startprogressBar();
        axios.post(`${url}/admin/logout`, {
            username: "admin"
        }).then((response) => {
            this.props.AdminLogOut();
             sessionStorage.removeItem("admintoken");
             this.props.stopprogressBar();
            this.props.showSnackBar({ type: "success", message: "Successfully Logged Out" })
        }).catch(() => {
            this.props.showSnackBar({ type: "error", message: "Error Logging Out" })
        })
    }
    render()
    {
    return (
      <div>
          {this.state.sellerlogout===true ? <Redirect to ='/' /> :null}
        <AppBar position="fixed" style={{background: 'rgba(34, 7, 7, 0.8)',height:"60px"}}>
          <Toolbar>
            <Grid container direction="row" justify="space-between" alignItems="center" spacing={16}>
              <Grid item>
                  
                <Typography variant="headline" color="inherit"  style={{fontSize:"35px", fontFamily: "Sofia",marginLeft:"30px",marginBottom:"10px"}}>
               {this.props.redirect.isseller===false ? <NavLink to="/" style={{textDecoration:"none",color:"white"}}>
                  <strong ><i>furnique</i></strong>
                  </NavLink>: <NavLink to="/seller" style={{textDecoration:"none",color:"white"}}>
                  <strong ><i>furnique</i></strong>
                  </NavLink>}
                </Typography>
                <div style={{marginLeft:"30px"}}>
                  </div>  
              </Grid>
              <Grid item>
                  {this.props.seller.isseller  ?
                  <Button style={{color:"white"}} onClick={this.sellerlogout}>Logout</Button>:null}
                  {this.props.admin.isadmin  ?
                  <Button style={{color:"white"}} onClick={this.adminlogout}>Logout</Button>:null}
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
       </div>

    );
  }
}
 function mapstatetoprops(state){
     return {
         redirect:state.seller,
         admin:state.AdminLogin,
         seller:state.seller
         
     }
 }

 function mapdispatchtoprops(dispatch) {
     return bindActionCreators({startprogressBar,stopprogressBar,showSnackBar, signoutSeller,AdminLogOut},dispatch)
 }


export default  connect(mapstatetoprops,mapdispatchtoprops)(header);
