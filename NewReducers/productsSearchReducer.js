import * as actionTypes from '../NewActions'

const initialState = {
    searchResults: [],
    searchInitiated: false
}

export default function (state = initialState, action) {

    switch (action.type) {
        case actionTypes.SEARCH_INITIATED:
            return {
                ...state,
                searchInitiated:true
            }
        case actionTypes.SEARCH_RESULT_RETRIEVED:
            return {
                searchResults: action.payload.results,
                searchInitiated: false
            }

        default:
            return state;
    }

}