import axios from 'axios'
import { url } from '../config'
import startprogressBar from '../NewActions/ProgressBar/startProgressBarAction'
import stopprogressBar from '../NewActions/ProgressBar/stopProgressBarAction'
import showSnackBar from '../NewActions/SnackBar/showSnackBarAction'
import signOutSeller from '../NewActions/Seller/signoutSeller'
function receiveProducts(Products) {
    return {
        type: "RECEIVE_PRODUCT_ADMIN",
        payload: Products.data
    }
}


function FetchProducts(name, id) {
    let urls;
    return (dispatch) => {
        if (sessionStorage.getItem('sellertoken') !== null) {
            urls = `${url}/seller/products`;

        }
        else if (sessionStorage.getItem('admintoken') !== null) {
            urls = `${url}/admin/products`;
        }
        dispatch(startprogressBar());
        return axios.post(urls, {
            sellerName: name,
            sellerId: id
        })
            .then((response) => {
                dispatch(receiveProducts(response))
                dispatch(stopprogressBar());
                if (!response.data.length) {
                    dispatch(showSnackBar({
                        message: "Sorry No Products are there",
                        type: "warning"
                    }))

                }
            }).catch((err) => {
                dispatch(stopprogressBar());
                if (err.response && err.response.data === "seller") {
                    dispatch(signOutSeller());
                    dispatch(showSnackBar({
                        message: "Your have been deleted",
                        type: "error"
                    }))
                }
                else
                    dispatch(showSnackBar({
                        message: "Sorry Network Error",
                        type: "warning"
                    }))
            })
    }
}

export default FetchProducts;