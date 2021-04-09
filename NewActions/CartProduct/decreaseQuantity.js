
import startprogressBar from '../ProgressBar/startProgressBarAction'
import stopprogressBar from '../ProgressBar/stopProgressBarAction'
import showSnackBar from '../SnackBar/showSnackBarAction'

import axios from 'axios';
import {url}  from '../../config';


const decrease = (productId,quantity,price,uid)=>{
    return dispatch =>{
        dispatch(startprogressBar());
      return axios.post(`${url}/user/decrease`,{
          productId:productId,
          Quantity:quantity,
          price:price,
          Uid: uid
      }).then(res=>{
          dispatch(stopprogressBar());
          if(res.data==="Error")
            {
                dispatch(showSnackBar({
                    message:"It should be atleast one",
                    type:"warning"
                }))
            }
            else
                {
          dispatch({type:"DECREASE_QUANTITY",payload:{productid:productId}})
                }
      }).catch((err)=>{
        dispatch(showSnackBar({
            message:"Server Error",
            type:"error"
        }))
      })
    }
}
export default decrease;