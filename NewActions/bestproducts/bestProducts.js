import {url} from '../../config'
import axios from 'axios';
import startprogressBar from '../ProgressBar/startProgressBarAction';
import stopprogressBar from '../ProgressBar/stopProgressBarAction';
import showSnackBar from '../SnackBar/showSnackBarAction'
import {BEST_PRODUCTS}  from '../index'

const bestProduct = (data) => {
    return {
        type: BEST_PRODUCTS,
        payload:data
       
    }
}


const bestProducts = () => {

    return dispatch => {
        dispatch(startprogressBar());

        return (axios.get(`${url}/bestproducts`)
            .then(res => {
                
                dispatch(bestProduct(res.data))
                dispatch(stopprogressBar());
            })
            .catch((err)=>{
                dispatch(stopprogressBar());
                dispatch(showSnackBar({
                    message:"Error has occured",
                    type:"warning"
                }))
            }))
    }
}

export default bestProducts