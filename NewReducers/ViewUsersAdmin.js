import * as actionTypes from '../NewActions'

const initialState = {
    searchResults: [],
    searchInitiated: false
}

export default function (state = initialState, action) {

    switch (action.type) {
        case actionTypes.CATEGORY_SEARCH_INITIATED:
            return {
                searchInitiated: true,
                resultsReceived: false,
                searchedCategory: action.payload.categorySelected,
                searchResults: []
            }

        case actionTypes.VIEW_USERS_RETRIEVED:
            return {
                ...state,
                searchInitiated: false,
                resultsReceived: true,
                searchResults: action.payload.viewUsersData

            }
        case actionTypes.ADMIN_DELETE_USER:
            let searchResults = state.searchResults.filter((item) => {
                if (item.UID !== action.payload.uid)
                    return true
                else
                    return false
            })
            return {
                ...state,
                searchResults

            }

        default:
            return state;

    }
    
}