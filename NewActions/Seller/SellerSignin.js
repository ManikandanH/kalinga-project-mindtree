import { SIGN_IN_SELLER_INITIATED } from '../index'
import axios from 'axios';
import { url } from '../../config'
import startprogressBar from '../ProgressBar/startProgressBarAction'
import stopprogressBar from '../ProgressBar/stopProgressBarAction'
import showSnackBar from '../SnackBar/showSnackBarAction'


const sellerSignInInitiated = (data) => {
    return {
        type: SIGN_IN_SELLER_INITIATED,
        payload: {
            signinsellerdata: data
        }
    }
}



const sellerSignIn = (userId, password, closeDialog) => {

    return dispatch => {
        dispatch(startprogressBar());
        return (axios.post(`${url}/seller/signin`, { email: userId, password: password })
            .then((res) => {
                dispatch(stopprogressBar());
                if (res.data.isApproved === false) {
                    dispatch(showSnackBar({
                        message: "You are not approved",
                        type: "error"
                    }))
                }
                else if (res.data.token !== 0 && res.data.token !== undefined) {
                    let sellerdetails = {
                        token: res.data.token,
                        sellerId: res.data.sellerid,
                        sellerName: res.data.name,
                        isApproved: res.data.isApproved
                        
                    }
                    sessionStorage.setItem("sellertoken", JSON.stringify(sellerdetails));
                    dispatch(sellerSignInInitiated(res.data))
                    closeDialog();
                }
                else if (res.data === "No Seller Found") {
                    dispatch(showSnackBar({
                        message: "Seller not Found",
                        type: "warning"
                    }))
                }
                else {
                    dispatch(showSnackBar({
                        message: "Password Wrong",
                        type: "warning"
                    }))
                }
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

export default sellerSignIn;