import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import Grid from '@material-ui/core/Grid'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import showSnackBar from '../../../../NewActions/SnackBar/showSnackBarAction.js'
//import SignInGoogle from '../SignInGoogle'
import signInWithGoogleAction from '../../../../NewActions/SignInWithGoogle/signInWithGoogle.js'

import history from '../../../../history';
import signInAction from '../../../../NewActions/user/signIn.js'
import googlesvgicon from '../../../../assests/google.svg'

class Signuser extends React.Component {
    constructor(props) {
        super();
        this.userId = "";
        this.password = ""
    }
    userlogin = () => {
        if (this.password === "" || this.userId === "") {
            this.props.showSnackBar({
                message: "Fill up the details",
                type: "warning"
            })
        }
        else {

            this.props.signInAction(this.userId, this.password, this.props.close);
        }
    }
    render() {
        return (
            <div>

                <Dialog open={this.props.open} onClose={this.props.close}
                    aria-labelledby="form-dialog-title" maxWidth="xs">
                    <DialogTitle id="form-dialog-title">Login As User</DialogTitle>
                    <DialogContent>
                        <Grid container direction="row" justify="center" alignItems="center" spacing={8}>
                            <Grid item xs={12}>
                                <TextField autoFocus margin="dense" id="name" label="Login ID" type="text"
                                    fullWidth
                                    onChange={(event) => { this.userId = event.target.value }} />
                            </Grid>
                            <Grid item xs={12}>

                                <TextField margin="dense" id="password" label="Password"
                                    type="password" fullWidth
                                    onChange={(event) => { this.password = event.target.value }} />
                            </Grid>
                            <Grid item xs={6}>
                                <Button onClick={this.userlogin} color="primary" fullWidth>
                                    Login
                             </Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Button onClick={this.props.close} color="primary" fullWidth>
                                    Cancel
                             </Button>
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="outlined" onClick={() => { this.props.close(); history.push('/signup') }}
                                    color="primary" fullWidth
                                >
                                    New to Furnique? Sign Up
                             </Button>
                            </Grid>

                            <Grid item xs={12}>

                                <Button variant="outlined" onClick={() => {
                                    this.props.signInWithGoogleAction();
                                    this.props.close();
                                }}
                                    color="primary" fullWidth
                                    style={{ color: "red", background: "" }}>
                                    <img src={googlesvgicon} alt="SignInWithGoogle"
                                        width="30px" height="30px"
                                        style={{ margin: "0 10px" }} />
                                    Sign In With Google

                                </Button>
                            </Grid>

                        </Grid>
                    </DialogContent>
                </Dialog>
            </div>

        )
    }
}


function mapdispatchtoprops(dispatch) {
    return bindActionCreators({ showSnackBar, signInAction, signInWithGoogleAction }, dispatch)
}
export default connect(null, mapdispatchtoprops)(Signuser)