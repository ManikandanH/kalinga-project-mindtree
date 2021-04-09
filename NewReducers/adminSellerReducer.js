import * as actionTypes from '../NewActions/'
const initialState = {
    sellersDataFetched: false,
    approvedSeller: [],
    pendingSeller: [],
    rejectedSeller: []
}

export default function (state = initialState, action) {

    switch (action.type) {

        case actionTypes.FETCH_SELLER_LIST:
            return {
                sellersDataFetched: true,
                approvedSeller: action.payload.approvedSeller,
                pendingSeller: action.payload.pendingSeller,
                rejectedSeller: action.payload.rejectedSeller,
            }

        case actionTypes.DELETE_ACCEPTED_SELLER:
            let approvedSeller = state.approvedSeller.filter((item) => {
                if (item._id !== action.payload.sellerId)
                    return true;
                else
                    return false;
            })
            return {
                ...state,
                approvedSeller: approvedSeller,
            }

        case actionTypes.ACCEPT_SELLER:
            let pendingSeller = state.pendingSeller.filter((item) => {
                if (item._id !== action.payload.seller._id)
                    return true;
                else
                    return false;
            })
            return {
                ...state,
                approvedSeller: [...state.approvedSeller, action.payload.seller],
                pendingSeller
            }

        case actionTypes.REJECT_SELLER:
            let newPendingSeller = state.pendingSeller.filter((item) => {
                if (item._id !== action.payload.seller._id)
                    return true;
                else
                    return false;
            })
            return {
                ...state,
                pendingSeller: newPendingSeller,
                rejectedSeller: [...state.rejectedSeller, action.payload.seller]
            }
        case actionTypes.DELETE_REJECTED_SELLER:
            let rejectedSeller = state.rejectedSeller.filter((item) => {
                if (item._id !== action.payload.sellerId)
                    return true;
                else
                    return false;
            })
            return {
                ...state,
                rejectedSeller: rejectedSeller,
            }
        default:
            return state;
    }
}