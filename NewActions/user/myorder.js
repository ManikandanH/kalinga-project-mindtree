import startprogressBar from '../ProgressBar/startProgressBarAction'
import stopprogressBar from '../ProgressBar/stopProgressBarAction'  
import showSnackBar from '../SnackBar/showSnackBarAction' 

import axios from 'axios';
import {url} from '../../config';
const orders = (myorder,length)=>{
    return{
        type:"MY_ORDER",
        payload:{
            myorder:myorder,
            length:length
        }
    }
}
const order = (uid) =>{
    return dispatch=>{
        dispatch(startprogressBar());
        return axios.post(`${url}/user/myorder`,{
            UID : uid
        }).then((res)=>{
            dispatch(stopprogressBar())
            dispatch(orders(res.data,res.data.length));
        }).catch((err)=>{
            dispatch(stopprogressBar());
            dispatch(showSnackBar({
                message:"Server Error",
                type:"error"
            }))
        })
    }
}

export default order;