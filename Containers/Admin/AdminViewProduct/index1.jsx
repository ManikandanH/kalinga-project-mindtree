import React, { Component } from 'react';
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import AddForm from '../../../Components/addProduct/index'
import axios from 'axios';
import { bindActionCreators } from 'redux'
import FetchProducts from '../../../Actions/FetchProducts';
import * as config from '../../../config'
import startprogressBar from '../../../NewActions/ProgressBar/startProgressBarAction'
import stopprogressBar from '../../../NewActions/ProgressBar/stopProgressBarAction'
import showSnackBar from '../../../NewActions/SnackBar/showSnackBarAction'
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Hidden from '@material-ui/core/Hidden';
import Filter from '../../../Components/Filter/filter.jsx'
import UpdateForm from '../../../Components/Updateform/UpdateForm.jsx'
import Noresult from '../../../assests/no_result.png'
import signOutSeller from '../../../NewActions/Seller/signoutSeller'
import CardCustomized from '../../../Components/CardCustomized/index1'
import ExpansionPanelCustomized from '../../../Components/ExpansionPanelCustomized'

class ViewAllProduct extends Component {
    constructor(props) {
        super();
        this.state = {
            searchValue: "",
            open: false,
            dialogopen: false,
            item: "",
            itemUpdate: "",
            openUpdate: false,
            produtsToDisplay: props.AllProducts,
            Length: '',
            Breadth: '',
            Height: ''

        }
    }

    filterProducts = (filteredProducts) => {
        this.setState({ produtsToDisplay: filteredProducts })
    }
    close = (close) => {
        this.setState({ openUpdate: close })
    }

    onclose = () => {
        this.setState({
            open: false

        })
    }
    handleClose = () => {
        this.setState({
            dialogopen: false,

        })
    }
    OpenDialogueBox = (item) => {
        this.setState({
            open: true,
            item: item
        })
    }
    OpenUpdateBox = (item) => {
        var dem = item.Dimension.split("X");
        this.setState({
            openUpdate: true,
            itemUpdate: item,
            Length: dem[0],
            Breadth: dem[1],
            Height: dem[2]
        })

    }
    deleteproduct = (ProductID) => {
        this.props.startprogressBar();
        let isAdmin = false;
        let SellerId = "admin"
        if (this.props.AdminLogin.isadmin)
            isAdmin = true;
        else
            SellerId = this.props.id;

        axios.post(`${config.url}/admin/deleteproduct`, {
            product: ProductID,
            isAdmin,
            sellerId: SellerId
        })
            .then(response => {
                this.props.FetchProducts(this.props.SellerName, this.props.id);
                this.props.stopprogressBar();
                this.props.showSnackBar({
                    message: "Product Successfully Deleted",
                    type: "success"
                })
                this.setState({
                    open: false
                })
            })
            .catch(err => {
                this.props.stopprogressBar();
                if (err.response && err.response.data === "seller") {
                    this.props.signOutSeller();
                    this.props.showSnackBar({
                        message: "You have been Deleted ",
                        type: "error"
                    })
                }
                else if (err.response && err.response.status === 400)
                    this.props.showSnackBar({
                        message: "Product Already Deleted Please refresh to get the new changes",
                        type: "error"
                    })
                else
                    this.props.showSnackBar({
                        message: "Network issue",
                        type: "error"
                    })
            })

    }

    render() {

        let element;
        if (this.state.produtsToDisplay.length) {
            let searchFiltered = this.state.produtsToDisplay.filter(item => {
                if (item.Title.toLowerCase().includes(this.state.searchValue.toLowerCase().trim()) ||
                    item.Category.toLowerCase().includes(this.state.searchValue.toLowerCase().trim())
                    ||
                    item.SellerId.toLowerCase().includes(this.state.searchValue.toLowerCase().trim()))
                    return true;
                else
                    return false;
            })
            element = searchFiltered.map(item =>
                <div className="col-11 col-sm-6 col-md-4">

                    <CardCustomized product={item} actions={[

                        {
                            actionTitle: "Edit",
                            color: "primary",
                            actionCallback: () => {
                                this.OpenUpdateBox(item)
                            }
                        },
                        {
                            actionTitle: "Delete",
                            color: "secondary",
                            actionCallback: () => {
                                this.OpenDialogueBox(item)
                            }
                        }
                    ]} />
                </div>)
        }
        else {
            element = <div className="col-sm-12" style={{ marginLeft: "auto", marginRight: "auto", marginTop: "100px" }}>
                <center style={{ marginBottom: '310px' }}><img alt="noresult" src={Noresult} />
                    <div><strong style={{ fontSize: "26px", color: "silver" }}>Sorry, No Products Available</strong></div></center>

            </div>
        }
        return (

            <div style={{ marginTop: "20px" }}>
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-4" />
                    <div className="col-10 col-sm-3">
                        <TextField label="Search" fullWidth style={{ marginTop: "10px", marginBottom: "30px" }}
                            onChange={(event) => { this.setState({ searchValue: event.target.value }) }} />
                    </div>

                    <div className="col-12 col-sm-3">
                        <AddForm />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <Hidden only={['md', 'lg']}>
                            <ExpansionPanelCustomized summary1="Filter" >
                                <Filter DisplayData={this.props.AllProducts} filterProducts={this.filterProducts} />
                            </ExpansionPanelCustomized>
                        </Hidden>
                        <Hidden only={['sm', 'xs']}>
                            <Filter DisplayData={this.props.AllProducts} filterProducts={this.filterProducts} />
                        </Hidden>
                    </div>
                    <div className="col-sm-9 col-11">
                        <div className="row justify-content-around">
                            {element}
                        </div>
                    </div>


                </div>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Are you sure you want to Delete this product
          </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => this.onclose()} color="primary">
                            Cancel
          </Button>
                        <Button onClick={() => this.deleteproduct(this.state.item)} color="primary" autoFocus>
                            Yes
          </Button>
                    </DialogActions>
                </Dialog>

                <Dialog open={this.state.openUpdate} onClose={this.handleClose}>
                    <DialogTitle>Update Product Form</DialogTitle>
                    <DialogContent>
                        <DialogContentText style={{ fontSize: "15px" }}>
                            Please Fill the details of the product to be entered.
                                 * Marked fields are Mandatory
                            </DialogContentText>
                        <UpdateForm Details={this.state.itemUpdate} Length={this.state.Length} Breadth={this.state.Breadth} Height={this.state.Height} close={this.close} />

                    </DialogContent>
                </Dialog>

            </div>

        )

    }
}


function mapStateToProps(state) {
    return {
        AllProducts: state.productAdminView,
        sellerName: state.seller.sellerName,
        id: state.seller.sellerId,
        AdminLogin: state.AdminLogin,
    }
}
function dispatchtoProps(dispatch) {

    return bindActionCreators({ FetchProducts: FetchProducts, signOutSeller, startprogressBar, stopprogressBar, showSnackBar }, dispatch)

}

// export default connect(dispatchtoProps)(AddForm)

export default connect(mapStateToProps, dispatchtoProps)(ViewAllProduct)