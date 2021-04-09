import axios from 'axios'
import * as config from '../../../config'
import * as actionTypes from '../../'
import startProgressBar from '../../ProgressBar/startProgressBarAction';
import stopProgressBar from '../../ProgressBar/stopProgressBarAction';
import showSnackbar from '../../SnackBar/showSnackBarAction'

const successfullyFetchedSalesStatistics = (stat) => {
    return {
        type: actionTypes.SUCCESSFULLY_FETCHED_SALES_STATISTICS,
        payload: {
            salesStatistics: stat
        }
    }
}


const fetchSalesStatistics = () => {
    return dispatch => {
        dispatch(startProgressBar())
        return axios.get(`${config.url}/admin/statistics/sales`)
            .then((res) => {
                dispatch(successfullyFetchedSalesStatistics(res.data))
            })
            .catch((err) => {
                dispatch(stopProgressBar());
                if (!(err.response && err.response.status === 401))
                    dispatch(showSnackbar({ message: "Failed To Load Some Resources", type: "error" }))
            })
    }
}
export default fetchSalesStatistics;



