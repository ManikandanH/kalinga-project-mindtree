import {SEARCH_RESULT_RETRIEVED} from '../index';



const Search=(user)=> {
    
    return{
        type:SEARCH_RESULT_RETRIEVED,
        payload:{
            results:user
        }
    }
}

      
    export default Search;






























// import axios from 'axios';
// import {url} from '../config'



//  const receiveBooks = (user) =>
// {
//   return{
//         type:"Key",
//         payload:user
//   }

// }


//  const Search=(user)=> {

//     return dispatch => {
//       return (axios.post(`${url}/searchresults`,{
//           SearchValue:user
//       })
//       .then(res => dispatch(receiveBooks(res.data))))
//     }
//   }
  
// export default Search;
