import axios from 'axios'
import {url} from '../config'

const requestUsers=()=>{
    return {
        type:"REQUEST_USERS",
        payload:"Users Requested"
    }
}

function receiveUsers(Users){
    return{
        type:"RECEIVE_USERS",
        payload:Users.data
    }
}





function FetchUsers(){
    return (dispatch)=>{
        dispatch(requestUsers());
        return axios.get(`${url}/admin/users`)
        .then((response)=>{
            dispatch(receiveUsers(response))
            
            
        }).catch((err)=>{
            alert("Network Error")
            
        })
    }
}
export default FetchUsers;