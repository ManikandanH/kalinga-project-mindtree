
import {combineReducers} from 'redux';
import result from './searchresult'
import IndividualProduct from '../NewReducers/individualProduct'
import bestProducts from '../NewReducers/bestProducts'
import cartdetail from '../NewReducers/cartPageReducer'
import sellerSign from '../NewReducers/signinseller'
import purchasedproduct from '../NewReducers/purchasedProduct'
import ProductAdminView from './adminViewProduct'
import AdminLogin from './AdminLogIn'
import ViewUser from '../NewReducers/ViewUsersAdmin'
import FinalSearch from '../NewReducers/productsSearchReducer'
import Signin from '../NewReducers/Signin'
import CategorySearchResults from '../NewReducers/categoryNavigateReducer'
import myOrder from '../NewReducers/myOrder'
import progressBarReducer from '../NewReducers/progressBarReducer';
import snackBarReducer from '../NewReducers/snackBarReducer';
import admindashboardReducer from '../NewReducers/admindashboardReducer';
import adminSellerReducer from '../NewReducers/adminSellerReducer'
 const allReducers = combineReducers({
    SearchResults:result,
    snackBarReducer:snackBarReducer,
    progressBarReducer:progressBarReducer,
    SearchProduct:FinalSearch,
    seller:sellerSign,
    Sign:Signin,
    Individual:IndividualProduct,
    cartDetails:cartdetail,
    myorder:myOrder,
    purchasedProduct : purchasedproduct,
    //orderSummary: ordersummary,
    productAdminView:ProductAdminView,
    AdminLogin:AdminLogin,
    ViewUser:ViewUser,
    CategorySearchResults:CategorySearchResults,
    admindashboardReducer:admindashboardReducer,
    adminSellerReducer,
    bestProducts
    
    

})

export default allReducers;
