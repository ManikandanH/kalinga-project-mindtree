import axios from 'axios';
import { url } from '../../config'
import startprogressBar from '../ProgressBar/startProgressBarAction'
import stopprogressBar from '../ProgressBar/stopProgressBarAction'
import showSnackBar from '../SnackBar/showSnackBarAction'
import * as actionTypes from '../index'

const deleteUserSuccessful = (uid) => {
    return {
        type: actionTypes.ADMIN_DELETE_USER,
        payload: {
            uid
        }
    }
}



const deleteUser = (uid) => {

    return dispatch => {
        dispatch(startprogressBar());
        return (axios.post(`${url}/admin/deleteuser`, { uid })
            .then(res => {
                dispatch(stopprogressBar());
                dispatch(deleteUserSuccessful(uid))
            }))
            .catch((err) => {
                dispatch(stopprogressBar());
                dispatch(showSnackBar({
                    message: "An Error has occured",
                    type: "warning"
                }))
            })
    }
}

export default deleteUser;