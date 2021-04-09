import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Button
} from "@material-ui/core/";
import requestToken from "../../../../Actions/AdminLogin.js";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import axios from "axios";
import { Redirect, NavLink } from "react-router-dom";
import * as config from "../../../../config.js";
import showSnackbar from "../../../../NewActions/SnackBar/showSnackBarAction.js";
import SignInSeller from "../../../../NewActions/Seller/SellerSignin.js";
import Grid from '@material-ui/core/Grid'
import startprogressbar from '../../../../NewActions/ProgressBar/startProgressBarAction.js'
import stopprogressbar from '../../../../NewActions/ProgressBar/stopProgressBarAction.js'

class SignInAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.userId = "";
    this.password = "";
    this.state = {
      seller: false,
      ok: true
    };
  }

  urlBase64ToUint8Array = base64String => {
    const padding = "=".repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/\-/g, "+")
      .replace(/_/g, "/");

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  };

  handleLogin = () => {
    if (this.userId === "" && this.password === "") {
      this.props.showSnackbar({
        message: "Please Enter Some Credentials",
        type: "warning"
      });
    } else if (this.userId === "") {
      this.props.showSnackbar({
        message: "Enter the User ID",
        type: "warning"
      });
    } else if (this.password === "") {
      this.props.showSnackbar({
        message: "Enter the password",
        type: "warning"
      });
    } else if (this.userId === "admin" && this.password === "admin") {
      this.props.startprogressbar();
      if ("serviceWorker" in navigator) {
        const publicVapidKey =
          "BPKvX15X-noKLtYl5lywiLxcdEYuE9mL5d-zAOXgEROwNHqqcuA4E0lhsyP0T6xuWna3BU32XUsol1uN71mDJWs";
        navigator.serviceWorker
          .getRegistration()
          .then(reg =>
            reg.pushManager.subscribe({
              userVisibleOnly: true,
              applicationServerKey: this.urlBase64ToUint8Array(publicVapidKey)
            })
          )
          .then(subscription => {
            this.verifyUserBackend(subscription);
          })
          .catch(err => {
            this.verifyUserBackend(null);
          });
      } else this.verifyUserBackend(null);
    } else {
      this.props.SignInSeller(this.userId, this.password, this.props.onClose);
    }
  };

  verifyUserBackend = subscription => {
    axios
      .post(`${config.url}/admin/signin`, {
        userid: this.userId,
        password: this.password,
        subscription
      })
      .then(response => {
        sessionStorage.setItem("admintoken", JSON.stringify(response.data));
        this.props.AdminLogin();
        this.props.stopprogressbar();
      })
      .catch(error => {
        if (!error.response)
          this.props.showSnackbar({
            message: "Error in Login",
            type: "warning"
          });

        else
          this.props.showSnackbar({
            message: "You are not an admin",
            type: "warning"
          });
          this.props.stopprogressbar();
      });

  };

  render() {
    return (
      <div>
        <Dialog
          open={this.props.open} onClose={this.props.onClose}
          aria-labelledby="form-dialog-title" maxWidth="xs">
          <DialogTitle id="form-dialog-title">Login As Seller</DialogTitle>
          <DialogContent>
            <Grid container direction="row" justify="center" alignItems="center" spacing={8}>
              <Grid item xs={12}>
                <TextField autoFocus margin="dense" id="name" label="Login ID" type="text"
                  fullWidth placeholder="LogIn ID"
                  onChange={event => {
                    this.userId = event.target.value;
                  }} />
              </Grid>
              <Grid item xs={12}>
                <TextField margin="dense" id="password" label="Password" type="password"
                  fullWidth placeholder="Password"
                  onChange={event => {
                    this.password = event.target.value;
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <Button onClick={this.handleLogin} color="primary" fullWidth>
                  Login
            </Button>
              </Grid>
              <Grid item xs={6}>
                <Button onClick={this.props.onClose} color="primary" fullWidth>
                  Cancel
            </Button>
              </Grid>
              <Grid item xs={12}>
                <NavLink to="/sellersignup">
                  <Button variant="outlined"
                    onClick={this.props.onClose}
                    color="primary"
                    fullWidth>
                    Register as Seller
                     </Button>
                </NavLink>


              </Grid>
            </Grid>
          </DialogContent>

        </Dialog>

        {this.props.seller.isseller === true ? <Redirect to="/seller" /> : null}
        {this.props.token.isadmin && <Redirect to="/admin" />}
      </div>
    );
  }
}

function mapstatetoprops(state) {
  return {
    token: state.AdminLogin,
    seller: state.seller
  };
}
function matchdispatchtoProps(dispatch) {
  return bindActionCreators(
    { AdminLogin: requestToken, showSnackbar, SignInSeller: SignInSeller,startprogressbar,stopprogressbar },
    dispatch
  );
}
export default connect(mapstatetoprops, matchdispatchtoProps)(SignInAdmin);
