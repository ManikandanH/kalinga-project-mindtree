import axios from 'axios'
import {url} from '../config'


const requestPosts=(product)=>{
    return {
        type:"REQUEST_PRODUCT",
        payload:product
    }
}
  function receivePosts(product) {
 
    return {
      type: "RECEIVE_PRODUCT",
      payload:product.data
            
      
    }
  }


function FetchData(product) {
    return (dispatch) => {
        dispatch(requestPosts(product));
        return axios.post(`${url}/category`,{typeOfProduct:product})
        .then((response)=>{
            
          dispatch(receivePosts(response))
        }).catch((err)=>
      {alert("Error has occured")})
    }
}

export default FetchData;