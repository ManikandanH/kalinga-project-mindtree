//import {UPDATE_ADDRESS} from '../index'

//import startprogressBar from '../ProgressBar/startProgressBarAction'
//import stopprogressBar from '../ProgressBar/stopProgressBarAction'
import showSnackBar from '../SnackBar/showSnackBarAction'

import axios from 'axios';
import {url} from '../../config';

const UpdateAddress = (details,orderid) =>{
    return dispatch => {
        return axios.post(`${url}/user/updateAddress`,{
            DeliveryAddress : details,
            OrderId:orderid
        }).then((res)=>{
        }).catch((err)=>{
            dispatch(showSnackBar({
                message: "Server error",
                type: "error"
            }))
        })
    }
}
export default UpdateAddress;