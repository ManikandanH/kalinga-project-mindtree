import * as actionTypes from '../NewActions'

const initialState = {
    categoryResults: [],
    searchInitiated:false,
    resultsReceived:false
}

export default function (state = initialState, action) {

    switch (action.type) {
        case "INITIATED":
        return{
            ...state,
            searchInitiated:true
        }
        case actionTypes.CATEGORY_RESULTS_RETRIEVED:
            return {
                categoryResults: action.payload.results,
                searchInitiated:false,
                resultsReceived:true
            }
        default:
            return state;
    }
    
    
}