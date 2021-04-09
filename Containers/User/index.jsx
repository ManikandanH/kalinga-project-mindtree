import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavigationBar from './NavigationBar/';
import UserHome from './UserHome/index.jsx';
import SearchCategoryContainer from '../User/SearchCategoryContainer'
import Cart from './UserHome/Cart'
import Order from './UserHome/Order'
import Category from '../User/SearchResults/index.js'
import Product from '../User/product/index.js';
import SignUp from '../User/Register/index';
import Profile from '../User/Profile/profile';
import MyOrder from '../User/MyOrder/MyOrder';
import { connect } from 'react-redux'
import SellerSignUp from '../Seller/SellerSignUp'
import CategorySearch from '../../NewActions/CategorySearch/CategorySearch.js'
import IndividualProducts from '../../NewActions/IndividualProduct/individualProduct.js'
import showSnackBar from '../../NewActions/SnackBar/showSnackBarAction.js'
import startprogressBar from '../../NewActions/ProgressBar/startProgressBarAction.js'
import stopprogressBar from '../../NewActions/ProgressBar/stopProgressBarAction.js'
import { bindActionCreators } from 'redux';
import searchResults from '../../NewActions/SearchProducts/searchResults.js'
import {fetchDetailsBackend} from '../../NewActions/user/signIn.js'
import cartProduct from '../../NewActions/CartProduct/CartProduct.js'
import DeleteCartProduct from '../../NewActions/CartProduct/DeleteProductInCart'
import purchasedProduct from '../../NewActions/CartProduct/PurchasedProduct'
import increase from '../../NewActions/CartProduct/Quantity'
import decrease from '../../NewActions/CartProduct/decreaseQuantity.js'
import UpdateAddress from '../../NewActions/CartProduct/UpdateAddress'


class User extends Component {

    snackBar = (message, type) => {
        this.props.showSnackBar({
            message: message,
            type: type
        })
    }
   componentWillMount = () => {
       if(this.props.signedIn.isuser === true) 
        {
            this.props.startprogressBar();
            this.props.fetchDetailsBackend(this.props.signedIn.uid)
            this.props.stopprogressBar();
        }
    
   }
    render() {
        return (
            <div>
                <NavigationBar />

                <Switch>

                    <Route path='/signup' component={SignUp} />
                    <Route path="/SearchResults" render={() => {
                        return <Category result={this.props.result}
                            startingState={this.props.startingState}
                            SearchReterivals={this.props.IndividualProducts}
                            showSnackBar={this.snackBar}
                            searchResults={this.props.searchResults}
                        />
                    }} />
                    <Route path='/cart' render={() => {
                        if (this.props.signedIn.isuser)
                            return <Cart cartInfo={this.props.cart}
                                cartTotal={this.props.totalprice}
                                cartLength={this.props.cartlength}
                                cartUser={this.props.signedIn}
                                user={this.props.details.Address}
                                cartproduct={this.props.cartProduct}
                                deleteproduct={this.props.DeleteCartProduct}
                                purchaseproduct={this.props.purchasedProduct}
                                increaseQuantity={this.props.increase}
                                decreaseQuantity={this.props.decrease}
                                showSnackBar={this.snackBar} />
                        else
                            return <Redirect to='/' />
                    }} />
                    <Route path='/order' render={() => {
                        return <Order 
                            purchasedInfo={this.props.purchase}
                            delivery={this.props.delivery}
                            search={this.props.search}
                            purchaseUser={this.props.details}
                            purchasePrice={this.props.price}
                            user={this.props.signedIn}
                            updatePurchase={this.props.UpdateAddress}
                        />
                    }} />
                    <Route path='/profile' component={Profile} />
                    <Route path='/myorder' render={() => {
                        return <MyOrder orderInfo={this.props.order}
                            orderLength={this.props.orderlength}
                            orderUser={this.props.details}
                            user={this.props.signedIn} />
                    }} />
                    <Route path='/profile' component={Profile} />
                    <Route path='/category' render={() => {
                        return <SearchCategoryContainer CategoryProducts={this.props.CategoryProducts}
                            CategorySearch={this.props.CategorySearch}
                            SearchReterivals={this.props.IndividualProducts}
                            stopprogressBar={this.props.stopprogressBar}
                            startprogressBar={this.props.startprogressBar}
                            showSnackBar={this.snackBar}
                        />
                    }} />
                    <Route path='/product' component={Product} />
                    <Route path='/sellersignup' component={SellerSignUp} />
                    <Route path='/' component={UserHome} />
                </Switch>

            </div>
        )
    }
}

function mapstatetoprops(state) {
    return {
        signedIn: state.Sign,
        CategoryProducts: state.CategorySearchResults,
        result: state.SearchProduct.searchResults,
        startingState: state.SearchProduct,
        initial: state.SearchProduct,
        cart: state.cartDetails.Product,
        totalprice: state.cartDetails.Price,
        cartlength: state.cartDetails.Length,
        purchase: state.purchasedProduct.PurchasedProduct,
        delivery:state.purchasedProduct.DeliveryAddress,
        details: state.Sign.details,
        search:state.purchasedProduct.searchInitiated,
        price: state.purchasedProduct.price,
        order: state.myorder.myOrders,
        orderlength: state.myorder.orderLength,
    }
}
function mapdispatchtoprops(dispatch) {
    return bindActionCreators(
        {
            CategorySearch,fetchDetailsBackend , IndividualProducts, searchResults, showSnackBar, cartProduct, UpdateAddress, purchasedProduct, decrease, increase, DeleteCartProduct, startprogressBar, stopprogressBar
        }, dispatch)
}




export default connect(mapstatetoprops, mapdispatchtoprops)(User)
