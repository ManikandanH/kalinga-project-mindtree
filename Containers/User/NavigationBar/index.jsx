import React from 'react';
import { Button, Grid, Toolbar } from '@material-ui/core/';
import CartButton from './CartButton';
import CategoryDropDown from './CategoryDropDown'
import Search from '../../../Components/Search';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { NavLink, Redirect } from 'react-router-dom'
import AdminLogin from './SignInAdmin'
import Signuser from './signinUser'
import startprogressBar from '../../../NewActions/ProgressBar/startProgressBarAction.js';
import stopprogressBar from '../../../NewActions/ProgressBar/stopProgressBarAction.js'
import Signout from '../../../NewActions/user/signOut.js'
import order from '../../../NewActions/user/myorder'
import showSnackBar from '../../../NewActions/SnackBar/showSnackBarAction.js'
import Avatar from '@material-ui/core/Avatar';



class NavigationBar extends React.Component {
  state = {
    adminDialogOpen: false,
    loginclick: false,
    redirect:false
  }
  onsignin = () => {

    this.setState({
      loginclick: true,
      logout: false
    })
  }


  signout = () => {
    this.props.showSnackBar({
      message: "Succesfully logged out",
      type: "success"
    })
   
    this.setState({
        redirect:true
    })
    this.props.logout(null);

  }
  orderclicked = (uid) =>{
    this.props.order(uid);
  }
  cancelclick = () => {
    this.setState({
      loginclick: false
    })
  }
  handleOpenAdminDialog = () => {
    this.setState({ adminDialogOpen: true });
  }

  handleCloseAdminDialog = () => {
    this.setState({ adminDialogOpen: false });
  }

  render() {
    if (this.props.ChangingState === undefined) {
      return (<div />)
    }

    return (
      <div className="container-fluid" style={{ backgroundColor: "white", marginTop: "60px", position: "static" }}>
          {this.state.redirect===true?<Redirect to='/' />:null}
        <Toolbar color="white" >
          <Grid container direction="row" justify="space-between" alignItems="center" spacing={8}>

            <Grid item xs={2} md={1}>
              <CategoryDropDown />
            </Grid>

            <Grid item  xs={4} md={7}>
              <Search />
            </Grid>

            <Grid item xs={3} md={1}>
              {this.props.ChangingState.isuser === false ? <div>
                <button className="btn btn-primary dropdown-toggle" 
                style={{ borderColor:"transparent", backgroundColor: 'transparent',width:"100px",height:"40px",fontSize:"18px",color:"rgba(34, 7, 7,0.8)" }}
                type="button" 
                id="dropdownMenuButton" 
                data-toggle="dropdown" 
                aria-haspopup="true" 
                aria-expanded="false"> 
                  Login
                </button>
                <div className="dropdown-menu" id="dropdmenu" style={{ fontSize: "15px" }} aria-labelledby="dropdownMenuButton" >
                <a className="dropdown-item" onClick={this.onsignin}>User</a>
                  <a className="dropdown-item" onClick={this.handleOpenAdminDialog}>
                   Seller
              </a>
                  

                </div></div>
                :
                <div><Button variant="body" color="primary" style={{ fontSize: "13px",textTransform:"none" }} 
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false">
                  <span>
                       <Avatar style={{backgroundColor:"orange",width:"30px",fontSize:"14px",height:"30px"}}>
                           {this.props.ChangingState.name[0]}
                           </Avatar>
                      </span>
                  <span style={{marginLeft:"4px"}}>
                      Hello,
                  {this.props.ChangingState.name}
                  </span>
                </Button>
                  <div class="dropdown-menu" id="dropdmenu" style={{ fontSize: "15px" }} aria-labelledby="dropdownMenuButton" >
                    <NavLink to="/profile" style={{ textDecoration: "none" }} onClick={this.profileclicked}>
                      <a className="dropdown-item" > My Profile</a>
                    </NavLink>
                    <NavLink to='/myorder' style={{textDecoration: "none"}} onClick={this.orderclicked(this.props.ChangingState.uid)}>
                    <a className="dropdown-item" onClick={this.orderclicked(this.props.ChangingState.uid)}>
                       My Orders
                    </a>
                    </NavLink>
                    <a className="dropdown-item" style={{ color: "#007bff" }} onClick={this.signout} >Logout</a>
                  </div></div>}
            </Grid>

            <Grid item xs={2} md={1}>

              <CartButton />
            </Grid>

          </Grid>

        </Toolbar>
        {this.state.logout === true ? <Redirect to='/' /> : null}
        <Signuser open={this.state.loginclick} close={this.cancelclick} />
        <AdminLogin open={this.state.adminDialogOpen} onClose={this.handleCloseAdminDialog} />

      </div>

    )
  }
}

function mapstatetoprops(state) {
  return {
    ChangingState: state.Sign
  }

}
function mapdispatchtoprops(state) {
  return bindActionCreators({ logout: Signout, showSnackBar, startprogressBar, order,stopprogressBar }, state)

}

export default connect(mapstatetoprops, mapdispatchtoprops)(NavigationBar); 