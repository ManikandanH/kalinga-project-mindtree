import axios from 'axios'
import {url} from '../../config'
import startprogressBar from '../ProgressBar/startProgressBarAction'
import stopprogressBar from '../ProgressBar/stopProgressBarAction'
import showSnackBar from '../SnackBar/showSnackBarAction'
import cartProduct from '../../NewActions/CartProduct/CartProduct'

const addToCart = (user,uid,name) =>{
    
    return dispatch =>{
        dispatch(startprogressBar())
        return axios.post(`${url}/user/Cart`,{
            uid:uid,
            cartDetails:user
        }).then((res) =>{
            dispatch(stopprogressBar());
            dispatch(cartProduct(uid));
            dispatch({type:"ADD_TO_CART"})
    }).catch((data) => {
        dispatch(stopprogressBar());
        dispatch(showSnackBar({
            message:"Network error",
            type:"error"
        }))
    })
    }
} 
export default addToCart;



