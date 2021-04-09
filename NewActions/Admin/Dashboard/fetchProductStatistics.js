import axios from 'axios'
import * as config from '../../../config'
import * as actionTypes from '../../'
import startProgressBar from '../../ProgressBar/startProgressBarAction';
import stopProgressBar from '../../ProgressBar/stopProgressBarAction';
import showSnackbar from '../../SnackBar/showSnackBarAction'

const successfullyFetchedProductStatistics = (stat) => {
    return {
        type: actionTypes.SUCCESSFULLY_FETCHED_PRODUCT_STATISTICS,
        payload: {
            productStatistics: stat
        }
    }
}


const fetchProductStatistics = () => {
    return dispatch => {
        dispatch(startProgressBar())
        return axios.get(`${config.url}/admin/statistics/products`)
            .then((res) => {
                if (res.data["Beds"] || res.data["Tables"] || res.data["Chairs"] || res.data["Sofa"] ||
                    res.data["Dressing Table"]) {
                        if(!res.data["Beds"])
                            res.data["Beds"]=0;
                        if(!res.data["Chairs"])
                            res.data["Chairs"]=0;
                        if(!res.data["Sofa"])
                            res.data["Sofa"]=0;
                        if(!res.data["Dressing Table"])
                            res.data["Dressing Table"]=0;
                        if(!res.data["Tables"])
                            res.data["Tables"]=0;
                    let productsInfo = [res.data["Beds"], res.data["Tables"], res.data["Chairs"],
                    res.data["Sofa"], res.data["Dressing Table"]];
                    dispatch(successfullyFetchedProductStatistics(productsInfo))
                }
                else
                    dispatch(successfullyFetchedProductStatistics([0, 0, 0, 0, 0, 1]))

                dispatch(stopProgressBar())

            })
            .catch((err) => {
                dispatch(stopProgressBar());
                if (!(err.response && err.response.status === 401))
                    dispatch(showSnackbar({ message: "Failed To Load Some Resources", type: "error" }))
            })
    }
}
export default fetchProductStatistics;



