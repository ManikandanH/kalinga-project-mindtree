import * as actionTypes from '../NewActions/'
const initialState = {
    productStatistics: [0, 0, 0, 0, 0, 1],
    userStatistics: [],
    salesStatistics: [],
}

export default function (state = initialState, action) {

    switch (action.type) {
        case actionTypes.SUCCESSFULLY_FETCHED_PRODUCT_STATISTICS:
            return {
                ...state,
                productStatistics: action.payload.productStatistics
            }
        case actionTypes.SUCCESSFULLY_FETCHED_USER_STATISTICS:
            return {
                ...state,
                userStatistics: action.payload.userStatistics
            }
        case actionTypes.SUCCESSFULLY_FETCHED_SALES_STATISTICS:
            return {
                ...state,
                salesStatistics: action.payload.salesStatistics
            }
        default:
            return initialState;
    }
}