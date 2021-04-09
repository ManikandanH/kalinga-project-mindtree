import { SIGN_UP_SELLER_RETRIEVED } from '../index';
import { SIGN_UP_SELLER_INITIATED } from '../index'
import axios from 'axios';
import { url } from '../../config'
import startprogressBar from '../ProgressBar/startProgressBarAction'
import stopprogressBar from '../ProgressBar/stopProgressBarAction'
import showSnackBar from '../SnackBar/showSnackBarAction'
import history from '../../history';

const sellerSignUpInitiated = () => {
    return {
        type: SIGN_UP_SELLER_INITIATED,
        payload: {
            message: "Seller signup Initiated"
        }
    }
}

const sellerSignUpComplete = (data) => {

    return {
        type: SIGN_UP_SELLER_RETRIEVED,
        payload: {
            signinsellerdata: data
        }
    }
}



const sellerSignUp = (Name, eMail, password, street, city, stateA, pincode, pannum, gstnum) => {

    return dispatch => {
        dispatch(startprogressBar());
        dispatch(sellerSignUpInitiated());

        return (axios.post(`${url}/seller/Signup`, { name: Name, email: eMail, password: password, street: street, city: city, state: stateA, pincode: pincode, pannum: pannum, gstnum: gstnum })
            .then(res => {
                dispatch(stopprogressBar());
                if (res.data !== 0) {
                    dispatch(sellerSignUpComplete(res.data))
                    dispatch(showSnackBar({
                        message: "Successfully Signed Up!! LogIn To Continue",
                        type: "success"
                    }));
                    history.goBack();
                }
                else {
                    dispatch(sellerSignUpComplete(res.data))
                    dispatch(showSnackBar({
                        message: "Error in registeration",
                        type: "warning"
                    }))
                }

            }))
            .catch((err) => {
                dispatch(stopprogressBar());
                if (err.response.data === "Error in email") {
                    dispatch(showSnackBar({
                        message: "This Email ID already exists",
                        type: "warning"
                    }))
                }
                else if (err.response.data === "Error in pannum") {
                    dispatch(showSnackBar({
                        message: "This PAN number already exists",
                        type: "warning"
                    }))
                }
                else if (err.response.data === "Error in gstnum") {
                    dispatch(showSnackBar({
                        message: "This GST number already exists",
                        type: "warning"
                    }))
                }
                else if (err.response.data === "Error in name") {
                    dispatch(showSnackBar({
                        message: "This Name already exists",
                        type: "warning"
                    }))
                }
                else{
                    dispatch(showSnackBar({
                        message: "An Error has occured",
                        type: "warning"
                    }))
                }

            })
    }
}

export default sellerSignUp;