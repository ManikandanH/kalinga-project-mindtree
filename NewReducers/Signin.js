import * as actionTypes from '../NewActions/'

var value = sessionStorage.getItem('userdetails');
var obj = JSON.parse(value);
const func = () => {
    if (sessionStorage.getItem('userdetails') !== null)

        return {
            isuser: true,
            name: obj.name,
            uid: obj.uid,
            length: obj.length,
            details: obj.details
        }
    else {
        return {
            isuser: false,
            length: 0,
            name: "",
            uid: "",
            details: {}
        }
    }
}

export default function (state = func(), action) {
    switch (action.type) {
        case actionTypes.USER_SIGN_IN_SUCCESSFULLY:
            sessionStorage.setItem('userdetails', JSON.stringify(action.payload.details))
            return {
                ...state,
                isuser: true,
                name: action.payload.details.name,
                uid: action.payload.details.uid,
                length: action.payload.details.length,
                details: action.payload.totaldetails
            }

        case actionTypes.USER_SIGN_OUT_SUCCESSFULLY:
            sessionStorage.removeItem('userdetails');
            return {

                isuser: false,
                length: 0
            }
        case "ADD_TO_CART":
            let details = {
                name: state.name,
                uid: state.uid,
                length: state.length + 1,
                details: state.details
            }
            sessionStorage.setItem('userdetails', JSON.stringify(details))
            return {
                ...state,
                length: state.length + 1
            }
        case "USER_PLACED_ORDER":
            let details1 = {
                name: state.name,
                uid: state.uid,
                length: 0,
                details: state.details
            }
            sessionStorage.setItem('userdetails', JSON.stringify(details1))
            return {
                ...state,
                length: 0
            }
        case "USER_REMOVED_ORDER":
            let details2 = {
                name: state.name,
                uid: state.uid,
                length: state.length - 1,
                details: state.details
            }
            sessionStorage.setItem('userdetails', JSON.stringify(details2))
            return {
                ...state,
                length: state.length - 1
            }
        case actionTypes.UPDATE_PROFILE:
            details2 = {
                name: state.name,
                uid: state.uid,
                length: state.length,
                details: action.payload.updatedDetails
            }
            sessionStorage.setItem('userdetails', JSON.stringify(details2))
            return {
                ...state,
                details: action.payload.updatedDetails
            }
            default:
            return state;
    }

}