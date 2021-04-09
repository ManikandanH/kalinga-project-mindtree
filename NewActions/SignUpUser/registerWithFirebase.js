import axios from 'axios';
import startprogressBar from '../ProgressBar/startProgressBarAction'
import stopprogressBar from '../ProgressBar/stopProgressBarAction'
import showSnackBar from '../SnackBar/showSnackBarAction'
import * as config from '../../config'
import history from '../../history';
import {successfulSignIn} from '../user/signIn'

export const registerInBackend = (personalInfo) => {
    return dispatch => {
        dispatch(startprogressBar());
        return axios.post(`${config.url}/signup`, personalInfo)
            .then((res) => {
                config.fire.auth().signOut();
                if(personalInfo.Phone)
                    history.goBack();
                dispatch(successfulSignIn({
                    uid: personalInfo.UID, name: personalInfo.FirstName, length: 0, 
                    details:res.data
                },res.data))
                dispatch(showSnackBar({
                    message: "Welcome to Furnique!!Happy Shopping",
                    type: "success"
                }));
                dispatch(stopprogressBar());
            })
            .catch(err => {
                if (config.fire.auth().currentUser)
                    config.fire.auth().currentUser.delete();
                dispatch(showSnackBar({
                    message: "Network Issues!!Fail to fetch Resources",
                    type: "error"
                }));
                dispatch(stopprogressBar());
            })

    }

}


const registerWithGoogle = (personalInfo) => {
    return dispatch => {
        dispatch(startprogressBar());
        return config.fire.auth().createUserWithEmailAndPassword(personalInfo.Email, personalInfo.Password)
            .then((res) => {
                personalInfo.UID = res.user.uid
                dispatch(registerInBackend(personalInfo))
            })
            .catch(err => {
                if (err.code) {
                    if (err.code === "auth/email-already-in-use")
                        dispatch(showSnackBar({
                            message: "Already Have an Account with this Email Id",
                            type: "error"
                        }));
                    else if (err.code === "auth/network-request-failed")
                        dispatch(showSnackBar({
                            message: "Network Issues!!Fail to fetch Resources",
                            type: "error"
                        }));
                    else if (err.code === "auth/invalid-email")
                        dispatch(showSnackBar({
                            message: "Invalid Email",
                            type: "error"
                        }));
                }
                else {
                    dispatch(showSnackBar({
                        message: "Network Issues!!Failed to Load Resources",
                        type: "error"
                    }));
                }
                dispatch(stopprogressBar())

            })

    }
}

export default registerWithGoogle;
