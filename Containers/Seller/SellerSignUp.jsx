import React from 'react'
import { Paper, TextField, Grid, Typography, Button } from '@material-ui/core/';
import { Redirect } from 'react-router-dom';
import {  FormLabel } from '@material-ui/core/';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import startProgressBar from '../../NewActions/ProgressBar/startProgressBarAction.js'
import stopProgressBar from '../../NewActions/ProgressBar/stopProgressBarAction.js'
import showSnackBar from '../../NewActions/SnackBar/showSnackBarAction.js'
import SellerSignUp from '../../NewActions/Seller/sellersignup.js'



const regex = /^[a-zA-Z]+[a-zA-Z ]*$/;
const passwordReg = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^''"&*]{8,20}$/;
const email = /^[a-zA-Z]+[a-z0-9A-Z_-]+(\.[_a-zA-Z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
const streetregex = /^[A-Za-z0-9#][A-Za-z0-9. ,/-]*$/
const panregex=/[A-Za-z]{5}\d{4}[A-Za-z]{1}/;
const GSTregex=/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
// const phoneNumber = /^[A-Za-z]{5} ?[0-9]{4} ?[a-zA-Z]{1}$/;
// const phoneNumber = /^[0-9]{2} ?[a-zA-Z]{5} ?[0-9]{4} ?[a-zA-Z]{1} ?[0-9]{1} ?Z[0-9]{1}$/;
const pinCode = /^[0-9]{6,6}$/;

class Register extends React.Component {
    constructor(props) {
        super();
        this.Name = '';; this.eMail = ''; this.password = '';
        this.confirmPassword = ''; this.dob = ''; this.street = ''; this.city = '';
        this.stateA = ''; this.pincode = ''; this.phone = '';this.PanNum='';this.GSTNum='';
        this.state = {
            registerComplete: false, gender: 'Male', errorName: false,
            errorPassword: false, errorPincode: false, errorConfirm: false,errorGSTNum:false,
            errorEmail: false, errorStreet: false, errorCity: false, errorState: false, redirect: false,errorPanNum:false
        }
    }

    handleChangeName = event => {
        this.Name = event.target.value
        if ((event.target.value).match(regex) && (event.target.value).length <= 20) {
            this.setState({ errorName: false });
        }
        else {
            this.setState({ errorName: true });
        }

    };
    handlePanNum=event=>{
        this.PanNum=event.target.value;
        if((event.target.value).match(panregex)&&(event.target.value).length===10){
            this.setState({errorPanNum:false});
        }
        else{
            this.setState({errorPanNum:true})
        }
    }
    handleGSTNum=event=>{
        this.GSTNum=event.target.value;
        if((event.target.value).match(GSTregex)&&(event.target.value).length===15){
            this.setState({errorGSTNum:false});
        }
        else{
            this.setState({errorGSTNum:true})
        }
    }
    handleChangeEmail = event => {
        this.eMail = event.target.value
        if ((email).test(event.target.value) && (event.target.value).length <= 30) {
            this.setState({ errorEmail: false });
        }
        else {
            this.setState({ errorEmail: true });
        }

    };
    handleChangePassword = event => {
        this.password = event.target.value
        if ((event.target.value).match(passwordReg)) {
            this.setState({ errorPassword: false });
        }
        else {
            this.setState({ errorPassword: true });
        }
        if ((event.target.value) === (this.confirmPassword)) {
            this.setState({ errorConfirm: false });
        }
        else {
            this.setState({ errorConfirm: true });
        }
    };
    handleChangeConfirm = event => {
        this.confirmPassword = event.target.value
        if ((event.target.value) === (this.password)) {
            this.setState({ errorConfirm: false });
        }
        else {
            this.setState({ errorConfirm: true });
        }
    };
    handleChangeStreet = event => {
        this.street = event.target.value
        if ((event.target.value).match(streetregex) && (event.target.value).length <= 40) {
            this.setState({ errorStreet: false });
        }
        else {
            this.setState({ errorStreet: true });
        }

    };
    handleChangeCity = event => {
        this.city = event.target.value
        if ((event.target.value).match(regex) && ((event.target.value).length >= 3) && (event.target.value).length <= 20) {
            this.setState({ errorCity: false });
        }
        else {
            this.setState({ errorCity: true });
        }

    };
    handleChangeState = event => {
        this.stateA = event.target.value
        if ((event.target.value).match(regex) && (event.target.value).length >= 3 && (event.target.value).length <= 20) {
            this.setState({ errorState: false });
        }
        else {
            this.setState({ errorState: true });
        }

    };
    handleChangePincode = event => {
        this.pincode = event.target.value
        if ((event.target.value).match(pinCode)) {
            this.setState({ errorPincode: false });
        }
        else {
            this.setState({ errorPincode: true });
        }

    };


    handleSignUp = () => {
        this.props.startProgressBar();
        if ((this.Name) === '' || (this.eMail) === '' ||
            (this.password) === '' || (this.confirmPassword) === '' ||
            (this.street) === '' || (this.city) === '' || (this.stateA) === '' ||
            (this.pincode) === ''||(this.PanNum)===''||(this.GSTNum)==='') {
            this.props.showSnackBar({ message: "Please Fill Up the Form", type: "warning" });
            this.props.stopProgressBar();
        }
        else if (this.state.errorFirst || this.state.errorLast || this.state.errorEmail ||
            this.state.errorPassword || this.state.errorConfirm || this.state.errorNumber
            || this.state.errorStreet || this.state.errorCity || this.state.errorState || this.state.errorPincode || this.state.errorDOB||this.state.errorPanNum||this.state.errorGSTNum) {

            this.props.stopProgressBar();
            this.props.showSnackBar({
                message: "OOPS!! Looks Like you haven't filled up the form properly"
                , type: "warning"
            });
        }
        else {
            this.props.SellerSignUp(this.Name,this.eMail,this.password,this.street,this.city,this.stateA,this.pincode,this.PanNum,this.GSTNum);
        }

    };


    render() {
        return (
            <div>
                {this.state.redirect === true ? <Redirect to='/' /> : null}
                {this.state.registerComplete && <Redirect to='/' />}
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7 col-sm-12" style={{ marginTop: "20px", marginBottom: "20px" }}>
                            <Paper elevation={24} >
                                <Grid container direction="row" justify="flex-start" alignItems="center" spacing={8} style={{ padding: "20px", backgroundColor: "white" }} >
                                    <Grid item xs={12}>
                                        <Typography variant="headline" >
                                            Create your Account With Furnique
                                        </Typography>

                                        <Typography variant="subheading" >
                                            to continue selling
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField label="Seller Name" error={this.state.errorFirst} fullWidth onChange={this.handleChangeName} />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <TextField label="Email" error={this.state.errorEmail} type="email" fullWidth onChange={this.handleChangeEmail} />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField label="Password" error={this.state.errorPassword} type="password" fullWidth onChange={this.handleChangePassword} />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField label="Confirm-Password" error={this.state.errorConfirm} type="password" fullWidth onChange={this.handleChangeConfirm} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant="caption">
                                            {"Use 8 or more characters with atleast one special character, one Capital letter and one number"}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <TextField label="Pan Number"  fullWidth error={this.state.errorPanNum} onChange={this.handlePanNum}/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant="caption">
                                            {"The first five characters are letters, followed by four numerals, and the last character is a letter"}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <TextField label="GST Number(In Caps)" fullWidth error={this.state.errorGSTNum} onChange={this.handleGSTNum} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant="caption">
                                            {"The first two characters are numerals,followed by five letters,four numerals,single letter,single numeral,Z and finally a numeral"}
                                        </Typography>
                                    </Grid>
                                    

                                    <Grid item xs={12}>
                                        <FormLabel component="legend" style={{marginTop:"25px"}}>
                                            Seller Address
                                            </FormLabel>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField label="Street" type="text" error={this.state.errorStreet} fullWidth onChange={this.handleChangeStreet} />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField label="City" type="text" error={this.state.errorCity} fullWidth onChange={this.handleChangeCity} />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField label="State" type="text" error={this.state.errorState} fullWidth onChange={this.handleChangeState} />
                                    </Grid>
                                    <Grid item xs={12} sm={6} >
                                        <TextField label="Pincode" error={this.state.errorPincode} type="text" fullWidth onChange={this.handleChangePincode} />
                                    </Grid>
                                    <Grid item sm={8}>
                                    </Grid>
                                    <Grid item xs={12} sm={4} style={{ marginTop: "20px" }}>
                                        <Button variant="contained" color="primary" fullWidth onClick={this.handleSignUp}>
                                            Sign Up
                                    </Button>

                                    </Grid>
                                </Grid>
                            </Paper>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ showSnackBar, startProgressBar, stopProgressBar,SellerSignUp:SellerSignUp }, dispatch)
}

export default connect(null, mapDispatchToProps)(Register);

