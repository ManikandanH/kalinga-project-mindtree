import * as actionTypes from '../NewActions';
var initialState = {
    PurchasedProduct: [],
    DeliveryAddress: {},
    searchInitiated: false
}
export default function (state = initialState, action) {
    switch (action.type) {
        case actionTypes.PURCHASED_PRODUCT:
            return {

                PurchasedProduct: action.payload.Product,
                User: action.payload.User,
                searchInitiated: true,
                DeliveryAddress: action.payload.DeliveryAddress
            }
        default:
            return state
    }

}