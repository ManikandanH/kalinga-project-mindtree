import * as actionTypes from '../NewActions';

export default (state = [], action) => {
    switch (action.type) {
        case actionTypes.MY_ORDER:
            return {
                myOrders: action.payload.myorder,
                orderLength: action.payload.length
            }
        default:
            return state;
    }
}