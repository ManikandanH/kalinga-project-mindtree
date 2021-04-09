import React from 'react';
import { Tabs, Tab, AppBar } from '@material-ui/core/';
import SellerProducts from './sellerProducts/Products.js'
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import signoutSeller from '../../NewActions/Seller/signoutSeller.js'
import axios from 'axios'

class Seller extends React.Component{


    componentWillMount = () =>{
       axios.defaults.headers.common['Authorization'] = 'bearer ' + this.props.seller.token;
       }

       
    
    constructor(props)
    {
        super();
        this.state={
            products:true,
            logout:false,
            value:0
        }
    }
    sellerProducts = () =>{
        this.setState({
            products:true
        })
    }
    render()
    {
        return(
            <div> 
                <AppBar position="static" color="inherit" style={{marginTop:"60px"}}>
                        <Tabs value={this.state.value} >
                            <Tab label="Products" onClick={this.sellerProducts} />
                            
                       </Tabs>
                    </AppBar>
                    {this.props.seller.isseller===false?<Redirect to='/'/>:null}
                    {this.state.products===true?<SellerProducts/>:null}
                    <div style={{marginTop:"400px"}}>
                    </div>
            </div>
        )
    }

}
function mapstatetoprops(state) 
{
    return {
        seller:state.seller
    }
}
function mapdispatchtoprops(dispatch) {
    return bindActionCreators({signoutSeller},dispatch);
}
export default connect(mapstatetoprops,mapdispatchtoprops)(Seller)