import axios from 'axios'
import * as config from '../../../config'
import * as actionTypes from '../../'
import startProgressBar from '../../ProgressBar/startProgressBarAction';
import stopProgressBar from '../../ProgressBar/stopProgressBarAction';
import showSnackbar from '../../SnackBar/showSnackBarAction'

const successfullyFetchedUserStatistics = (stat) => {
    return {
        type: actionTypes.SUCCESSFULLY_FETCHED_USER_STATISTICS,
        payload: {
            userStatistics: stat
        }
    }
}


const fetchUserStatistics = (user, uid) => {
    return dispatch => {
        dispatch(startProgressBar())
        return axios.get(`${config.url}/admin/statistics/users`)
            .then((res) => {
                if (res.data && res.data.length) {
                    let sum = 0;
                    for (let i = 0; i < res.data.length; i++) {
                        sum = sum + res.data[i];
                        res.data[i] = sum
                    }
                    dispatch(successfullyFetchedUserStatistics(res.data));

                }
                else if (res.data && res.data.length === 0) {
                    dispatch(successfullyFetchedUserStatistics(res.data));
                    dispatch(showSnackbar({ message: "No users", type: "warning" }))
                }
                dispatch(stopProgressBar());

            })
            .catch((err) => {
                dispatch(stopProgressBar());
                if (!(err.response && err.response.status === 401))
                    dispatch(showSnackbar({ message: "Failed To Load Some Resources", type: "error" }))
            })
    }
}
export default fetchUserStatistics;



