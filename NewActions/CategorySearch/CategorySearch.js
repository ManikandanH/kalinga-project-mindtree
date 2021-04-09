import {CATEGORY_RESULTS_RETRIEVED} from '../index';



const CategoryResults=(data)=> {
    
    return{
        type:CATEGORY_RESULTS_RETRIEVED,
        payload:{
            results:data
        }
    }
      }
      
    export default CategoryResults;
























