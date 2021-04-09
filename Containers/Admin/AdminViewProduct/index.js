import React, { Component } from 'react';
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import axios from 'axios';
import { bindActionCreators } from 'redux'
import FetchProducts from '../../../Actions/FetchProducts';
import * as config from '../../../config'
import startprogressBar from '../../../NewActions/ProgressBar/startProgressBarAction'
import stopprogressBar from '../../../NewActions/ProgressBar/stopProgressBarAction'
import showSnackBar from '../../../NewActions/SnackBar/showSnackBarAction'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Filter from '../../../Components/Filter/filter.jsx'
import UpdateForm from '../../../Components/Updateform/UpdateForm.jsx'
import Noresult from '../../../assests/no_result.png'
import signOutSeller from '../../../NewActions/Seller/signoutSeller'

class ViewAllProduct extends Component {
    constructor(props) {
        super();
        this.state = {
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
        let isAdmin=false;
        let SellerId="admin"
        if(this.props.AdminLogin.isadmin)
            isAdmin=true;
        else
            SellerId=this.props.id;

        axios.post(`${config.url}/admin/deleteproduct`, {
            product: ProductID,
            isAdmin,
            sellerId:SellerId
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
                if(err.response && err.response.data==="seller")
                            {
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
            element = this.state.produtsToDisplay.map(item =>
                <div className="col-12 col-sm-6 col-md-4">
                    <Card style={{ height: "520px", width: "100%", marginBottom: "30px", marginRight:"30px" }}>
                        <CardMedia image={item.Image} alt="product" style={{ height: "150px", width: "100%" }} ></CardMedia><CardContent>
                            <Typography gutterBottom variant="headline" component="h2" >
                                <h3>{item.Title}<br /></h3><hr />
                                {item.amount}<br /><hr />{item.Category}
                                <br /><hr />
                                <h6 style={{ color: "silver" }}>
                                    SellerName:<h4 style={{ color: "black", marginLeft: "33px" }}>{item.SellerId}</h4></h6>
                                <hr />
                            </Typography></CardContent>
                        <CardActions>
                            <Button size="large" color="primary" onClick={() => this.OpenDialogueBox(item)}>
                                Delete
                        </Button>
                            <Button size="large" color="primary" onClick={() => this.OpenUpdateBox(item)}>
                                Update
                        </Button>
                        </CardActions>
                    </Card>
                </div>)
        }
        else {
            element = <div className="col-sm-12" style={{ marginLeft: "auto", marginRight: "auto", marginTop: "100px" }}>
                <center style={{ marginBottom: '310px' }}><img alt="noresult" src={Noresult} />
                    <div><strong style={{ fontSize: "26px", color: "silver" }}>Sorry, No Products Available</strong></div></center>

            </div>
        }
        return (

            <div>
                {<div className="row">
                    <div className="col-sm-3">
                        <Filter DisplayData={this.props.AllProducts} filterProducts={this.filterProducts} />
                    </div>
                    <div className="col-sm-9">
                        <div className="row justify-content-around">
                            {element}
                        </div>
                    </div>


                </div>}
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

    return bindActionCreators({ FetchProducts: FetchProducts,signOutSeller, startprogressBar, stopprogressBar, showSnackBar }, dispatch)

}

// export default connect(dispatchtoProps)(AddForm)

export default connect(mapStateToProps, dispatchtoProps)(ViewAllProduct)