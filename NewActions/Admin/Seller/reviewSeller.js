import axios from 'axios'
import * as config from '../../../config'
import * as actionTypes from '../../'
import startProgressBar from '../../ProgressBar/startProgressBarAction';
import stopProgressBar from '../../ProgressBar/stopProgressBarAction';
import showSnackbar from '../../SnackBar/showSnackBarAction'


const successfullyAcceptedSeller = (seller) => {
    return {
        type: actionTypes.ACCEPT_SELLER,
        payload: {
            seller
        }
    }
}
const successfullyRejectedSeller = (seller) => {
    return {
        type: actionTypes.REJECT_SELLER,
        payload: {
            seller
        }
    }
}

const reviewSeller = (adminReview) => {
    return dispatch => {
        dispatch(startProgressBar())
        return axios.post(`${config.url}/admin/reviewseller`, {
            id: adminReview.seller._id,
            accepted: adminReview.accepted
        })
            .then(response => {
                if (adminReview.accepted)
                    dispatch(successfullyAcceptedSeller(adminReview.seller));
                else
                    dispatch(successfullyRejectedSeller(adminReview.seller));

                dispatch(stopProgressBar());
            })
            .catch(err => {
                dispatch(showSnackbar({
                    message: "Error Accepting Seller!!",
                    type: "error"
                }))
            })

    }
}
export default reviewSeller;



