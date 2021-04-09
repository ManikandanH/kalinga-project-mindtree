import * as actionTypes from '../NewActions/index'
const initialState= {
    results:[],
    initialValue:false
}
export default  function(state=initialState,action)
{

    switch(action.type)
    {
   
        case actionTypes.INDIVIDUAL_PRODUCT:
                return {
                results:action.payload,
                initialValue:true
                }
        default:
            return state;

    }
    
}