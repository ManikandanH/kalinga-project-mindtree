import * as actionTypes from '../Actions/'
const initialState = {
    isSignedIn: false,
    token: "",
}

export default function (state = initialState, action) {

    switch (action.type) {
        case actionTypes.ADMIN_SIGN_IN_SUCCESSFULLY:
            return {
                isSignedIn: true,
                token: action.payload.token
            }
        case actionTypes.ADMIN_SIGN_OUT_SUCCESSFULLY:
            return initialState;
        default:
            return state;
    }
}