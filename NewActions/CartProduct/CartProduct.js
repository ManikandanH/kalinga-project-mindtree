import {CART_PRODUCT} from '../index';

import startprogressBar from '../ProgressBar/startProgressBarAction'
import stopprogressBar from '../ProgressBar/stopProgressBarAction'
import showSnackBar from '../SnackBar/showSnackBarAction'

import axios from 'axios';
import {url}  from '../../config';

const cartproduct = (length,cart,price)=>{
    var sum;
    if(cart === undefined){
        sum=0;
    }else{
        sum=0;
        for(var i=0;i<price.length;i++){
            sum = sum + (price[i].amount*price[i].Quantity);
        }
    }
    return {
        type  : CART_PRODUCT,
        payload : {
            length:length,
            totalprice:sum,
            product:cart
        }
    }
}
const CartProduct = (data)=>{
    return dispatch=>{
        dispatch(startprogressBar());
        return axios.post(`${url}/user/cartpage`,{
            UID:data
        }).then(res=>{
            dispatch(stopprogressBar())
            for(var i=0;i<res.data.Products.length;i++)
                {
            res.data.Products[i].Quantity=res.data.Cart[i].Quantity
                }
            dispatch(cartproduct(res.data.Products.length,res.data.Products,res.data.Products))
        }).catch((err) => {
            dispatch(stopprogressBar())
            dispatch(showSnackBar({
                message:"Server Error",
                type:"error"
            }))
        }) 
    }
}
export default CartProduct;
