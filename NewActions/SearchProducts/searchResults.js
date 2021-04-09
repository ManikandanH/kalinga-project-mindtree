import searchInitiated from './searchInitiated'
import showSnackBar from '../SnackBar/showSnackBarAction'
import startprogressBar from '../ProgressBar/startProgressBarAction'
import stopprogressBar from '../ProgressBar/stopProgressBarAction'
import searchResult from './SearchProducts'

import axios from 'axios';
import {url} from '../../config'


const searchResults = (searchText) => {
      return dispatch => {
            dispatch(startprogressBar());
            dispatch(searchInitiated(searchText));
           return axios.post(`${url}/searchresults`,{
            SearchValue:searchText
        }).then((res) => {
            if(res.data === "No results")
                {
                    dispatch(searchResult([]))
                    dispatch(showSnackBar({
                        message:"There are no such products",
                        type:"warning"
                    }))
                    dispatch(stopprogressBar());
                }
             else if(res.data==="error"){
                    dispatch(showSnackBar({
                        message:"There are no such products",
                        type:"warning"
                    }))
                    dispatch(stopprogressBar());
                }
           else{
               dispatch(stopprogressBar());
                dispatch(searchResult(res.data));
            }})
        }
}

export default searchResults