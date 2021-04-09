import * as actionTypes from '../NewActions/'

var value = sessionStorage.getItem('sellertoken');
var obj = JSON.parse(value);
const func = () => {
    if (sessionStorage.getItem('sellertoken') !== null)

        return {
            isseller: true,
            token: obj.token,
            sellerId: obj.sellerId,
            sellerName: obj.sellerName

        }
    else {
        return {
            isseller: false,
            token: "",
            sellerId: "",
            sellerName: ""

        }
    }
}

export default function (state = func(), action) {
    switch (action.type) {
        case actionTypes.SIGN_IN_SELLER_INITIATED:
            return {
                isseller: true,
                token: action.payload.signinsellerdata.token,
                sellerId: action.payload.signinsellerdata.sellerid,
                sellerName: action.payload.signinsellerdata.name
            }

        case "SELLER_SIGN_OUT_SUCCESSFULLY":
            sessionStorage.removeItem('sellertoken');
            return {
                isseller: false,
                token: "",
                sellerId: "",
                sellerName: ""
            }
        default:
            return state;

    }


}