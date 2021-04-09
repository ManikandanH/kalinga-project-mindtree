import axios from 'axios';
import * as actionTypes from '../index'
import startprogressBar from '../ProgressBar/startProgressBarAction'
import stopprogressBar from '../ProgressBar/stopProgressBarAction'
import showSnackBar from '../SnackBar/showSnackBarAction'
import * as config from '../../config'

export const successfulSignIn = (details,totaldetails) => {
    return {
        type: actionTypes.USER_SIGN_IN_SUCCESSFULLY,
        payload: {
            details,
            totaldetails
        }
    }
}

export const fetchDetailsBackend = (uid) => {
    return dispatch => {
        dispatch(startprogressBar() )
        return axios.post(`${config.url}/user/currentuser`, { uid: uid })
            .then((result) => {
                if (result.data ==="") {
                    this.props.showSnackBar({
                        message: "Email id is not present",
                        type: "error"
                    })
                }
                else {
                    let userData = {
                        uid: result.data.data.UID,
                        name: result.data.data.FirstName,
                        length: result.data.length,
                        details:result.data.data
                    }
                    dispatch(successfulSignIn(userData,result.data.data));
                    dispatch(showSnackBar({
                    message: "Welcome Back to Furnique!!Happy Shopping",
                    type: "success"
                }));
                }
                dispatch(stopprogressBar());
            }).catch((err) => {
                dispatch(showSnackBar({
                    message: "Failed to Load Resources !! Server Not Responding",
                    type: "error"
                }))
                dispatch(stopprogressBar());
            })


    }
}

const signInWithFireBase = (userId, password,closeDialog) => {
    return dispatch => {
        dispatch(startprogressBar());
        return config.fire.auth().signInWithEmailAndPassword(userId, password)
            .then((data) => {
                dispatch(fetchDetailsBackend(data.user.uid))
                closeDialog();
            })
            .catch((data) => {

                if (data.code === "auth/user-not-found") {
                    dispatch(showSnackBar({
                        message: "No user found",
                        type: "error"
                    }))
                }

                else if (data.code === "auth/invalid-email") {
                    dispatch(showSnackBar({
                        message: "Email id is Invalid",
                        type: "error"
                    }))

                }
                else if (data.code === "auth/wrong-password") {
                    dispatch(showSnackBar({
                        message: "Password is wrong",
                        type: "error"
                    }))

                }
                else if (data.code === "auth/network-request-failed") {
                    dispatch(showSnackBar({
                        message: "Network Error",
                        type: "error"
                    }))

                }

                dispatch(stopprogressBar());
            })


    }
}


export default signInWithFireBase;