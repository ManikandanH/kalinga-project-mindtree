import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CustomDialogBox from '../../../Components/CustomDialogBox/'

import Divider from '@material-ui/core/Divider';
import { bindActionCreators } from 'redux';

import deleteUser from '../../../NewActions/ViewUsersAdmin/deleteUser.js'

class ViewUsers extends Component {
    state = {
        open: false,
        uidToDelete: ""
    }
    handleOpen = () => {
        this.setState({ open: true })
    }
    handleClose = () => {
        this.setState({ open: false });
    }
    handleConfirm = () => {
        this.setState({ open: false });
        this.props.deleteUser(this.state.uidToDelete)
    }


    render() {


        if (this.props.ListOfUsers.searchResults.length === 0) {
            return (
                <div style={{ marginTop: "500px" }}>
                </div>
            )
        }



        let element = this.props.ListOfUsers.searchResults.map(item =>
            <ExpansionPanel style={{  width: "100%", marginLeft: "5px" }}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>{item.FirstName} {item.LastName}</Typography>
                </ExpansionPanelSummary>
                <Divider />
                <ExpansionPanelDetails>
                    <Typography>
                        UID: {item.UID}<br /><br />
                        Email:{item.Email}<br /><br />
                        Phone:{item.Phone}<br /><br />
                        Gender:{item.Gender}<br /><br />
                        Date Of Birth:{item.DateOfBirth.substring(0, 10)}<br /><br />
                        DateOf Joining:{item.DateOfJoining.substring(0, 10)}<br /><br />
                        Address:{item.Address.Street}, {item.Address.City}, {item.Address.State}, {item.Address.Pincode}<br />
                    </Typography>
                </ExpansionPanelDetails>
                <ExpansionPanelActions>
                    <Button size="medium" variant="outlined" color="secondary"
                        onClick={() => {
                            this.handleOpen(); this.setState({
                                uidToDelete: item.UID
                            })
                        }} >
                        Delete User
                                </Button>
                </ExpansionPanelActions>
            </ExpansionPanel>
        )

        return (

            <div>
                <div className="container-fluid" >
                    <div className="row justify-content-center">
                        <div className="col col-md-8" style={{ background: "#EEEEEE", marginTop: "10px", boxShadow: "5px 5px #888888" }}>

                            {this.onclose}
                            <Grid container direction="row" justify="center" alignItems="center" spacing={8} style={{marginTop:"30px", marginBottom: "450px" }}>
                                <Grid item xs={12} md={7}>
                                    {element}
                                </Grid>
                            </Grid>
                            <CustomDialogBox open={this.state.open} title={"Confirmation"}
                                message={"Are you sure to delete??"} handleClose={this.handleClose}
                                handleConfirm={this.handleConfirm} />
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}


function mapStateToProps(state) {
    return {
        ListOfUsers: state.ViewUser
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ deleteUser }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(ViewUsers)
