import startprogressBar from '../ProgressBar/startProgressBarAction'
import stopprogressBar from '../ProgressBar/stopProgressBarAction'
import showSnackBar from '../SnackBar/showSnackBarAction'

import axios from 'axios';
import {url}  from '../../config';

const increase = (productId,quantity,price,uid)=>{
    return dispatch =>{
        dispatch(startprogressBar());
      return axios.post(`${url}/user/increase`,{
          productId:productId,
          Quantity:quantity,
          price:price,
          Uid: uid
      }).then(res=>{
          dispatch(stopprogressBar());
          if(res.data==="Error")
            {
                dispatch(showSnackBar({
                    message:"Current quantity is not available",
                    type:"warning"
                }))
            }
            else
                {
                    
        dispatch({type:"INCREASE_QUANTITY",payload:{productid:productId}})
                }
      }).catch((err)=>{
         dispatch(showSnackBar({
             message:"server Error",
             type:"error"
         }))
      })
    }
}
export default increase;
