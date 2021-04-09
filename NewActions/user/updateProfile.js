import axios from 'axios';
import * as actionTypes from '../index'
import startprogressBar from '../ProgressBar/startProgressBarAction'
import stopprogressBar from '../ProgressBar/stopProgressBarAction'
import showSnackBar from '../SnackBar/showSnackBarAction'
import history from '../../history';
import * as config from '../../config';

const updateDetailsSuccessfull = (updatedDetails) => {
    return {
            type:actionTypes.UPDATE_PROFILE,
            payload:{
                updatedDetails
            }
    }
}

const updateProfile = (updatedDetails) => {
    return dispatch => {
        dispatch(startprogressBar());
        return axios.post(`${config.url}/user/updateprofile`, updatedDetails)
            .then((res) => {
                dispatch(updateDetailsSuccessfull(updatedDetails));
                dispatch(showSnackBar({message:"Successfully Updated",type:"success"}));
                dispatch(stopprogressBar());
                history.goBack();
              //  history.goForward();
                
            })
            .catch(err => {
                dispatch(showSnackBar({message:"Error while updating",type:"error"}))
                dispatch(stopprogressBar());
                
            })

    }

}

export default updateProfile;
