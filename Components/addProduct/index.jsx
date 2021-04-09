import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import DialogActions from '@material-ui/core/DialogActions';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import axios from 'axios'
import './addProduct.css'
import FetchProducts from '../../Actions/FetchProducts'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as config from '../../config.js'
import startprogressBar from '../../NewActions/ProgressBar/startProgressBarAction.js'
import stopprogressBar from '../../NewActions/ProgressBar/stopProgressBarAction.js'
import showSnackBar from '../../NewActions/SnackBar/showSnackBarAction.js'
import signOutSeller from '../../NewActions/Seller/signoutSeller.js'

const titleExp = /^[a-zA-Z0-9]+[a-zA-Z0-9 ]*$/
const descExp = /^[a-zA-Z0-9]+[a-zA-Z0-9 ,.]*$/
const regex = /^[1-9]\d*(\.\d+)?$/;
const amt = /^[1-9]+[0-9]*$/;
var sellerid;

class AddForm extends React.Component {

    state = {
        open: false,
        Title: '',
        Description: '',
        Amount: '',
        value: 'Sofa',
        Quantity: '',
        Colour: '',
        Material: '',
        Weight: '',
        Length: '',
        image: 'https://firebasestorage.googleapis.com/v0/b/book-my-furniture.appspot.com/o/sofa2.jpeg?alt=media&token=adf6c9a5-c3ec-4e83-83e4-2c5fcd04bf1d',
        Breadth: '',
        Height: '',
        Dimension: '',
        errorTitle: false,
        errorDesc: false,
        errorAmt: false,
        errorColour: false,
        errorMaterial: false,
        errorWeight: false,
        errorLenght: false,
        errorBreadth: false,
        errorHeight: false,
        errorQuantity: false
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    CloseError = () => {
        this.setState({ openError: false });
    };

    handleChangeTitle = event => {
        this.setState({ Title: event.target.value });
        if (((titleExp).test(event.target.value)) && ((event.target.value).length <= 20)) {
            this.setState({ errorTitle: false });
        }
        else {
            this.setState({ errorTitle: true });
        }

    };
    handleChangeDescription = event => {
        this.setState({ Description: event.target.value });
        if (((descExp).test(event.target.value)) && ((event.target.value).length >= 10)) {
            this.setState({ errorDesc: false });
        }
        else {
            this.setState({ errorDesc: true });
        }

    };
    handleChangeamount = event => {
        this.setState({ Amount: event.target.value });
        if (((regex).test(event.target.value)) && ((event.target.value).length <= 20)) {
            this.setState({ errorAmt: false });
        }
        else {
            this.setState({ errorAmt: true });
        }

    };
    handleChangeProduct = event => {
        this.setState({ value: event.target.value });
        if ((event.target.value) === 'Sofa') {
            this.setState({ image: 'https://firebasestorage.googleapis.com/v0/b/book-my-furniture.appspot.com/o/sofa2.jpeg?alt=media&token=adf6c9a5-c3ec-4e83-83e4-2c5fcd04bf1d' });
        }
        else if ((event.target.value) === 'Beds') {
            this.setState({ image: 'https://firebasestorage.googleapis.com/v0/b/book-my-furniture.appspot.com/o/bed20.jpg?alt=media&token=8d20da15-5c6b-44dc-8afb-e2f0d824d129' });
        }
        else if ((event.target.value) === 'Tables') {
            this.setState({ image: 'https://firebasestorage.googleapis.com/v0/b/book-my-furniture.appspot.com/o/table1.jpg?alt=media&token=c2c041ad-cad1-4950-8fd0-5447d8934371' })
        }
        else if ((event.target.value) === 'Dressing Table') {

            this.setState({ image: 'https://firebasestorage.googleapis.com/v0/b/book-my-furniture.appspot.com/o/dressingtable1.jpeg?alt=media&token=e51d1f5d-5da4-4559-9a0d-f080dc4a7fc6' })
        }
        else if ((event.target.value) === 'Chairs') {
            this.setState({ image: 'https://firebasestorage.googleapis.com/v0/b/book-my-furniture.appspot.com/o/chair1.jpeg?alt=media&token=7662c79e-b1df-4a31-9d25-2447f5a89f8a' })
        }
    };


    handleChangeQuantity = event => {
        this.setState({ Quantity: event.target.value });
        if (((amt).test(event.target.value)) && ((event.target.value).length <= 2)) {
            this.setState({ errorQuantity: false });
        }
        else {
            this.setState({ errorQuantity: true });
        }

    };
    handleChangeColour = event => {
        this.setState({ Colour: event.target.value });
        if (((titleExp).test(event.target.value)) && ((event.target.value).length <= 20)) {
            this.setState({ errorColour: false });
        }
        else {
            this.setState({ errorColour: true });
        }

    };
    handleChangeMaterial = event => {
        this.setState({ Material: event.target.value });
        if (((titleExp).test(event.target.value)) && ((event.target.value).length <= 20)) {
            this.setState({ errorMaterial: false });
        }
        else {
            this.setState({ errorMaterial: true });
        }

    };
    handleChangeWeight = event => {
        this.setState({ Weight: event.target.value });
        if (((event.target.value).match(regex)) && ((event.target.value).length <= 20)) {
            this.setState({ errorWeight: false });
        }
        else {
            this.setState({ errorWeight: true });
        }

    };
    handleChangeLength = event => {
        this.setState({ Length: event.target.value });
        if (((event.target.value).match(regex)) && ((event.target.value).length <= 20)) {
            this.setState({ errorLenght: false });
        }
        else {
            this.setState({ errorLenght: true });
        }

    };
    handleChangeBreadth = event => {
        this.setState({ Breadth: event.target.value });
        if (((event.target.value).match(regex)) && ((event.target.value).length <= 20)) {
            this.setState({ errorBreadth: false });
        }
        else {
            this.setState({ errorBreadth: true });
        }

    };
    handleChangeHeight = event => {
        this.setState({ Height: event.target.value });
        if (((event.target.value).match(regex)) && ((event.target.value).length <= 20)) {
            this.setState({
                errorHeight: false,
                Dimension: this.state.Length + " X " + this.state.Breadth + " X " + event.target.value
            });
        }
        else {
            this.setState({ errorHeight: true });
        }
    };


    addproduct = () => {
        var value = sessionStorage.getItem('sellertoken');
        var obj = JSON.parse(value);
        let url;
        var sellerName;
        if (this.props.AdminLogin.isadmin === true) {
            url = `${config.url}/admin/addproduct`
            sellerid = "admin"

        }
        else {
            url = `${config.url}/seller/addproduct`
            sellerid = obj.sellerId;
            sellerName = obj.sellerName;

        }
        if ((this.state.Title) === '' || (this.state.Description) === '' || (this.state.Amount) === '' || (this.state.Colour) === '' ||
            (this.state.Material) === '' || (this.state.Weight) === '' || (this.state.Lenght) === '' ||
            (this.state.Breadth) === '' || (this.state.Height) === '') {
            this.setState({
                open: true,
            })
            this.props.showSnackBar({
                message: "You must fill all mandatory fields",
                type: "error"
            })

        }
        else {
            if ((this.state.errorTitle) === false && (this.state.errorDesc) === false && (this.state.errorAmt) === false && (this.state.errorColour) === false &&
                (this.state.errorMaterial) === false && (this.state.errorWeight) === false && (this.state.errorLenght) === false &&
                (this.state.errorBreadth) === false && (this.state.errorHeight) === false && (this.state.errorQuantity) === false) {
                this.props.startprogressBar();
                axios.post(`${url}`, {
                    Title: this.state.Title, Description: this.state.Description, Amount: this.state.Amount,
                    Category: this.state.value, Colour: this.state.Colour, Material: this.state.Material,
                    Weight: this.state.Weight, Dimension: this.state.Dimension, Image: this.state.image,
                    sellerId: sellerid, Quantity: this.state.Quantity, sellername: sellerName
                })
                    .then(response => {
                     if(response.data === "Dont add")
                        {
                            this.props.stopprogressBar();
                            this.props.showSnackBar({
                                message:"This product is already there",
                                type:"warning"
                            })
                        }
                        else
                            {
                        this.setState({
                            open: false, Title: '',
                            Description: '',
                            Amount: '',
                            value: 'Sofa',
                            Colour: '',
                            Material: '',
                            Weight: '',
                            Length: '',
                            Breadth: '',
                            Height: '',
                            Quantity: '',
                            image: 'https://firebasestorage.googleapis.com/v0/b/book-my-furniture.appspot.com/o/sofa2.jpeg?alt=media&token=adf6c9a5-c3ec-4e83-83e4-2c5fcd04bf1d',
                            errorTitle: false,
                            errorDesc: false,
                            errorAmt: false,
                            errorColour: false,
                            errorMaterial: false,
                            errorWeight: false,
                            errorLenght: false,
                            errorBreadth: false,
                            errorHeight: false,
                            errorQuantity: false
                        });
                        this.props.FetchProducts(this.props.SellerName,this.props.id);
                        this.props.stopprogressBar();
                        this.props.showSnackBar({
                            message: "Product Successfully added",
                            type: "success"
                        })
                    }
                    })
                    .catch(err => {
                        this.props.stopprogressBar();
                        this.setState({
                            open: false
                        })
                        if(err.response && err.response.data==="seller")
                            {
                                this.props.signOutSeller();
                            this.props.showSnackBar({
                                message: "You have been deleted",
                                type: "error"
                            })
                        }
                        else{
                        this.props.showSnackBar({
                            message: "Network Error",
                            type: "error"
                        })
                    }
                    })
            }
            else {
                this.setState({
                    open: true
                })
                this.props.showSnackBar({
                    message: "OOPS!looks like the details are not correct",
                    type: "error"
                })
            }
        }
    }




    render() {
        return (
            <div className="container-fluid">
                <div className="buttonposition">
                    <Grid container direction="row" justify="flex-end" alignItems="center">
                        <Grid item>
                            <Button variant="fab" color="primary" aria-label="Add" onClick={this.handleClickOpen}>
                                <AddIcon />
                            </Button> <label>Add Product</label>
                        </Grid>
                    </Grid>

                    <Dialog className="form" open={this.state.open} onClose={this.handleClose}>
                        <DialogTitle>Add Product Form</DialogTitle>
                        <DialogContent>
                            <DialogContentText style={{ fontSize: "15px" }}>
                                Please Fill the details of the product to be entered.
                                 * Marked fields are Mandatory
                            </DialogContentText>
                            <TextField error={this.state.errorTitle} autoFocus margin="dense" id="Title" style={{ fontSize: "25px" }} label="Product Title (Max 20 characters) *" type="text" fullWidth onChange={this.handleChangeTitle} />
                            <TextField error={this.state.errorDesc} multiline margin="dense" id="" label="Description (Min 10 characters) *" type="textarea" fullWidth={true} onChange={this.handleChangeDescription} />

                            <div className="fieldposition">
                                <FormControl fullWidth>
                                    <InputLabel>Amount (Max 20 characters) *</InputLabel>
                                    <Input error={this.state.errorAmt}
                                        id="product price"
                                        value={this.state.Amount}
                                        onChange={this.handleChangeamount}
                                        startAdornment={<InputAdornment position="start">₹</InputAdornment>}
                                    />
                                </FormControl>
                            </div>


                            <div className="fieldposition" >
                                <FormControl component="fieldset">
                                    <FormLabel component="legend">Product Type *</FormLabel>
                                    <RadioGroup
                                        aria-label="Product Type"
                                        name="product"
                                        value={this.state.value}
                                        onChange={this.handleChangeProduct}
                                    >
                                        <FormControlLabel value="Sofa" control={<Radio color="primary" />} label="Sofa" />
                                        <FormControlLabel value="Beds" control={<Radio color="primary" />} label="Bed" />
                                        <FormControlLabel value="Tables" control={<Radio color="primary" />} label="Table" />
                                        <FormControlLabel value="Dressing Table" control={<Radio color="primary" />} label="Dressing Table" />
                                        <FormControlLabel value="Chairs" control={<Radio color="primary" />} label="Chair" />
                                    </RadioGroup>
                                </FormControl>
                            </div>

                            <TextField error={this.state.errorQuantity} margin="dense" id="" label="Quantity (Max 2 characters) *" type="text" fullWidth={true} onChange={this.handleChangeQuantity} />
                            <Select value={this.state.Colour} onChange={this.handleChangeColour} input={<Input name="Colour" id="colour" />}
                                displayEmpty name="Colour" style={{ marginTop: "12px" }}>
                                <MenuItem value="">
                                    <em style={{ color: "gray" }}>Select Colour *</em>
                                </MenuItem>
                                <MenuItem value={"Black"}>Black</MenuItem>
                                <MenuItem value={"White"}>White</MenuItem>
                                <MenuItem value={"Brown"}>Brown</MenuItem>
                                <MenuItem value={"Dark Brown"}>Dark Brown</MenuItem>
                                <MenuItem value={"Wooden"}>Wooden</MenuItem>
                            </Select>
                            <TextField error={this.state.errorMaterial} margin="dense" id="" label="Material (Max 20 characters) *" type="text" fullWidth={true} onChange={this.handleChangeMaterial} />
                            <TextField error={this.state.errorWeight} margin="dense" id="" label="Weight in Kg *" type="text" fullWidth={true} onChange={this.handleChangeWeight} />
                            <TextField error={this.state.errorLenght} margin="dense" id="" label="Length in cm *" type="text" fullWidth={true} onChange={this.handleChangeLength} />
                            <TextField error={this.state.errorBreadth} margin="dense" id="" label="Breadth in cm *" type="text" fullWidth={true} onChange={this.handleChangeBreadth} />
                            <TextField error={this.state.errorHeight} margin="dense" id="" label="Height in cm *" type="text" fullWidth={true} onChange={this.handleChangeHeight} />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleClose} color="primary">
                                Cancel
            </Button>
                            <Button onClick={this.addproduct} color="primary">
                                Add
            </Button>
                        </DialogActions>
                    </Dialog>



                </div>
            </div>
        )
    }
}

function stateToProps(state) {
    return {
        AllProducts: state.productAdminView,
        seller: state.seller,
        AdminLogin: state.AdminLogin,
        sellerName:state.seller.sellerName,
        id:state.seller.sellerId
    }
}
function matchdispatch(dispatch) {

    return bindActionCreators({ FetchProducts: FetchProducts,signOutSeller, startprogressBar, stopprogressBar, showSnackBar }, dispatch)

}

export default connect(stateToProps, matchdispatch)(AddForm)