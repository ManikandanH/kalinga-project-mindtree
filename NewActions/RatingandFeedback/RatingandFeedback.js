import { RATING_RETRIEVED } from '../index';

import axios from 'axios';
import { url } from '../../config'
import startprogressBar from '../ProgressBar/startProgressBarAction'
import stopprogressBar from '../ProgressBar/stopProgressBarAction'
import showSnackBar from '../../NewActions/SnackBar/showSnackBarAction'



const searchCategoryResult = (data) => {
    return {
        type: RATING_RETRIEVED,
        payload: {
            categoryResults: data
        }
    }
}



const searchCategory = (pid,name,rating,feedback,uid) => {

    return dispatch => {
        dispatch(startprogressBar());

        return (axios.post(`${url}/user/giverating`, {
            Productid:pid,Name:name,Rating:rating,FeedbackText:feedback,Userid:uid
        })
            .then(res => {
                dispatch(stopprogressBar());
                dispatch(searchCategoryResult(res.data))
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

export default searchCategory;