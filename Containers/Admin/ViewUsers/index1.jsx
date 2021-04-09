import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import Paper from '@material-ui/core/Paper';
import CustomDialogBox from '../../../Components/CustomDialogBox/'

import { bindActionCreators } from 'redux';

import deleteUser from '../../../NewActions/ViewUsersAdmin/deleteUser.js'
import ExpansionPanelCustommized from '../../../Components/ExpansionPanelCustomized'
import FetchUsers from '../../../NewActions/ViewUsersAdmin/ViewUsers.js'

class ViewUsers extends Component {
    state = {
        open: false,
        uidToDelete: "",
        searchValue: ""
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

    componentWillMount = () => {
        this.props.FetchUsers();
    }
    render() {


        if (this.props.ListOfUsers.searchResults.length === 0) {
            return (
                <div style={{ marginTop: "500px" }}>
                </div>
            )
        }

        let searchFiltered = this.props.ListOfUsers.searchResults.filter(item => {
            if (item.FirstName.toLowerCase().includes(this.state.searchValue.toLowerCase().trim())
                ||
                item.LastName.toLowerCase().includes(this.state.searchValue.toLowerCase().trim())
            )
                return true;
            else
                return false;
        })

        let element = searchFiltered.map(item =>
            <ExpansionPanelCustommized
                summary1={item.FirstName + " " + item.LastName}
                summary2={item.Email}
                actions={
                    [
                        {
                            actionTitle: "Delete User",
                            color: "secondary",
                            actionCallback: () => {
                                this.handleOpen(); this.setState({
                                    uidToDelete: item.UID
                                })
                            }
                        }
                    ]
                }
            >
                UID: {item.UID}<br /><br />
                Email:{item.Email}<br /><br />
                Phone:{item.Phone}<br /><br />
                Gender:{item.Gender}<br /><br />
                Date Of Birth:{item.DateOfBirth.substring(0, 10)}<br /><br />
                DateOf Joining:{item.DateOfJoining.substring(0, 10)}<br /><br />
                Address:{item.Address.Street}, {item.Address.City}, {item.Address.State}, {item.Address.Pincode}<br />

            </ExpansionPanelCustommized>

        )

        return (

            <div>

                <Grid container direction="row" justify="center" alignItems="center" spacing={8} style={{ marginTop: "30px", marginBottom: "450px" }}>
                    <Grid item xs={12} md={7}>
                        <Paper style={{ margin: "10px 10px", padding: "20px" }}>
                            <Grid container direction="row" justify="center" alignItems="center" spacing={8} >
                                <Grid item md={6} xs={10}>
                                    <TextField label="Search" fullWidth style={{ marginTop: "10px", marginBottom: "30px" }}
                                        onChange={(event) => { this.setState({ searchValue: event.target.value }) }} />
                                </Grid>
                                <Grid item xs={12}>
                                    {element}
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
                <CustomDialogBox open={this.state.open} title={"Confirmation"}
                    message={"Are you sure to delete??"} handleClose={this.handleClose}
                    handleConfirm={this.handleConfirm} />

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
    return bindActionCreators({ deleteUser, FetchUsers }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(ViewUsers)
