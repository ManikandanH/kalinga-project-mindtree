import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CustomDialogBox from '../../../../Components/CustomDialogBox'
import deleteSeller from '../../../../NewActions/Admin/Seller/deleteSeller.js'

class RejectedSeller extends React.Component {
    state = {
        open: false,
        sellerToDelete: {}
    }
    handleOpen = () => {
        this.setState({ open: true })
    }
    handleClose = () => {
        this.setState({ open: false });
    }
    handleConfirm = () => {
        this.setState({ open: false });
        this.props.deleteSeller(this.state.sellerToDelete)
    }

    render() {
        let rejectedSeller = this.props.adminSeller.rejectedSeller;
        if (this.props.adminSeller.sellersDataFetched && rejectedSeller.length) {
            rejectedSeller = rejectedSeller.filter((item) => {
                if (item.Name.toLowerCase().includes(this.props.search.toLowerCase()))
                    return true;
                else
                    return false;
            })
        }
        return (
            <div>
                {this.props.adminSeller.sellersDataFetched && !rejectedSeller.length ?
                    <Typography variant="subheading">No Rejected Seller</Typography> : null}
                {this.props.adminSeller.sellersDataFetched && rejectedSeller.length ?
                    rejectedSeller.map((item) => {
                        return (
                            <ExpansionPanel>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography style={{ marginRight: "20%" }}>{item.Name}</Typography>
                                    <Typography >{item.Email}</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Typography>
                                        Seller Id:{item._id}<br /><br />
                                        GST:{item.GSTNum}<br /><br />
                                        PAN:{item.PANNum}<br /><br />
                                        DateOf Joining:{item.DateOfJoining.substring(0, 10)}<br /><br />
                                        Address:{item.Address.Street}, {item.Address.City}, {item.Address.State}, {item.Address.Pincode}
                                    </Typography>
                                </ExpansionPanelDetails>
                                <ExpansionPanelActions>
                                    <Button size="medium" variant="outlined" color="secondary"
                                        onClick={() => {
                                            this.handleOpen(); this.setState({
                                                sellerToDelete:
                                                { sellerId: item._id, deleteFrom: "rejected" }
                                            })
                                        }}
                                    >
                                        Delete Seller
                                </Button>
                                </ExpansionPanelActions>
                            </ExpansionPanel>
                        )
                    }) : null}
                <CustomDialogBox open={this.state.open} title={"Confirmation"}
                    message={"Are you sure to delete??"} handleClose={this.handleClose}
                    handleConfirm={this.handleConfirm} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        adminSeller: state.adminSellerReducer
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ deleteSeller }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(RejectedSeller);
