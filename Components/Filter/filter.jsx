import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import showSnackBar from '../../NewActions/SnackBar/showSnackBarAction.js'
import './jilter.css'

class Filter extends Component {

    state = {
        value: 'High to Low',
        valueColour: 'All Products'
    };

    handleChangePrice = event => {
        this.setState({ value: event.target.value });

    };
    handleChangeColour = event => {
        this.setState({ valueColour: event.target.value });

    };
    
    render() {
        var Results = this.props.DisplayData;
        var length = Results.length;
        if ((this.state.value) === 'Low to High') {
            for (var i = 0; i < length; i++) {
                for (var j = 0; j < (length - i - 1); j++) {

                    if (Results[j].amount > Results[j + 1].amount) {
                        var tmp = Results[j];
                        Results[j] = Results[j + 1];
                        Results[j + 1] = tmp;
                    }
                }
            }
            
            var FilterResults=[];
            i=0;j=0;
            if((this.state.valueColour)==='Black')
                { 
                    FilterResults = Results.filter(result => result.Colour === "Black");
                    this.props.filterProducts(FilterResults);
                }
                if((this.state.valueColour)==='Brown')
                    {
                        FilterResults = Results.filter(result => result.Colour === "Brown");
                        this.props.filterProducts(FilterResults);
                    }
                    if(this.state.valueColour==="White")
                        {
                            FilterResults = Results.filter(result => result.Colour === "White");
                            if(FilterResults.length===0){
                                }
                                else{
                            this.props.filterProducts(FilterResults);}
                        }
                        if(this.state.valueColour==="Dark Brown")
                            {
                                FilterResults = Results.filter(result => result.Colour === "Dark Brown");
                                this.props.filterProducts(FilterResults);
                            }
                            if(this.state.valueColour==="Wooden")
                                {
                                    FilterResults = Results.filter(result => result.Colour === "Wooden");
                                    this.props.filterProducts(FilterResults);
                                }
           else if(this.state.valueColour==='All Products')
            this.props.filterProducts(Results);
           


        }
        else if ((this.state.value) === 'High to Low') {
            for (let i = 0; i < length; i++) {
                for (let j = 0; j < (length - i - 1); j++) {

                    if (Results[j].amount < Results[j + 1].amount) {
                        let tmp = Results[j];
                        Results[j] = Results[j + 1];
                        Results[j + 1] = tmp;
                    }
                }
            }

            let FilterResults=[];
            if((this.state.valueColour)==='Black')
                { 
                    FilterResults = Results.filter(result => result.Colour === "Black");
                    this.props.filterProducts(FilterResults);
                }
                if((this.state.valueColour)==='Brown')
                    {
                        FilterResults = Results.filter(result => result.Colour === "Brown");
                        this.props.filterProducts(FilterResults);
                    }
                    if(this.state.valueColour==="White")
                        {
                            FilterResults = Results.filter(result => result.Colour === "White");
                            this.props.filterProducts(FilterResults);
                        }
                        if(this.state.valueColour==="Dark Brown")
                            {
                                FilterResults = Results.filter(result => result.Colour === "Dark Brown");
                                this.props.filterProducts(FilterResults);
                            }
                            if(this.state.valueColour==="Wooden")
                                {
                                    FilterResults = Results.filter(result => result.Colour === "Wooden");
                                    this.props.filterProducts(FilterResults);
                                }
                                     else if(this.state.valueColour==='All Products')
                                            this.props.filterProducts(Results);
        }

        return (
            <div>
                <div className="container-fluid">
                    <div className="row background">
                        <div className="col-sm-12">
                            <div className="heading">Filter</div>
                        </div>
                        <div className="col-sm-12 text">
                            <div className="sub-heading"><u>By Price</u></div>
                            <FormControl component="fieldset" >
                                <RadioGroup
                                    aria-label="Product Type"
                                    name="product"
                                    value={this.state.value}
                                    onChange={this.handleChangePrice}
                                >
                                    <FormControlLabel value="High to Low" control={<Radio style={{color:"black"}} color="primary" />} label="High to Low" />
                                    <FormControlLabel value="Low to High" control={<Radio style={{color:"black"}} color="primary" />} label="Low to High" />
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <div className="col-sm-12 text">
                            <div className="sub-heading"><u>By Color</u></div>
                            <FormControl component="fieldset">
                            <RadioGroup
                                aria-label="Product Type"
                                name="product"
                                value={this.state.valueColour}
                                onChange={this.handleChangeColour}
                            >
                               <FormControlLabel value="All Products" control={<Radio style={{color:"black"}} color="primary" />} label="All Colours" />
                                <FormControlLabel value="Black" control={<Radio style={{color:"black"}} color="primary" />} label="Black" />
                                <FormControlLabel value="Brown" control={<Radio style={{color:"black"}} color="primary" />} label="Brown" />
                                <FormControlLabel value="White" control={<Radio style={{color:"black"}} color="primary" />} label="White" />
                                <FormControlLabel value="Dark Brown" control={<Radio style={{color:"black"}} color="primary" />} label="Dark Brown" />
                                <FormControlLabel value="Wooden" control={<Radio style={{color:"black"}} color="primary" />} label="Wooden" />
                            </RadioGroup>
                        </FormControl>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function matchdispatch(dispatch) {
    
        return bindActionCreators({ showSnackBar }, dispatch)
    
    }
    export default connect(null, matchdispatch)(Filter)

