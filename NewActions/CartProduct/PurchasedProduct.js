import {PURCHASED_PRODUCT} from '../index'

import startprogressBar from '../ProgressBar/startProgressBarAction'
import stopprogressBar from '../ProgressBar/stopProgressBarAction'
import showSnackBar from '../SnackBar/showSnackBarAction'

import axios from 'axios';
import {url} from '../../config';

const purchsedproduct = (product)=>{
    return{
        type: PURCHASED_PRODUCT,
        payload:{
            Product:product.purchased,
            User:product.user,
            DeliveryAddress:product.purchased.DeliveryAddress
        }
    }
}

const purchasedProduct = (cartinfo,carttotal,uid,name,address)=>{
    
    return dispatch=>{
        dispatch(startprogressBar());
        return axios.post(`${url}/user/purchase`,{
            productDetails: cartinfo,
            totalprice: carttotal,
            Uid: uid,
            length: cartinfo.length,
            address:address
        }).then((res) => {
            dispatch(purchsedproduct(res.data))
            dispatch({type:"USER_PLACED_ORDER"})
            dispatch(stopprogressBar());
        }).catch((err) => {
            dispatch(showSnackBar({
                message: "Server error",
                type: "error"
            }))
        })
    }

}
export default purchasedProduct;
