import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';


import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import axios from 'axios'
import FetchProducts from '../../Actions/FetchProducts'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as config from '../../config.js'
import signOutSeller from '../../NewActions/Seller/signoutSeller.js'
import startprogressBar from '../../NewActions/ProgressBar/startProgressBarAction.js'
import stopprogressBar from '../../NewActions/ProgressBar/stopProgressBarAction.js'
import showSnackBar from '../../NewActions/SnackBar/showSnackBarAction.js'


const titleExp = /^[a-zA-Z0-9]+[a-zA-Z0-9 ]*$/
const descExp = /^[a-zA-Z0-9]+[a-zA-Z0-9 ,.]*$/
const regex = /^[1-9]\d*(\.\d+)?$/;
const amt = /^[1-9]+[0-9]*$/;

class UpdateForm extends React.Component {

    state = {
        Title: this.props.Details.Title,
        Description: this.props.Details.Description,
        Amount: this.props.Details.amount,
        value: this.props.Details.Category,
        Quantity: this.props.Details.Quantity,
        Colour: this.props.Details.Colour,
        Material: this.props.Details.Material,
        Weight: this.props.Details.Weight,
        image: this.props.Details.Image,
        Length: this.props.Length,
        Breadth: this.props.Breadth,
        Height: this.props.Height,
        Dimension: this.props.Details.Dimension,
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
    }

    handleClose = () => {
        this.props.close(false);
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
            this.setState({
                errorLength: false,
                Dimension: event.target.value +" X "+this.state.Breadth + " X " + this.state.Height
            });
        }
        else {
            this.setState({ errorLength: true });
        }

    };
    handleChangeBreadth = event => {
        this.setState({ Breadth: event.target.value });
        if (((event.target.value).match(regex)) && ((event.target.value).length <= 20)) {
            this.setState({
                errorBreadth: false,
                Dimension: this.state.Length + " X " + event.target.value +" X " + this.state.Height
            });
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


    Updateproduct = () => {

        if ((this.state.Title) === '' || (this.state.Description) === '' || (this.state.Amount) === '' || (this.state.Colour) === '' ||
            (this.state.Material) === '' || (this.state.Weight) === '' || (this.state.Lenght) === '' ||
            (this.state.Breadth) === '' || (this.state.Height) === '') {

            this.props.close(true);
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
                let isAdmin = false;
                let SellerId = "admin"

                if (this.props.AdminLogin.isadmin)
                    isAdmin = true;
                else
                    SellerId = this.props.id;


                axios.put(`${config.url}/admin/updateproduct`, {
                    Title: this.state.Title, Description: this.state.Description, Amount: this.state.Amount,
                    Category: this.state.value, Colour: this.state.Colour, Material: this.state.Material,
                    Image: this.state.image, Weight: this.state.Weight, Dimension: this.state.Dimension,
                    Quantity: this.state.Quantity, id: this.props.Details._id, isAdmin,sellerId:SellerId
                })
                    .then(response => {

                        this.props.FetchProducts(this.props.sellerName, this.props.id);
                        this.props.stopprogressBar();
                        this.props.close(false);
                        this.props.showSnackBar({
                            message: "Product Successfully Updated",
                            type: "success"
                        })

                    })
                    .catch(err => {

                        if (err.response && err.response.data === "seller") {
                            this.props.stopprogressBar();
                            this.props.close(true);
                            this.props.signOutSeller();
                            this.props.showSnackBar({
                                message: "Your have been deleted",
                                type: "error"
                            })
                        }
                        else {
                            this.props.stopprogressBar();
                            this.props.close(true);

                            this.props.showSnackBar({
                                message: "Network Error",
                                type: "error"
                            })
                        }
                    })
            }
            else {
                this.props.close(true);
                this.props.showSnackBar({
                    message: "OOPS!looks like the details are not correct",
                    type: "error"
                })
            }
        }
    }

    render() {
        return (
            <div>
                <TextField error={this.state.errorTitle} value={this.state.Title} autoFocus margin="dense" id="Title" style={{ fontSize: "25px" }} label="Product Title (Max 20 characters) *" type="text" fullWidth onChange={this.handleChangeTitle} />
                <TextField error={this.state.errorDesc} value={this.state.Description} multiline margin="dense" id="" label="Description (Min 10 characters) *" type="textarea" fullWidth={true} onChange={this.handleChangeDescription} />
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
                            <FormControlLabel value="Beds" control={<Radio color="primary" />} label="Beds" />
                            <FormControlLabel value="Tables" control={<Radio color="primary" />} label="Tables" />
                            <FormControlLabel value="Dressing Table" control={<Radio color="primary" />} label="Dressing Table" />
                            <FormControlLabel value="Chairs" control={<Radio color="primary" />} label="Chairs" />
                        </RadioGroup>
                    </FormControl>
                </div>

                <TextField error={this.state.errorQuantity} value={this.state.Quantity} margin="dense" id="" label="Quantity *" type="text" fullWidth={true} onChange={this.handleChangeQuantity} />
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
                <TextField error={this.state.errorMaterial} value={this.state.Material} margin="dense" id="" label="Material (Max 20 characters) *" type="text" fullWidth={true} onChange={this.handleChangeMaterial} />
                <TextField error={this.state.errorWeight} value={this.state.Weight} margin="dense" id="" label="Weight in Kg (Eg: 2.00) *" type="text" fullWidth={true} onChange={this.handleChangeWeight} />
                <TextField error={this.state.errorLenght} value={this.state.Length} margin="dense" id="" label="Length in cm (Eg: 2.00) *" type="text" fullWidth={true} onChange={this.handleChangeLength} />
                <TextField error={this.state.errorBreadth} value={this.state.Breadth} margin="dense" id="" label="Breadth in cm (Eg: 2.00) *" type="text" fullWidth={true} onChange={this.handleChangeBreadth} />
                <TextField error={this.state.errorHeight} value={this.state.Height} margin="dense" id="" label="Height in cm (Eg: 2.00) *" type="text" fullWidth={true} onChange={this.handleChangeHeight} />

                <div>
                    <Button onClick={() => this.handleClose()} color="primary" style={{ marginTop: "40px" }}>
                        Cancel
          </Button>
                    <Button onClick={() => this.Updateproduct()} color="primary" style={{ marginTop: "40px" }}>
                        Update
          </Button>
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
        sellerName: state.seller.sellerName,
        id: state.seller.sellerId
    }
}
function matchdispatch(dispatch) {

    return bindActionCreators({ FetchProducts: FetchProducts, signOutSeller, startprogressBar, stopprogressBar, showSnackBar }, dispatch)

}

export default connect(stateToProps, matchdispatch)(UpdateForm)