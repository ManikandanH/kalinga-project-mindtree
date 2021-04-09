import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Typography from '@material-ui/core/Typography';
import CustomDialogBox from '../../../../Components/CustomDialogBox'
import deleteSeller from '../../../../NewActions/Admin/Seller/deleteSeller.js'
import ExpansionPanelCustommized from '../../../../Components/ExpansionPanelCustomized'
class ApprovedSeller extends React.Component {
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
        let approvedSeller = this.props.adminSeller.approvedSeller;
        if (this.props.adminSeller.sellersDataFetched && approvedSeller.length) {
            approvedSeller = approvedSeller.filter((item) => {
                if (item.Name.toLowerCase().includes(this.props.search.toLowerCase().trim()))
                    return true;
                else
                    return false;
            })
        }
        return (
            <div>
                {this.props.adminSeller.sellersDataFetched && !approvedSeller.length ?
                    <Typography variant="subheading">No Approved Seller</Typography> : null}
                {this.props.adminSeller.sellersDataFetched && approvedSeller.length ?
                    approvedSeller.map((item) => {
                        return (
                            <ExpansionPanelCustommized
                                summary1={item.Name}
                                summary2={item.Email}
                                actions={
                                    [
                                        {
                                            actionTitle: "Delete Seller",
                                            color:"secondary",
                                            actionCallback: () => {
                                                this.handleOpen(); this.setState({
                                                    sellerToDelete:
                                                    { sellerId: item._id, deleteFrom: "accepted" }
                                                })
                                            }
                                        }
                                    ]
                                }
                            >
                                Seller Id:{item._id}<br /><br />
                                GST:{item.GSTNum}<br /><br />
                                PAN:{item.PANNum}<br /><br />
                                DateOf Joining:{item.DateOfJoining.substring(0, 10)}<br /><br />
                                Address:{item.Address.Street}, {item.Address.City}, {item.Address.State}, {item.Address.Pincode}

                            </ExpansionPanelCustommized>
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


export default connect(mapStateToProps, mapDispatchToProps)(ApprovedSeller);
