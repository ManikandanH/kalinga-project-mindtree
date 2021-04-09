import axios from 'axios'
import * as config from '../../../config'
import * as actionTypes from '../../'
import startProgressBar from '../../ProgressBar/startProgressBarAction';
import stopProgressBar from '../../ProgressBar/stopProgressBarAction';
import showSnackbar from '../../SnackBar/showSnackBarAction'


const successfullyDeletedAcceptedSeller = (sellerId) => {
    return {
        type: actionTypes.DELETE_ACCEPTED_SELLER,
        payload: {
            sellerId
        }
    }
}
const successfullyDeletedRejectedSeller = (sellerId) => {
    return {
        type: actionTypes.DELETE_REJECTED_SELLER,
        payload: {
            sellerId
        }
    }
}

const deleteSeller = (sellerInfo) => {
    return dispatch => {
        dispatch(startProgressBar())
        return axios.post(`${config.url}/admin/deleteseller`, {
            id: sellerInfo.sellerId
        })
            .then(response => {
                if (sellerInfo.deleteFrom === "accepted")
                    dispatch(successfullyDeletedAcceptedSeller(sellerInfo.sellerId));
                else
                    dispatch(successfullyDeletedRejectedSeller(sellerInfo.sellerId));
                dispatch(stopProgressBar());
            })
            .catch(err => {
                dispatch(showSnackbar({
                    message: "Error Deleting Seller!!",
                    type: "error"
                }))
            })

    }
}
export default deleteSeller;



