import { VIEW_USERS_RETRIEVED } from '../index';
import { VIEW_USERS_INITIATED } from '../index'
import axios from 'axios';
import { url } from '../../config'
import startprogressBar from '../ProgressBar/startProgressBarAction'
import stopprogressBar from '../ProgressBar/stopProgressBarAction'
import showSnackBar from '../SnackBar/showSnackBarAction'


const viewUsersInitiated = () => {
    return {
        type: VIEW_USERS_INITIATED,
        payload: {
            categorySelected: "Users View"
        }
    }
}

const viewUsersResult = (data) => {

    return {
        type: VIEW_USERS_RETRIEVED,
        payload: {
            viewUsersData: data
        }
    }
}



const viewUsers = (category) => {

    return dispatch => {
        dispatch(startprogressBar());
        dispatch(viewUsersInitiated());

        return (axios.get(`${url}/admin/users`)
            .then(res => {
                dispatch(stopprogressBar());
                if (res.data.length)
                    dispatch(viewUsersResult(res.data))
                else if(res.data.length===0) {
                    
                    dispatch(showSnackBar({
                        message: "No users Found ",
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

export default viewUsers;