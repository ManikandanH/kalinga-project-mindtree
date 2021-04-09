import axios from 'axios'
import * as config from '../../../config'
import * as actionTypes from '../../'
import startProgressBar from '../../ProgressBar/startProgressBarAction';
import stopProgressBar from '../../ProgressBar/stopProgressBarAction';
import showSnackbar from '../../SnackBar/showSnackBarAction'

const successfullyFetchedSellers = (response) => {
    return {
        type: actionTypes.FETCH_SELLER_LIST,
        payload: {
            approvedSeller: response.approvedSeller,
            pendingSeller: response.pendingSeller,
            rejectedSeller:response.rejectedSeller
        }
    }
}


const fetchSellers = () => {
    return dispatch => {
        dispatch(startProgressBar())
        return axios.get(`${config.url}/admin/sellerlist`)
            .then(response => {
                dispatch(successfullyFetchedSellers(response.data));
                dispatch(stopProgressBar())
            })
            .catch(err => {
                dispatch(showSnackbar({
                    message: "Error in Fetching Seller List",
                    type: "error"
                }))
            })

    }
}
export default fetchSellers;



