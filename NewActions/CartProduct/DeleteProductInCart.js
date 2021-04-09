import startprogressBar from '../ProgressBar/startProgressBarAction'
import stopprogressBar from '../ProgressBar/stopProgressBarAction'
import showSnackBar from '../SnackBar/showSnackBarAction'
import cartProduct from '../../NewActions/CartProduct/CartProduct'


import axios from 'axios';
import {url} from '../../config';

const DeleteCartProduct=(productid,uid,name)=>{
    return dispatch => {
        dispatch(startprogressBar());
        return axios.post(`${url}/user/deletecartproduct`,{
            productId : productid,
            Uid : uid
        }).then((data)=>{
            dispatch(stopprogressBar());
            dispatch(cartProduct(uid));
            dispatch({type:"USER_REMOVED_ORDER"})
            
            dispatch(showSnackBar({
                    message:"Your Product has been deleted from the cart",
                    type:"success"
            }))
        }).catch((err)=>{
            dispatch(stopprogressBar());
            dispatch(showSnackBar({
                message:"server error",
                type:"error"
            }))
        })
    }
}

export default DeleteCartProduct;